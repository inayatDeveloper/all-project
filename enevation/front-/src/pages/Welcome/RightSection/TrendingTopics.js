import React from 'react';
import { Link } from 'react-router-dom';
const TrendingTopics = () => {
  return (
    <div className='ui-block'>
      <div className='ui-block-title topics'>
        <h6 className='title'>Trending Topics</h6>
        <Link to='#' className='more'></Link>
      </div>
      <ul className='widget w-friend-pages-added notification-list friend-requests'>
        <li className='inline-items'>
          <div className='notification-event'>
            <Link to='#' className='h6 notification-friend'>
              #avocados
            </Link>
            <span className='chat-message-item'>9k Likes</span>
          </div>
          <span
            className='notification-icon'
            data-toggle='tooltip'
            data-placement='top'
            data-original-title='ADD TO YOUR FAVS'
          ></span>
        </li>
        <li className='inline-items'>
          <div className='notification-event'>
            <Link to='#' className='h6 notification-friend'>
              #guacamole
            </Link>
            <span className='chat-message-item'>6k Likes</span>
          </div>
          <span
            className='notification-icon'
            data-toggle='tooltip'
            data-placement='top'
            data-original-title='ADD TO YOUR FAVS'
          ></span>
        </li>
        <li className='inline-items'>
          <div className='notification-event'>
            <Link to='#' className='h6 notification-friend'>
              #avocadotoast
            </Link>
            <span className='chat-message-item'>5k Likes</span>
          </div>
          <span
            className='notification-icon'
            data-toggle='tooltip'
            data-placement='top'
            data-original-title='ADD TO YOUR FAVS'
          ></span>
        </li>
        <li className='inline-items'>
          <div className='notification-event'>
            <Link to='#' className='h6 notification-friend'>
              #avocadorose
            </Link>
            <span className='chat-message-item'>4k Likes</span>
          </div>
          <span
            className='notification-icon'
            data-toggle='tooltip'
            data-placement='top'
            data-original-title='ADD TO YOUR FAVS'
          ></span>
        </li>
        <li className='inline-items'>
          <div className='notification-event'>
            <Link to='#' className='h6 notification-friend'>
              #avonutrition
            </Link>
            <span className='chat-message-item'>2k Likes</span>
          </div>
          <span
            className='notification-icon'
            data-toggle='tooltip'
            data-placement='top'
            data-original-title='ADD TO YOUR FAVS'
          ></span>
        </li>
        <li className='inline-items'>
          <div className='notification-event'>
            <Link to='#' className='h6 notification-friend'>
              #avocadosocks
            </Link>
            <span className='chat-message-item'>1.5k Likes</span>
          </div>
          <span
            className='notification-icon'
            data-toggle='tooltip'
            data-placement='top'
            data-original-title='ADD TO YOUR FAVS'
          ></span>
        </li>
      </ul>
    </div>
  );
};
export default TrendingTopics;
