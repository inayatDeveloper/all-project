import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import { GET_CONVERSATIONS } from 'graphql/user';

import MessagesUsers from './MessagesUsers';
import MessagesChat from './MessagesChat';

import { useStore } from 'store';

/**
 * Messages page
 */
const Messages = ({ match }) => {
  const [{ auth }] = useStore();
  const isSelma = !auth.user ? null : auth.user.role === 'selma';

  const { subscribeToMore, data, loading } = useQuery(GET_CONVERSATIONS, {
    variables: { authUserId: auth.user.id },
  });
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='ui-block ui-block-chat-wrap'>
              <div className='ui-block-title'>
                <h6 className='title'>Messages</h6>
              </div>

              <div className='row'>
                {/* turned off until full dms implemented */}
                <MessagesUsers
                  authUser={auth.user}
                  match={match}
                  isSelma={isSelma}
                  subscribeToMore={subscribeToMore}
                  data={data}
                />
                <MessagesChat
                  match={match}
                  authUser={auth.user}
                  isSelma={isSelma}
                  firstUserMessages={data && data.getConversations[0]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Messages.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Messages;
