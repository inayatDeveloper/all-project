import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { withApollo } from 'react-apollo';

import Avatar from 'components/Avatar';

import * as Routes from 'routes';

const Notification = ({
  notification,
  client,
  key,
  updateNotificationSeen,
}) => {
  return (
    <>
      {notification.like && (
        <li key={notification.id}>
          <div className='d-flex align-items-center'>
            <div className='author-thumb mx-2'>
              <Avatar image={notification.author.image} />
            </div>
            <div className='notification-detail mx-2'>
              <Link
                to={generatePath(Routes.USER_PROFILE, {
                  username: notification.author.username,
                })}
                className='h6 notification-friend'
              >
                <h6 className='mb-1'>{`${notification.author.firstName} ${notification.author.lastName}`}</h6>
              </Link>{' '}
              <Link
                to={generatePath(Routes.POST, {
                  id: notification.like.post.id,
                })}
                className='notification-text'
                onClick={() => updateNotificationSeen(notification.id)}
              >
                <p>liked your post</p>
              </Link>
            </div>
          </div>
        </li>
      )}

      {notification.comment && (
        <li key={notification.id}>
          <div className='d-flex align-items-center'>
            <div className='author-thumb mx-2'>
              <Avatar image={notification.author.image} />
            </div>
            <div className='notification-detail mx-2'>
              <Link
                to={generatePath(Routes.USER_PROFILE, {
                  username: notification.author.username,
                })}
                className='h6 notification-friend'
              >
                <h6 className='mb-1'>{`${notification.author.firstName} ${notification.author.lastName}`}</h6>
              </Link>{' '}
              <Link
                to={generatePath(Routes.POST, {
                  id: notification.comment.post.id,
                })}
                className='notification-text'
                onClick={() => updateNotificationSeen(notification.id)}
              >
                <p>Commented on your post</p>
              </Link>
            </div>
          </div>
        </li>
      )}

      {notification.follow && (
        <li key={notification.id}>
          <div className='d-flex align-items-center'>
            <div className='author-thumb mx-2'>
              <Avatar image={notification.author.image} />
            </div>
            <div className='notification-detail mx-2'>
              <Link
                to={generatePath(Routes.USER_PROFILE, {
                  username: notification.author.username,
                })}
                className='h6 notification-friend'
              >
                <h6 className='mb-1'>{`${notification.author.firstName} ${notification.author.lastName}`}</h6>
              </Link>{' '}
              <Link
                to={generatePath(Routes.USER_PROFILE, {
                  username: notification.author.username,
                })}
                className='notification-text'
                onClick={() => updateNotificationSeen(notification.id)}
              >
                <p>is now following you!</p>
              </Link>
            </div>
          </div>
        </li>
      )}
    </>
  );
};

export default withApollo(Notification);
