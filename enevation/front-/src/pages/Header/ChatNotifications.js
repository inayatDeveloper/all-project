import React, { useEffect } from 'react';
import { Link, generatePath } from 'react-router-dom';

import * as Routes from 'routes';
import Avatar from 'components/Avatar';

import { useStore } from 'store';

import { useQuery } from '@apollo/react-hooks';

import { GET_AUTH_USER } from 'graphql/user';
import { GET_NEW_CONVERSATIONS_SUBSCRIPTION } from 'graphql/messages';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const ChatNotifications = () => {
  const [{ auth }] = useStore();
  const { loading, subscribeToMore, data, refetch } = useQuery(GET_AUTH_USER);

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: GET_NEW_CONVERSATIONS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const oldConversations = prev.getAuthUser.newConversations;
        const { newConversation } = subscriptionData.data;

        // Don't show message notification in Header if user already is on messages page
        if (window.location.href.split('/')[3] === 'messages') {
          return prev;
        }

        // If authUser already has unseen message from that user,
        // remove old message, so we can show the new one
        const index = oldConversations.findIndex(
          u => u.id === newConversation.id
        );
        if (index > -1) {
          oldConversations.splice(index, 1);
        }

        // Merge conversations
        const mergeConversations = [newConversation, ...oldConversations];

        // Attach new conversation to authUser
        const authUser = prev.getAuthUser;
        authUser.newConversations = mergeConversations;

        return { getAuthUser: authUser };
      },
    });

    return () => {
      unsubscribe();
    };
  }, [subscribeToMore]);

  return (
    <div className='control-icon more has-items'>
      <FontAwesomeIcon
        size='2x'
        color='white'
        icon={faComment}
        style={{ height: '24px', verticalAlign: '0' }}
      />
      {data.getAuthUser.newConversations.length > 0 && (
        <div className='label-avatar bg-purple'>
          {data.getAuthUser.newConversations.length}
        </div>
      )}

      <div className='more-dropdown more-with-triangle triangle-top-center'>
        <div className='ui-block-title ui-block-title-small'>
          <h6 className='title'>Messages</h6>
          {/* <a href>Mark all as read</a>
          <a href>Settings</a> */}
        </div>

        <div className='mCustomScrollbar' data-mcs-theme='dark'>
          <ul className='notification-list chat-message'>
            {data.getAuthUser.newConversations.map(message => {
              const rawTime = parseInt(message.lastMessageCreatedAt);
              const postDate = new Date(rawTime);

              return (
                <li className='message-unread'>
                  <div className='author-thumb'>
                    <Avatar image={message.image} />
                  </div>

                  <div className='notification-event'>
                    <Link
                      to={generatePath(Routes.MESSAGES, {
                        userId: '5df7cd1ae8d6ec604b737ae5',
                      })}
                    >
                      {`${message.firstName} ${message.lastName}`}
                    </Link>
                    <span className='chat-message-item'>
                      {message.lastMessage}
                    </span>
                    <span className='notification-date'>
                      <time className='entry-date updated' dateTime={postDate}>
                        {moment(postDate, 'YYYYMMDDHHmms').fromNow()}
                      </time>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <Link
          to={generatePath(Routes.MESSAGES, {
            userId: '5df7cd1ae8d6ec604b737ae5',
          })}
          className='view-all bg-purple'
        >
          View All Messages
        </Link>
      </div>
    </div>
  );
};

export default ChatNotifications;
