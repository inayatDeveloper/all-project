import React, { useState } from 'react';
import PostControlButton from '../Common/PostControlButton';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import PostContent from './PostContent';
import Comments from 'components/Comments/Comments';
import AddComment from 'components/Comments/AddComment';

import { useStore } from 'store';

const SinglePost = ({ post, isAuth }) => {
  const [{ auth }] = useStore();
  const [isCommentOpen, setCommentOpen] = useState(true);
  const toggleComment = () => setCommentOpen(!isCommentOpen);
  const articleClass = 'hentry post';
  let sharedPost = false


  if (!post) {return null;}
  if (post.post) { sharedPost = true }

  if (!sharedPost) {
    return (
      renderPost(sharedPost, post, isAuth, auth, isCommentOpen, toggleComment, articleClass)
    );
  } else if (sharedPost) {
    return (
      renderPost(sharedPost, post, isAuth, auth, isCommentOpen, toggleComment, articleClass)
    );
  } else {
    return null;
  }
};

const renderPost = (isSharedPost, post, isAuth, auth, isCommentOpen, toggleComment, articleClass) => {
  let postSharer = null
  let sharedPostId = null
  if (isSharedPost) {
    sharedPostId = post.id
    postSharer = post.user
    post = post.post
  }

  return (
    <div key={post.id} className='ui-block'>
      {
        isSharedPost &&
          renderSharedPostText(auth.user, postSharer)
      }
      <article className={articleClass}>
        <PostHeader
          author={post.author}
          createdAt={post.createdAt}
          postId={post.id}
          isAuth={isAuth}
          content={post.content}
          image={post.image}
          imagePublicId={post.imagePublicId}
        />
        <PostContent content={post.content} image={post.image} />
        <PostFooter
          toggle={toggleComment}
          comments={post.comments}
          author={post.author}
          postId={post.id}
          likes={post.likes}
          isAuth={isAuth}
          post={post}
        />
        <PostControlButton
          toggle={toggleComment}
          comments={post.comments}
          author={post.author}
          postId={post.id}
          likes={post.likes}
          isAuth={isAuth}
          post={post}
          postSharer={postSharer}
          sharedPostId={sharedPostId}
        />
      </article>
      {isAuth && isCommentOpen && <Comments post={post} isAuth={isAuth}/>}
      {isAuth && (
        <AddComment
          authorId={auth.user.id}
          userId={post.author.id}
          author={auth.user}
          postId={post.id}
          onCancel={toggleComment}
          user={post.author}
          post={post}
        />
      )}
    </div>
  )
}

const renderSharedPostText = (user, postSharer) => {
  const sharerDisplayName = (user.id === postSharer.id) ? 'You' : postSharer.username
  return (
    <span class="ml-3 font-weight-light font-italic">
      {`${sharerDisplayName} Shared`}
    </span>
  )
}

export default SinglePost;
