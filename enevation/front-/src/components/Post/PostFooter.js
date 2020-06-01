import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';

import Like from 'components/Like';

const PostFooter = props => {
  const {
    author,
    postId,
    comments,
    likes,
    toggle,
    isAuth,
    userId,
    post,
  } = props;

  const commentlist = [];
  if (comments.length > 0) {
    const map = new Map();
    for (const comment of comments) {
      if (!map.has(comment.author.id)) {
        map.set(comment.author.id, true);
        commentlist.push({
          id: comment.id,
          author: `${comment.author.firstName} ${comment.author.lastName}`,
          comment: comment.comment,
        });
      }
    }
  }

  return (
    <div className='post-additional-info inline-items'>
      <span className='post-add-icon inline-items'>
        {isAuth === true && (
          <Like
            user={author}
            postId={postId}
            likes={likes}
            userId={userId}
            post={post}
          />
        )}
        {isAuth === false && (
          <span className='btn btn-control'>
            <FontAwesomeIcon
              icon={faHeart}
              size='2x'
              color={'grey'}
              onClick={e => {
                e.preventDefault();
              }}
            />
          </span>
        )}

        <span>{likes.length}</span>
      </span>

      <div className='comments-shared'>
          <a
            href='#1'
            onClick={e => {
              e.preventDefault();
            }}
            className='post-add-icon inline-items'
          >
            <FontAwesomeIcon
              icon={faComment}
              style={{ width: '1.6rem' }}
              onClick={toggle}
            />
            <span>{comments && comments.length}</span>
          </a>
      </div>
    </div>
  );
};

export default PostFooter;
