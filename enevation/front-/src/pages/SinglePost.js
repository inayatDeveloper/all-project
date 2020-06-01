import React from 'react';
import Post from 'components/Post';
import {
  TrendingPost,
  // TrendingTopics,
  TopRatedUsers,
  NewsFeedAdd,
} from 'components/Widget';

import { GET_POST } from 'graphql/post';

const SinglePost = props => {
  const queryOptions = {
    query: GET_POST,
    variables: { id: props.match.params.id },
    callback: 'getPost',
  };
  return (
    <div className='container'>
      <div className='row'>
        <main className='col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12'>
          <Post queryOptions={queryOptions} isAuth={true} />
          <div></div>
        </main>
        <aside className='col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12'>
          <TrendingPost />
          <NewsFeedAdd />
        </aside>

        <aside className='col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12'>
          {/* <TrendingTopics /> */}
          <TopRatedUsers />
        </aside>
      </div>
    </div>
  );
};
export default SinglePost;
