import React from 'react';

import { Query } from 'react-apollo';
import { withApollo } from 'react-apollo';
import PropTypes from 'prop-types';

import { Notification } from 'components/ProfileSetting';

import { useStore } from 'store';

import { GET_USER_NOTIFICATION } from 'graphql/notification';
import { GET_AUTH_USER } from 'graphql/user';
import { UPDATE_NOTIFICATION_SEEN } from 'graphql/notification';

import { NOTIFICATIONS_PAGE_NOTIFICATION_LIMIT } from 'constants/DataLimit';

/**
 * Notifications page
 */
const Notifications = ({ client }) => {
  const [{ auth }] = useStore();
  const variables = {
    userId: auth.user.id,
    skip: 0,
    limit: NOTIFICATIONS_PAGE_NOTIFICATION_LIMIT,
  };

  const updateNotificationSeen = async notificationId => {
    try {
      await client.mutate({
        mutation: UPDATE_NOTIFICATION_SEEN,
        variables: {
          input: {
            userId: auth.user.id,
            notificationId: notificationId,
          },
        },
        refetchQueries: () => [{ query: GET_AUTH_USER }],
      });
    } catch (err) {}
  };

  return (
    <>
      <div className='ui-block-title block-title-bg'>
        <h6 className='title'>Notifications</h6>
        <a href className='more'>
          <svg className='olymp-three-dots-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
        </a>
      </div>
      <Query
        query={GET_USER_NOTIFICATION}
        variables={variables}
        notifyOnNetworkStatusChange
      >
        {({ data, loading, fetchMore, networkStatus }) => {
          if (loading && networkStatus === 1) return <>Loading ....</>;
          const { notifications, count } = data.getUserNotifications;
          if (!notifications.length) {
            return (
              <div className='notifications-empty'>No notifications yet</div>
            );
          }
          return (
            <ul className='notification-list notification-list-wrap'>
              {data &&
                notifications.map(notification => (
                  <Notification
                    key={notification.id}
                    notification={notification}
                    updateNotificationSeen={updateNotificationSeen}
                  />
                ))}
            </ul>
          );
        }}
      </Query>
    </>
  );
};

Notifications.propTypes = {
  client: PropTypes.object.isRequired,
};

export default withApollo(Notifications);
