import React from 'react';
import { Link } from 'react-router-dom';
import * as Routes from 'routes';
const WelcomeFooter = () => {
  return (
    <div className='container'>
      <div className='row mb-5 mt-4 mt-xl-0'>
        <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 m-auto'>
          <div className='row'>
            <div className='col-6'>
              <h5 className='mb-1'>Avocado Nation © 2019</h5>
              <span>English (US)</span>
            </div>
            <div className='col-6 text-right'>
              <img
                src='https://res.cloudinary.com/weare270b/image/upload/v1578333627/static/avocado-primary-logo_color_l9xyvo.png'
                alt='avocado nation logo'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 m-auto'>
          <div className='ui-block-menu border-top pt-2'>
            <ul className='d-flex ftr-menu flex-wrap mb-5'>
              <li>
                <Link to={Routes.PRIVACY_POLICY}>Privacy</Link>
              </li>

              <li>
                <Link to={Routes.TERM_AND_CONDITIONS}>Terms</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WelcomeFooter;
