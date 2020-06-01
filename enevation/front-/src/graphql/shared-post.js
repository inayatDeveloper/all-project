import gql from 'graphql-tag';

/**
 * Creates a like
 */
export const CREATE_SHARED_POST = gql`
  mutation($input: CreateSharedPostInput!) {
    createSharedPost(input: $input) {
      id
    }
  }
`;

/**
 * Deletes a like
 */
export const DELETE_SHARED_POST = gql`
  mutation($input: DeleteSharedPostInput!) {
    deleteSharedPost(input: $input) {
      id
    }
  }
`;
