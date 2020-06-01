import { useApolloClient } from '@apollo/react-hooks';
import { CREATE_MESSAGE, DELETE_MESSAGE } from 'graphql/message';
import { useStore } from 'store';

/**
 * React hook that Creates or Deletes a message after like, follow or comment
 */
export const useMessages = () => {
  const [{ auth }] = useStore();

  const client = useApolloClient();

  /**
   * Helper function for mutation
   */
  const mutate = async (mutation, variables) => {
    try {
      return await client.mutate({
        mutation,
        variables: { input: { ...variables } },
      });
    } catch (error) {
      console.error('Error while mutating a message', error);
    }
  };

  /**
   * Creates a message
   */
  const create = ({ user }) => {
    return mutate(CREATE_MESSAGE, {
      authorId: auth.user.id,
      userId: user.id,
      content: String,
      image: String,
      imagePublicId: String,
    });
  };

  /**
   * Removes a message
   */
  const remove = ({ messageId }) => mutate(DELETE_MESSAGE, { id: messageId });

  /**
   * Checks if user has already a message and based on that Creates or Deletes a message
   */
  const toggle = ({ user, content, hasDone }) => {
    const isNotified = user.messages.find(n => hasDone === hasDone.id);
    const messageId = isNotified ? isNotified.id : null;
    const operation = messageId ? 'delete' : 'create';
    const options = {
      create: {
        mutation: CREATE_MESSAGE,
        variables: {
          authorId: auth.user.id,
          userId: user.id,
          content: String,
          image: String,
          imagePublicId: String,
        },
      },
      delete: {
        mutation: DELETE_MESSAGE,
        variables: { id: messageId },
      },
    };

    return mutate(options[operation].mutation, options[operation].variables);
  };

  return { create, remove, toggle };
};
