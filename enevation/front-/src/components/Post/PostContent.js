import React, { useState, useEffect } from 'react';
import * as linkify from 'linkifyjs';
import Linkify from 'linkifyjs/react';
import hashtag from 'linkifyjs/plugins/hashtag';
import mention from 'linkifyjs/plugins/mention';

import Preview from '../PostPreview';
import linkDecorator from '../Common/linkDecorator';

export default function PostContent(props) {
  const { image, content } = props;
  const rawContent = content;

  hashtag(linkify);
  mention(linkify);

  const fetchMetaFromContentPreview = async rawContent => {
    try {
      const response = await fetch(
        `/.netlify/functions/open-graph-preview?q=${rawContent}`
      );
      if (!response.ok) {
        throw new Error('Netlify network response was not ok.');
      }
      const metaFromContentPreview = await response.json();
      return metaFromContentPreview;
    } catch (error) {
      console.log(
        'There has been a problem with your fetch operation: ',
        error.message
      );
    }
  };
  const [metaFromContentPreview, setMetaFromContentPreview] = useState('');

  useEffect(() => {
    async function fetchData() {
      const result = await fetchMetaFromContentPreview(rawContent);
      setMetaFromContentPreview(result);
    }

    fetchData();
  }, [rawContent]);
  return (
    <div className='post-container'>
      <Linkify options={linkDecorator}>{rawContent}</Linkify>

      {metaFromContentPreview ? (
        <Preview {...metaFromContentPreview.meta} />
      ) : null}
      {!image ? null : (
        <div className='post-img mt-3'>
          <img alt='postImage' src={image} />
        </div>
      )}
    </div>
  );
}
