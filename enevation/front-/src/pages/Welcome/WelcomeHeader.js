import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeHeader = () => {
  return (
    <header
      className='header header-registration header-login'
      id='site-header'
    >
      <div className='page-title'>
        <Link to='/'>
          <img
            src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-logo_i9pyxb.png'
            alt=''
          />
        </Link>
      </div>
      <div className='header-content-wrapper'>
        <div className='control-block mr-0'>
          <ul className='d-flex align-items-center m-0 user-btns'>
            <li>
              <Link to='/login'>Log In</Link>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default WelcomeHeader;
