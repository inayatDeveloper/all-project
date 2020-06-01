import React from 'react';
import SinglePost from './SinglePost';
import PropTypes from 'prop-types';

import { LoadMoreButton } from 'components/icons';

const LoadMorePosts = ({
  data,
  isAuth,
  count,
  onLoadMore,
  loading,
  networkStatus,
}) => {
  const showNextLoading =
    loading && networkStatus === 3 && parseInt(count) !== data.length;
  return (
    <>
      {data.map((post, index) => {
        return <SinglePost key={index} post={post} isAuth={isAuth} />;
      })}
      {showNextLoading && (
        <div className='d-flex justify-content-center my-2'>
          <img
            className='flex'
            src='https://res.cloudinary.com/weare270b/image/upload/v1579191490/static/loader_eyctc7.gif'
            alt='loading .....'
          />
        </div>
      )}
      {data.length < count && !showNextLoading && (
        <div
          className='btn btn-control btn-more load-more-btn'
          onClick={() => onLoadMore()}
          onKeyDown={() => onLoadMore()}
          role='button'
          tabIndex='0'
        >
          <LoadMoreButton color='white' />
        </div>
      )}
    </>
  );
};

LoadMorePosts.propTypes = {
  data: PropTypes.array.isRequired,
  isAuth: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  networkStatus: PropTypes.number.isRequired,
};

export default LoadMorePosts;
