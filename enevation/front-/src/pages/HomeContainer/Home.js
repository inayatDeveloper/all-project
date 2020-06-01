import React from 'react';
import CreatePost from 'components/CreatePost';
import Post from 'components/Post';
import {
  TrendingPost,
  // TrendingTopics,
  TopRatedUsers,
  NewsFeedAdd,
} from 'components/Widget';

import { GET_FOLLOWED_POSTS } from 'graphql/post';

import { HOME_PAGE_POSTS_LIMIT } from 'constants/DataLimit';

import { useStore } from 'store';

const Home = () => {
  const [{ auth }] = useStore();
  const queryOptions = {
    query: GET_FOLLOWED_POSTS,
    variables: { userId: auth.user.id, skip: 0, limit: HOME_PAGE_POSTS_LIMIT },
    callback: 'getFollowedPosts',
  };
  return (
    <div className='container'>
      <div className='row'>
        <main className='col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12'>
          <CreatePost />
          <Post queryOptions={queryOptions} isAuth={true} userId={auth.user.id} />
        </main>
        <aside className='col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12'>
          <TrendingPost />
          {/* <AvocadoGame /> */}
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
export default Home;
