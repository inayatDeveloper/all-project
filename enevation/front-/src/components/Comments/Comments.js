import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as linkify from 'linkifyjs';

import Linkify from 'linkifyjs/react';
import hashtag from 'linkifyjs/plugins/hashtag';
import mention from 'linkifyjs/plugins/mention';

import linkDecorator from '../Common/linkDecorator';

import CommentsHeader from './CommentsHeader';
function Comments({ post, isAuth }) {
  const [numOfComments, setNumOfComments] = useState(2);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [showKey, setShowKey] = useState(0);
  const [commentBody, setcomment] = useState('');
  hashtag(linkify);
  mention(linkify);

  const commentEdit = (comment, key) => {
    setShowCommentBox(!showCommentBox);
    setcomment(comment);
    setShowKey(key);
  };

  const cancelComment = () => {
    setShowCommentBox(!showCommentBox);
    setcomment('');
    setShowKey(0);
  };

  const saveComment = () => {
    post.comments[showKey].comment = commentBody;
    setShowCommentBox(!showCommentBox);
    setcomment('');
    setShowKey(0);
  };
 
  return (
    <>
      <ul className='comments-list'>
        {post.comments
          ? post.comments.slice(0, numOfComments).map((comment, index) => {
            if (!comment.author) {
              return null;
            }
            return (
              <li key={index} className='comment-item'>
                <CommentsHeader
                  author={comment.author}
                  createdAt={comment.createdAt}
                  commentId={comment.id}
                  isAuth={isAuth}
                  post={post}
                  comment={comment.comment}
                  commentEdit={commentEdit}
                  IndexComment={index}
                />
                <Linkify options={linkDecorator}>
                  {
                    showCommentBox && showKey === index ? <div>
                      <input type="text" value={commentBody} onChange={(e) => setcomment(e.target.value)} />
                      <button onClick={(e) => saveComment()}>Save</button>
                      <button onClick={(e) => cancelComment()} >Cancel</button>
                    </div> : <p className='comments-section'>{comment.comment}</p>
                  }
                </Linkify>
              </li>
            );
          })
          : null}
        {numOfComments < post.comments.length ? (
          <div
            className='more-comments'
            onClick={() => setNumOfComments(numOfComments + 2)}
            onKeyPress={() => setNumOfComments(numOfComments + 2)}
            role='button'
            tabIndex='0'
          >
            View more comments <span>+</span>
          </div>
        ) : null}
      </ul>
    </>
  );
}

Comments.propTypes = {
  post: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default Comments;

