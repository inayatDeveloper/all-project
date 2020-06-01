import React from 'react';

const Preview = props => {
  return (
    <div className='post-preview'>
      <a
        href={props.ogUrl ? `${props.ogUrl}` : '#'}
        target='_blank'
        rel='noopener noreferrer'
      >
        {props.ogImage && props.ogImage.url ? (
          <img src={props.ogImage.url} alt='Open Graph Website Preview' />
        ) : null}
      </a>
      <div>
        <a href={props.ogUrl ? `${props.ogUrl}` : '#'}>{props.ogUrl}</a>
      </div>
      <h6>{props.ogTitle}</h6>
      <p>{props.ogDescription}</p>
    </div>
  );
};

export default Preview;
