import React from 'react';

import { Link } from 'react-router-dom';

import * as Routes from 'routes';
import moment from 'moment';

let Intro = ({ user }) => {
  return (
    <>
      <div className='ui-block'>
        <div className='ui-block-title ui-block-post'>
          <h6 className='title'>Info</h6>
        </div>
        <div className='ui-block-content'>
          <ul className='widget w-personal-info item-block'>
            <li>
              <span className='title'>Bio:</span>
              <span className='text'>{user.bio}</span>
            </li>
            <li>
              <span className='title'>Joined:</span>
              <span className='text'>
                {moment(new Date(parseInt(user.createdAt))).format(
                  'MMMM Do, YYYY'
                )}
              </span>
            </li>
            <li>
              <span className='title'>Based in:</span>
              <span className='text'>{user.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='ui-block-menu ui-block-menu-left'>
        <ul className='d-flex'>
          <li>
            <Link to={Routes.PRIVACY_POLICY}>Privacy</Link>
          </li>
          <li>
            <Link to={Routes.TERM_AND_CONDITIONS}>Terms</Link>
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
};

export default Intro;
