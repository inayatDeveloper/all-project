import React from 'react';
import Intro from './ProfileInfo';

export default function Left({ user }) {
  return (
    <div className='col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12'>
      <div className='sticky-block'>
        <Intro user={user} />
      </div>
    </div>
  );
}
