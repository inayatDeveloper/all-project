import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Linkify from 'linkifyjs/react';

import { hashtagRegex } from 'utils';
import linkDecorator from 'components/Common/linkDecorator';

import { useQuery } from '@apollo/react-hooks';
import { GET_FOLLOWED_POSTS } from 'graphql/post';

import { useStore } from 'store';

const TrendingTopics = () => {
  const [{ auth }] = useStore();

  const { data } = useQuery(GET_FOLLOWED_POSTS, {
    variables: { userId: auth.user.id, limit: 10000 },
  });
  let tagarray = [];
  let trendingHashtags;
  if (data && data.getFollowedPosts) {
    data.getFollowedPosts.posts.forEach(post => {
      if (post.content) {
        hashtagRegex(post.content).length > 0 &&
          tagarray.push({
            tag: hashtagRegex(post.content)[0],
            like: post.likes.length,
          });
      }
    });

    let sumLikes = (p, c) => {
      return _.extend(p, { like: p.like + c.like, count: p.count + 1 });
    };
    trendingHashtags = _(tagarray)
      .groupBy('tag')
      .map(b => {
        return b.reduce(sumLikes, { tag: b[0].tag, like: 0, count: 0 });
      })
      .sortBy('count')
      .reverse()
      .valueOf();
  }
  return (
    <div className='ui-block top-trending'>
      <div className='ui-block-title topics'>
        <h6 className='title'>Trending Topics</h6>
        <Link to='#' className='more'></Link>
      </div>
      <ul className='widget w-friend-pages-added notification-list friend-requests'>
        {trendingHashtags &&
          trendingHashtags.map(hashtag => {
            return (
              <li className='inline-items'>
                <div className='notification-event'>
                  <Linkify options={linkDecorator}>
                    <b> {hashtag.tag}</b>
                  </Linkify>
                  <span className='chat-message-item d-block'>
                    {hashtag.like} likes
                  </span>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TrendingTopics;
