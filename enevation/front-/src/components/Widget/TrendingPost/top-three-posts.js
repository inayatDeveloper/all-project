import * as React from 'react';
import { generatePath } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connectHits } from 'react-instantsearch-core';

import * as Routes from 'routes';

class Hits extends React.Component {
  renderPostWithImage = (hit, count) => {
    if (!hit || !hit.image) {
      return null;
    }
    return (
      <li>
        <h5 className='text-capitalize text-success mb-2'>#{count}</h5>
        <br />
        <Link
          to={generatePath(Routes.USER_PROFILE, {
            username: hit.author.username,
          })}
        >
          <h5 className='text-capitalize'>
            {hit.author && hit.author.firstName}{' '}
            {hit.author && hit.author.lastName}
          </h5>
        </Link>
        <Link
          to={generatePath(Routes.POST, {
            id: hit.objectID,
          })}
        >
          <img className='video-bnr my-3' src={hit.image} alt='video' />
          <span className='chat-message-item'>
            {hit.numOfLikes} Likes {hit.numOfComments} Comments
          </span>
        </Link>
      </li>
    );
  };

  renderPostWithoutImage = (hit, count) => {
    if (!hit || !hit.content) {
      return null;
    }
    return (
      <li className='inline-items'>
        <div className='notification-event'>
          <h5 className='text-capitalize text-success'>#{count}</h5>
          <Link
            to={generatePath(Routes.USER_PROFILE, {
              username: hit.author.username,
            })}
          >
            <h5 className='text-capitalize'>
              {hit.author && hit.author.firstName}{' '}
              {hit.author && hit.author.lastName}
            </h5>
          </Link>
          <Link
            to={generatePath(Routes.POST, {
              id: hit.objectID,
            })}
          >
            <span className='notification-friend text-dark my-3'>
              {hit.content}
            </span>
            <span className='chat-message-item'>
              {hit.numOfLikes} Likes {hit.numOfComments} Comments
            </span>
          </Link>
        </div>
      </li>
    );
  };

  render() {
    const { hits } = this.props;
    return (
      <div className='ui-block'>
        <div className='ui-block-title ui-block-post'>
          <h6 className='title'>Top 3 Posts</h6>
        </div>
        <div className='ui-block-content'>
          <ul className='widget w-friend-pages-added notification-list friend-requests'>
            {hits.slice(0, 3).map((hit, count) => (
              <>
                {hit.image
                  ? this.renderPostWithImage(hit, count + 1)
                  : this.renderPostWithoutImage(hit, count + 1)}
              </>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const TopThreePosts = connectHits(Hits);

export default TopThreePosts;
