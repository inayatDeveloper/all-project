import React from 'react';
import LastPhotos from './PhotoSection';
// import Favs from './Favs';
// import Friends from './Friends';
import ProfileBadges from './ProfileBadges';

export default function Right() {
  return (
    <div className='col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12'>
      <div className='sticky-block'>
        <ProfileBadges />
        {/* <Friends /> */}
        <LastPhotos />
        {/* <Favs /> */}
      </div>
    </div>
  );
}
