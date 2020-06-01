import React, { useState } from 'react';
import { generatePath } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Avatar from 'components/Avatar';
import moment from 'moment';
import { useStore } from 'store';
import { withApollo } from 'react-apollo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { GET_FOLLOWED_POSTS, DELETE_POST } from 'graphql/post';
import { GET_USER_POSTS } from 'graphql/user';

import EditPost from 'components/Modals/EditPost';

import {
  HOME_PAGE_POSTS_LIMIT,
  PROFILE_PAGE_POSTS_LIMIT,
} from 'constants/DataLimit';

import * as Routes from 'routes';

const PostHeader = props => {
  const [isShowing, setIsShowing] = useState(false);

  const {
    author,
    postId,
    client,
    createdAt,
    imagePublicId,
    isAuth,
    image,
    content,
  } = props;
  const [{ auth }] = useStore();
  const isSelma = !auth.user ? null : auth.user.role === 'selma';
  const isOwner = !auth.user ? null : auth.user.id === author.id;
  const rawTime = parseInt(createdAt);
  const postDate = new Date(rawTime);
  const deletePost = async () => {
    try {
      await client.mutate({
        mutation: DELETE_POST,
        variables: { input: { id: postId, imagePublicId } },
        refetchQueries: () => [
          {
            query: GET_FOLLOWED_POSTS,
            variables: {
              userId: auth.user.id,
              skip: 0,
              limit: HOME_PAGE_POSTS_LIMIT,
            },
          },
          {
            query: GET_USER_POSTS,
            variables: {
              username: auth.user.username,
              skip: 0,
              limit: PROFILE_PAGE_POSTS_LIMIT,
            },
          },
        ],
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='post__author author vcard inline-items'>
      <EditPost
        show={isShowing}
        onHide={() => setIsShowing(false)}
        content={content}
        image={image}
        auth={auth}
        postId={postId}
        imagePublicId={imagePublicId}
      />
      <Link
        to={generatePath(Routes.USER_PROFILE, {
          username: author.username,
        })}
      >
        <Avatar image={author.image} />
      </Link>
      <div className='author-date'>
        <Link
          className='h6 post__author-name fn'
          to={generatePath(Routes.USER_PROFILE, {
            username: author.username,
          })}
        >
          {author.firstName} {author.lastName}
        </Link>
        <div className='post__date'>
          <time className='published' dateTime={postDate}>
            {moment(postDate, 'YYYYMMDDHHmms').fromNow()}
          </time>
        </div>
      </div>
      <div className='more'>
        <FontAwesomeIcon
          className='olymp-three-dots-icon'
          size='lg'
          color='black'
          icon={faEllipsisV}
          style={{ height: '12px' }}
        />

        <ul className='more-dropdown'>
          {(isAuth && isOwner) || (isAuth && isSelma) ? (
            <li>
              <Link
                href
                onClick={e => {
                  setIsShowing(true);
                }}
              >
                Edit Post
              </Link>
            </li>
          ) : null}
          {(isAuth && isOwner) || (isAuth && isSelma) ? (
            <li>
              <Link
                href
                onClick={e => {
                  e.preventDefault();
                  deletePost(e);
                }}
              >
                Delete Post
              </Link>
            </li>
          ) : null}
          <li>
            <Link
              to={generatePath(Routes.POST, {
                id: postId,
              })}
            >
              Permalink
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withApollo(PostHeader);
