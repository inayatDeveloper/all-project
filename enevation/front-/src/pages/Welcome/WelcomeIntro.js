import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from 'routes';

const WelcomeIntro = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 m-auto pb-4'>
          <p className='register-now-title'>
            Check out a sneak peek below for a sliver of what Avocado Nation has
            to offer. &nbsp; <Link to={Routes.SIGN_UP}>Register now</Link>{' '}
            &nbsp; to unlock the full experience!
          </p>
        </div>
      </div>
    </div>
  );
};
export default WelcomeIntro;
