import React from 'react';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import Post from 'components/Post';
import { GET_USER_POSTS } from 'graphql/user';

export default function MainContent() {
  const queryOptions = {
    query: GET_USER_POSTS,
    variables: { username: 'selma', skip: 0, limit: 5 },
    callback: 'getUserPosts',
  };
  return (
    <div className='container'>
      <div className='row'>
        <main className='col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12'>
          <div id='newsfeed-items-grid'>
            <Post queryOptions={queryOptions} isAuth={false} />
          </div>
        </main>

        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}
