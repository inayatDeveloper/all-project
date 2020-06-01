import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from 'routes';

const VideoSection = () => {
  function stopVideo() {
    let src = document.getElementById('video').src;
    document.getElementById('video').src = '';
    document.getElementById('video').src = src;
  }

  return (
    <div className='avocado-video-bnr welcome-video-banner mb-5'>
      <div className='container'>
        <div className='row'>
          <div className='col col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12 m-auto'>
            <div className='row'>
              <div className='col-xl-6 col-lg-6 col-md-6 mb-4'>
                <h2>Welcome!</h2>
                <p>
                  Avocado Nation is the first of its kind social media network
                  to connect you with fellow avocado-lovers!
                </p>
                <p>
                  Join today and get rewarded for your contributions and
                  engagement with other community members! Get inspiration for
                  your next meal or party, and learn how others use this
                  versatile fruit in everyday life - all from fellow avocado
                  fans, just like you.
                </p>
              </div>
              <div className='col-xl-6 col-lg-6 col-md-6 mb-4 text-center'>
                <div className='join-us text-center'>
                  <h3>
                    Create your <br />
                    own Profile!
                  </h3>
                  <div className='text-center'>
                    <Link className='text-uppercase bold' to={Routes.SIGN_UP}>
                      register Now!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='row d-flex justify-content-center align-items-center'>
              <div className='col-lg-5 col-md-5 col-sm-5 col-4'>
                <h4>press play</h4>
              </div>
              <div className='col-lg-2 col-md-2 col-sm-2 col-3 px-2'>
                <a
                  href='javascript:void(0);'
                  data-toggle='modal'
                  data-target='#myModal'
                >
                  <img
                    className='mw-100'
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576786460/static/video-play-btn_sxo2c1.png'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-lg-5 col-md-5 col-sm-5 col-5'>
                <h6>TO LEARN MORE ABOUT AVOCADO NATION</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal fade'
        id='myModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl' role='document'>
          <div className='modal-content'>
            <div className='modal-body p-2 pt-0'>
              <button
                onClick={() => stopVideo()}
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
              <div className='embed-responsive embed-responsive-16by9'>
                <iframe
                  className='embed-responsive-item'
                  src='https://www.youtube.com/embed/AB0SPGFa480'
                  id='video'
                  allowscriptaccess='always'
                  allow='autoplay'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoSection;
