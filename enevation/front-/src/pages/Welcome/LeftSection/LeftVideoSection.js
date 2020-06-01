import React from 'react';
import { Link } from 'react-router-dom';
const LeftVideoSection = () => {
  return (
    <div className='ui-block'>
      <div className='ui-block-title ui-block-post'>
        <h6 className='title'>Top Posts</h6>
        <Link to='#' className='more'></Link>
      </div>
      <div className='ui-block-content'>
        <ul className='widget w-last-video'>
          <li>
            <img
              className='video-bnr'
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-mexico_sepsqy.png'
              alt='video'
            />
            <div className='overlay'></div>
          </li>
          <li>
            <img
              className='video-bnr'
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-mexico2_bexejr.png'
              alt='video'
            />
            <div className='overlay'></div>
          </li>
          <li>
            <img
              className='video-bnr'
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/video-bnr_z8anqe.png'
              alt='video'
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default LeftVideoSection;
