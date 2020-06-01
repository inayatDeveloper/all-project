import React, { useState } from 'react';
import { Mutation, withApollo } from 'react-apollo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { GET_POST } from 'graphql/post';
import { CREATE_LIKE, DELETE_LIKE } from 'graphql/like';

import { NotificationType } from 'constants/NotificationType';

import { useNotifications } from 'hooks/useNotifications';

import { useStore } from 'store';
/**
 * Component for rendering Like button
 */
const Like = ({ postId, user, likes, post }) => {
  const notification = useNotifications();
  const [loading, setLoading] = useState(true);
  const [{ auth }] = useStore();

  let currentUser = auth.user.id;
  let isAuthUser = currentUser === user.id;
  let isAuthPost = post && auth.user.id === post.author.id;
  let isPostLiked = true;
  
  const firstArrEntry = function(array, n) {
    if (array == null) {
      return void 0;
    }
    if (n == null)  {
      return array[0];
    }
    if (n < 0) {
      return [];
    }
    return array.slice(0, n);
  };

  const userLikedPostsArr = likes.filter(userHasLiked => userHasLiked.user === currentUser);

  const userLikedPost = firstArrEntry(userLikedPostsArr);


  if (userLikedPostsArr.length === 0) {
    isPostLiked = false;
  }

  const toggleLike = () => isPostLiked = !isPostLiked;


  const handleButtonClick = async mutate => {
    setLoading(true);
    const { data } = await mutate();
    if (isAuthUser) return setLoading(false);
    !isAuthPost &&
      !userLikedPost &&
      (await notification.toggle({
        user,
        postId,
        hasDone: userLikedPost,
        notificationType: NotificationType.LIKE,
        notificationTypeId: data.createLike ? data.createLike.id : null,
      }));
    setLoading(false);
  };

  // Detect which mutation to use
  const operation = isPostLiked ? 'delete' : 'create';
  const options = {
    create: {
      mutation: CREATE_LIKE,
      variables: { postId, userId: auth.user.id },
    },
    delete: {
      mutation: DELETE_LIKE,
      variables: { id: isPostLiked ? userLikedPost.id : null },
    },
  };

  return (
    <Mutation
      mutation={options[operation].mutation}
      variables={{ input: { ...options[operation].variables } }}
      refetchQueries={() => [
        { query: GET_POST, variables: { id: postId } },
      ]}
    >
      {mutate => {
        return (
          <a
            href
            className={
              isPostLiked ? 'btn btn-control likes-liked' : 'btn btn-control likes'
            }
          >
            <FontAwesomeIcon
              disabled={loading}
              icon={faHeart}
              size='2x'
              color={isPostLiked ? 'red' : 'grey'}
              onClick={() => {
                toggleLike();
                handleButtonClick(mutate);
              }}
            />
            <div className='ripple-container'></div>
          </a>
        );
      }}
    </Mutation>
  );
};

export default withApollo(Like);
