import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from 'routes';

const NewsFeedAdd = () => (
  <>
    <div className='ui-block'>
      <Link to='/discover'>
        <img
          className='health-bnr'
          src='https://res.cloudinary.com/weare270b/image/upload/v1576838840/static/discover-bnr-img_tyvded.jpg'
          alt='get inspired! click here to check avocado posts'
        />
      </Link>
    </div>
    <div className='ui-block-menu ui-block-menu-sidebar'>
      <ul className='d-flex'>
        <li>
          <Link to={Routes.PRIVACY_POLICY}>Privacy</Link>
        </li>
        <li>
          <Link to={Routes.TERM_AND_CONDITIONS}>Terms</Link>
        </li>
        <li>
          <Link to={Routes.COMMUNITY_GUIDELINE}>Community Guideline</Link>
        </li>
      </ul>
      <h5>Avocado Nation © 2019</h5>
      <img
        src='https://res.cloudinary.com/weare270b/image/upload/v1578333627/static/avocado-primary-logo_color_l9xyvo.png'
        alt='avocado nation logo'
      />
    </div>
  </>
);
export default NewsFeedAdd;
