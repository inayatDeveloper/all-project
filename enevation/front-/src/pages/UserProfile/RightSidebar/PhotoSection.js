import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { GET_USER_POSTS } from 'graphql/user';

import * as Routes from 'routes';

const LatestPhotos = ({ match }) => {
  const { data } = useQuery(GET_USER_POSTS, {
    variables: { username: match.params.username, skip: 0 },
  });

  let photos = [];
  let count = 0;
  if (data) {
    for (let i = 0; i < data.getUserPosts.posts.length; i++) {
      if (count < 9) {
        data.getUserPosts.posts[i].image &&
          photos.push(
            <li>
              <Link
                to={generatePath(Routes.POST, {
                  id: data.getUserPosts.posts[i].id,
                })}
              >
                <img
                  src={data.getUserPosts.posts[i].image}
                  alt='friends-icons'
                />
              </Link>
            </li>
          );

        data.getUserPosts.posts[i].image && count++;
      } else {
        break;
      }
    }
  }
  return (
    <div className='ui-block'>
      <div className='ui-block-title ui-block-photos'>
        <h6 className='title'>Latest Photos</h6>
      </div>
      <div className='ui-block-content'>
        <ul className='widget w-last-photo js-zoom-gallery'>{photos}</ul>
      </div>
    </div>
  );
};

LatestPhotos.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(LatestPhotos);
