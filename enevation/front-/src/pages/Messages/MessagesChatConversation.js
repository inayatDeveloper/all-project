import React, { useState, useRef, useEffect } from 'react';

import { useMutation } from '@apollo/react-hooks';

import Avatar from 'components/Avatar';

import { CREATE_MESSAGE } from 'graphql/messages';
import { GET_CONVERSATIONS } from 'graphql/user';

import * as Routes from 'routes';
import moment from 'moment';

const MessagesChatConversation = ({
  messages,
  authUser,
  chatUser,
  data,
  match,
  isAuth,
}) => {
  const bottomRef = useRef(null);
  const [messageText, setMessageText] = useState('');
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView();
    }
  }, [bottomRef, data]);

  const [createMessage] = useMutation(CREATE_MESSAGE);
  const sendMessage = e => {
    e.preventDefault();
    if (!messageText) return;

    setMessageText('');
    createMessage({
      variables: {
        input: {
          sender: authUser.id,
          receiver: chatUser ? chatUser.id : null,
          message: messageText,
        },
      },
      refetchQueries: ({ data }) => {
        if (data && data.createMessage && data.createMessage.isFirstMessage) {
          return [
            {
              query: GET_CONVERSATIONS,
              variables: { authUserId: authUser.id },
            },
          ];
        }
      },
    });
  };

  const onEnterPress = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      sendMessage(e);
    }
  };

  return (
    <>
      <div className='col col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 pl-lg-0'>
        <div className='chat-field'>
          <div className='ui-block-title block-title-bg p-3'>
            {chatUser && (
              <h6 className='title'>{`${chatUser.firstName} ${chatUser.lastName}`}</h6>
            )}
            <a href='1#' className='more'>
              <svg className='olymp-three-dots-icon'>
                <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
              </svg>
            </a>
          </div>

          <div className='mCustomScrollbar' data-mcs-theme='dark'>
            <ul className='notification-list chat-message chat-message-field'>
              {messages.map(message => {
                const isAuthUserReceiver =
                  '5df7cd1ae8d6ec604b737ae5' === message.sender.id;
                return (
                  isAuthUserReceiver && (
                    <li
                      className='px-3 py-2 border-bottom'
                      userMessage={isAuthUserReceiver}
                      key={message.id}
                    >
                      <div className='message-wraper d-flex justify-content-between align-items-center'>
                        {isAuthUserReceiver && (
                          <div className='author-thumb-outer d-flex align-items-center'>
                            <Avatar
                              className='author-thumb'
                              image={message.sender.image}
                            />
                            <a
                              href='1#'
                              className='h6 notification-friend pl-2'
                            >
                              {message.sender.username}
                            </a>
                          </div>
                        )}
                        {!isAuthUserReceiver && (
                          <div className='author-thumb-outer d-flex align-items-center'>
                            <Avatar
                              className='author-thumb'
                              image={message.sender.image}
                            />
                            <a
                              href='1#'
                              className='h6 notification-friend pl-2'
                            >
                              {message.sender.username}
                            </a>
                          </div>
                        )}

                        <div className='notification-event'>
                          <span className='notification-date'>
                            <time className='entry-date updated'>
                              {moment(
                                new Date(parseInt(message.createdAt))
                              ).format('MMMM Do, YYYY')}
                            </time>
                          </span>
                        </div>
                      </div>
                      <div className='message-box float-none d-block'>
                        <span className='chat-message-item float-none d-block pl-5'>
                          {message.message}
                        </span>
                      </div>
                    </li>
                  )
                );
              })}
              <div ref={bottomRef} />
            </ul>
          </div>

          {match.params.userId !== Routes.NEW_ID_VALUE && chatUser && isAuth && (
            <form onSubmit={e => sendMessage(e)}>
              <div className='form-group label-floating is-empty'>
                <textarea
                  className='form-control pt-2'
                  placeholder='Type a message'
                  value={messageText}
                  onChange={e => setMessageText(e.target.value)}
                  onKeyDown={onEnterPress}
                ></textarea>
              </div>
              <div className='add-options-message'>
                <button className='btn btn-primary btn-sm' type='submit'>
                  Post Reply
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
export default MessagesChatConversation;
