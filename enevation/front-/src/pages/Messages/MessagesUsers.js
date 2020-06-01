import React, { useEffect } from 'react';
import { withRouter, Link, generatePath } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import { GET_CONVERSATIONS } from 'graphql/user';
import { GET_NEW_CONVERSATIONS_SUBSCRIPTION } from 'graphql/messages';

import Avatar from 'components/Avatar';

import * as Routes from 'routes';

const MessagesUsers = ({ authUser, location, isSelma }) => {
  const { subscribeToMore, data, loading } = useQuery(GET_CONVERSATIONS, {
    variables: { authUserId: authUser.id },
  });
  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: GET_NEW_CONVERSATIONS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        const { newConversation } = subscriptionData.data;
        const oldConversations = prev.getConversations;

        if (oldConversations.some(u => u.id === newConversation.id)) {
          return prev;
        }

        // Merge conversations
        const conversations = newConversation;
        delete conversations['receiverId'];
        const mergedConversations = [newConversation, ...oldConversations];

        return { getConversations: mergedConversations };
      },
    });

    return () => {
      unsubscribe();
    };
  }, [subscribeToMore]);
  return (
    <div className='col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 pr-lg-0'>
      <ul className='notification-list chat-message'>
        {isSelma
          ? data &&
            data.getConversations.map(user => {
              const isSelma = user.id === '5df7cd1ae8d6ec604b737ae5';
              return (
                !isSelma && (
                  <li className='d-flex justify-content-start align-items-center px-3 py-2'>
                    <div className='author-thumb'>
                      <Avatar image={user.image} size={50} />
                    </div>
                    <div className='notification-event'>
                      <Link
                        to={generatePath(Routes.MESSAGES, {
                          userId: user.id,
                        })}
                        className='h6 notification-friend'
                      >
                        {`${user.firstName} ${user.lastName}`}
                      </Link>
                    </div>
                  </li>
                )
              );
            })
          : data &&
            data.getConversations.map(user => {
              return (
                !isSelma && (
                  <li className='d-flex justify-content-start align-items-center px-3 py-2'>
                    <div className='author-thumb'>
                      <Avatar image={user.image} size={50} />
                    </div>
                    <div className='notification-event'>
                      <Link
                        to={generatePath(Routes.MESSAGES, {
                          userId: user.id,
                        })}
                        className='h6 notification-friend'
                      >
                        {`${user.firstName} ${user.lastName}`}
                      </Link>
                    </div>
                  </li>
                )
              );
            })}
      </ul>
    </div>
  );
};

MessagesUsers.propTypes = {
  location: PropTypes.object.isRequired,
  authUser: PropTypes.object.isRequired,
};

export default withRouter(MessagesUsers);
