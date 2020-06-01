import React from 'react';
import { Link } from 'react-router-dom';
import * as Routes from 'routes';
export default function ProfileBadges() {
  return (
    <div className='ui-block'>
      <div className='ui-block-title topics'>
        <h6 className='title'>Badges</h6>
      </div>
      <div className='ui-block-content'>
        {/* <!-- W-Badges --> */}

        {/* <!-- W-Badges --> */}

        <ul className='widget w-badges'>
          <li>
            <Link to={Routes.BADGES}>
              <img
                className='badge-img'
                src='https://res.cloudinary.com/weare270b/image/upload/v1576788606/static/badge2_kmjarm.png'
                alt='author'
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
