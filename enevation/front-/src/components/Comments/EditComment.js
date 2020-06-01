import React, { useState } from 'react';
import { generatePath } from 'react-router-dom';
import PropTypes from 'prop-types';

import { EDIT_COMMENT } from '../../graphql/comment';
import { GET_POST } from '../../graphql/post';
import { Mutation, withApollo } from 'react-apollo';

import Avatar from '../Avatar';

import * as Routes from 'routes';
function EditComment({ authorId, comment, author, postId, onCancel }) {

  const [commentContent, setCommentContent] = useState({
    comment: comment.comment,
    image: comment.image,
    imagePublicId: comment.imagePublicId,
    author: authorId,
    postId: postId,
  });
  const onEditComment = (e, editComment) => {
    e.preventDefault();
    editComment.then(async ({ data }) => {},
    setCommentContent({ ...commentContent }));
  };
  const onCommentChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setCommentContent({ ...commentContent, [name]: value });
  };
  return (
    <Mutation
      mutation={EDIT_COMMENT}
      variables={{
        input: commentContent,
      }}
      refetchQueries={() => [
        {
          query: GET_POST,
          variables: { id: postId },
        },
      ]}
    >
      {(editComment, { loading, error: apiError }) => {
        return (
          <form
            className='comment-form inline-items'
            onSubmit={e => onEditComment(e, editComment())}
          >
            <div className='post__author author vcard inline-items'>
              <a
                className='author-thumb'
                href={generatePath(Routes.USER_PROFILE, {
                  username: author.username,
                })}
              >
                <Avatar image={author.image} />
              </a>

              <div className='form-group with-icon-right '>
                <textarea
                  type='text'
                  className='form-control'
                  placeholder=''
                  name='comment'
                  value={commentContent.comment}
                  onChange={e => onCommentChange(e)}
                ></textarea>
                <div className='add-options-message'>
                  <a
                    href
                    className='options-message'
                    data-toggle='modal'
                    data-target='#update-header-photo'
                  >
                    {' '}
                  </a>
                </div>
              </div>
            </div>

            <button className='btn btn-md-2 btn-primary' type='post'>
              Post Comment
            </button>

            <button
              className='btn btn-md-2 btn-border-think c-grey btn-transparent custom-color'
              onClick={onCancel}
            >
              Cancel
            </button>
          </form>
        );
      }}
    </Mutation>
  );
}

EditComment.propTypes = {
  authorId: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default withApollo(EditComment);
