import React from 'react';
import TrendingTopics from './TrendingTopics';
import TopFriends from './TopFriends';

const RightSection = () => {
  return (
    <aside className='col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12 ui-block-blur'>
      {/* <TrendingTopics /> */}
      <TopFriends />
    </aside>
  );
};
export default RightSection;
