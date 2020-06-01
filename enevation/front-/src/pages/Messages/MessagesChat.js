import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useApolloClient } from '@apollo/react-hooks';

import MessagesChatConversation from './MessagesChatConversation';

import {
  GET_MESSAGES,
  GET_MESSAGES_SUBSCRIPTION,
  UPDATE_MESSAGE_SEEN,
} from 'graphql/messages';
import { GET_USER, GET_CONVERSATIONS, GET_AUTH_USER } from 'graphql/user';

import * as Routes from 'routes';

const MessagesChat = ({ match, authUser, isSelma, firstUserMessages }) => {
  let userId =
    isSelma && match.params.userId === '5df7cd1ae8d6ec604b737ae5'
      ? firstUserMessages && firstUserMessages.id
      : match.params.userId;

  const client = useApolloClient();

  const { data, loading } = useQuery(GET_USER, {
    variables: { id: userId },
    skip: userId === Routes.NEW_ID_VALUE,
  });
  const {
    subscribeToMore,
    data: messages,
    loading: messagesLoading,
  } = useQuery(GET_MESSAGES, {
    variables: { authUserId: authUser.id, userId },
    skip: userId === Routes.NEW_ID_VALUE,
    fetchPolicy: 'network-only',
  });

  const updateMessageSeen = useCallback(async () => {
    try {
      await client.mutate({
        mutation: UPDATE_MESSAGE_SEEN,
        variables: {
          input: {
            receiver: authUser.id,
            sender: userId,
          },
        },
        refetchQueries: () => [
          {
            query: GET_CONVERSATIONS,
            variables: { authUserId: authUser.id },
          },
          { query: GET_AUTH_USER },
        ],
      });
    } catch (err) {}
  }, [authUser.id, client, userId]);

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: GET_MESSAGES_SUBSCRIPTION,
      variables: { authUserId: authUser.id, userId },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        updateMessageSeen();

        const newMessage = subscriptionData.data.messageCreated;
        const mergedMessages = [...prev.getMessages, newMessage];

        return { getMessages: mergedMessages };
      },
    });

    return () => {
      unsubscribe();
    };
  }, [authUser.id, userId, subscribeToMore, updateMessageSeen]);

  useEffect(() => {
    if (userId !== Routes.NEW_ID_VALUE) {
      updateMessageSeen();
    }
  }, [userId, updateMessageSeen]);

  if (loading || messagesLoading) {
    return <h1></h1>;
  }

  let chatUser = null;
  if (data && data.getUser) {
    chatUser = data.getUser;
  }

  return (
    <>
      <MessagesChatConversation
        authUser={authUser}
        messages={messages ? messages.getMessages : []}
        chatUser={chatUser}
        data={messages}
        match={match}
        isAuth={authUser.id === '5df7cd1ae8d6ec604b737ae5'}
        isSelma={isSelma}
      />
    </>
  );
};

MessagesChat.propTypes = {
  match: PropTypes.object.isRequired,
  authUser: PropTypes.object.isRequired,
};

export default MessagesChat;
