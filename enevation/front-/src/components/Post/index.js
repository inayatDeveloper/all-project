import React from 'react';
import PropTypes from 'prop-types';

import LoadMorePosts from 'components/Post/LoadMorePosts';
import SinglePost from './SinglePost';

import { Query } from 'react-apollo';

const Post = ({ queryOptions, isAuth }) => {
  let postData, postsData;
  return (
    <Query
      query={queryOptions.query}
      variables={queryOptions.variables}
      notifyOnNetworkStatusChange
    >
      {({ data, loading, fetchMore, networkStatus }) => {
        if (!data || (loading && networkStatus === 1)) {
          return (
            <div className='d-flex justify-content-center my-2'>
              <img
                className='flex'
                src='https://res.cloudinary.com/weare270b/image/upload/v1579191490/static/loader_eyctc7.gif'
                alt='loading...'
              />
            </div>
          );
        }
        if (queryOptions.callback === 'getFollowedPosts') {
          postsData = data.getFollowedPosts;
        }
        if (queryOptions.callback === 'getUserPosts') {
          postsData = data.getUserPosts;
        }
        if (queryOptions.callback === 'getPost') {
          postData = data.getPost;
        }

        if (!postsData && !postData) {
          return <></>;
        }
        if (postsData && isAuth) {
          postsData.posts = postsData.posts.sort(compare);
          return (
            <LoadMorePosts
              data={postsData.posts}
              isAuth={isAuth}
              count={parseInt(postsData.count)}
              loading={loading}
              networkStatus={networkStatus}
              onLoadMore={() => {
                fetchMore({
                  variables: queryOptions.variables,
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return {
                      ...fetchMoreResult,
                      [queryOptions.callback]: {
                        ...fetchMoreResult[queryOptions.callback],
                        posts: [
                          ...prev[queryOptions.callback].posts,
                          ...fetchMoreResult[queryOptions.callback].posts,
                        ],
                      },
                    };
                  },
                });
              }}
            />
          );
        } else if (postData) {
          return <SinglePost post={postData} isAuth={isAuth} />;
        } else if (postsData && !isAuth) {
          return postsData.posts.map((post, index) => (
            <SinglePost key={index} post={post} isAuth={isAuth} />
          ));
        }
      }}
    </Query>
  );
};

const compare = (a,b) => {
  let comparison = 0;

  if (a.createdAt > b.createdAt) {
    comparison = 1;
  } else if (a.createdAt < b.createdAt) {
    comparison = -1;
  }

  return comparison * -1;
}

Post.propTypes = {
  queryOptions: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired,
};


export default Post;
