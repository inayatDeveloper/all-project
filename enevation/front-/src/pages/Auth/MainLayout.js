import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Headroom from 'react-headroom';
import EmailVerificationModal from './EmailVerificationModal';
/**
 * Main Layout for Registration
 */
const MainLayout = ({ children, location }) => {
  const [className, setClassName] = useState(
    'headroom--top headroom--not-bottom'
  );

  return (
    <div className='landing-page'>
      <EmailVerificationModal />
      <div className='content-bg-wrap'></div>
      <div className='content-bg-wrap'></div>
      <Headroom
        disableInlineStyles
        className={`header--standard header--standard-landing animated ${className}`}
        onPin={() =>
          setClassName('headroom--not-bottom slideDown headroom--top')
        }
        onUnpin={() =>
          setClassName('headroom--not-bottom headroom--not-top slideUp')
        }
      >
        <div className='container'>
          <div className='header--standard-wrap'>
            <Link to='/login' className='logo'>
              <div className='img-wrap'>
                <img
                  src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-logo_i9pyxb.png'
                  alt='Avocado'
                />
              </div>
            </Link>
          </div>
        </div>
      </Headroom>

      <div className='header-spacer--standard'></div>

      <div className='container'>
        <div className='row display-flex'>
          <div className='col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
            <div className='landing-content'>
              <h1>
                The <b>FIRST EVER</b> online community for avocado lovers is
                here!
              </h1>
              <p>
                You will be rewarded for doing what you love to do; sharing your
                favorite avocado shots, indulging in a scrumptious avocado dish,
                and collecting the most useful avocado health and wellness tips
                to help you live your best life ever!
              </p>
              {location.pathname === '/signup' && (
                <p>Already have an account?</p>
              )}
              <Link
                to={{
                  pathname:
                    location.pathname === '/login' ? '/signup' : '/login',
                }}
                className='btn btn-md btn-border c-white'
              >
                {location.pathname === '/login' ? 'Register Now' : 'LOG IN'}
              </Link>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
export default withRouter(MainLayout);
