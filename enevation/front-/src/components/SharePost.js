import React, { useState } from 'react';
import { Mutation, withApollo } from 'react-apollo';
import OverlayTriggers from './Common/ToolTip';
import { CREATE_SHARED_POST, DELETE_SHARED_POST } from 'graphql/shared-post';

import { useStore } from 'store';
/**
 * Component for rendering Share Post button
 */
const SharePost = ({ postId, post, postSharer, sharedPostId }) => {
  const [{ auth }] = useStore();
  if (!auth.user) { return null; }
  
  let hasShared = false
  if (postSharer && sharedPostId && auth.user.id === postSharer.id) {
    postId = sharedPostId
    hasShared = true
  }

  const handleButtonClick = async (event, mutate) => {
    event.preventDefault();
    try {
      const { data } = await mutate();
      if (data) {
        // TODO: Add better notice when someone shares a post
        alert('You shared a post!')
      }
    } catch (err) {
      alert('Sorry an error occurred while trying to share a post. Please try again later.')
      console.log(`Error:\n ${err}`)
    }
  };

  // Detect which mutation to use
  const operation = hasShared ? 'delete' : 'create';
  const options = {
    create: {
      mutation: CREATE_SHARED_POST,
      variables: { userId: auth.user.id, postId: postId },
    },
    delete: {
      mutation: DELETE_SHARED_POST,
      variables: { id: postId },
    },
  };

  return (
    <Mutation
      mutation={options[operation].mutation}
      variables={{ input: { ...options[operation].variables } }}
    >
      {mutate => {
        return (
          <OverlayTriggers
            toolTipText={hasShared ? 'UNSHARE' : 'SHARE'}
            placement='left'>
            <a
              href='#'
              onClick={(e) => handleButtonClick(e, mutate)}
              className='btn btn-control share-link'
            >
              <img
                src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/share-icon_rkyjac.png'
                alt=''
              />
            </a>
          </OverlayTriggers>
        );
      }}
    </Mutation>
  );
};

export default withApollo(SharePost);
