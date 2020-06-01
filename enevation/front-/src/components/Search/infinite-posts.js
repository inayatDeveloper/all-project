import * as React from 'react';
import {Link} from 'react-router-dom'
import { connectInfiniteHits } from 'react-instantsearch-core';

class Hits extends React.Component {
  render() {
    const { hasMore, hits, refineNext } = this.props;
    return (
      <div className='card card-body p-2'>
        <h2>Posts</h2>
        <div
          className='list-group overflow-auto'
          style={{ maxHeight: '240px' }}
        >
          {hits.map((hit,index) => (
            <Link to={`/${hit.author && hit.author.username}`} key={index}>
              <div className='card border-bottom list-group-item list-group-item-action'>
                <div className='card-body p-0'>
                  <h5 className='card-title text-capitalize'>
                    {hit.author && hit.author.firstName}
                    {hit.author && hit.author.lastName}
                  </h5>
                  <h6 className='card-subtitle mb-2 text-muted'>
                    @{hit.author && hit.author.username}
                  </h6>
                  <p className='card-text text-dark'>{hit.content}</p>
                </div>
              </div>
            </Link>
          ))}
          {hasMore && (
            <button
              className='btn btn-primary btn-small show-more-btn'
              onClick={refineNext}
              disabled={!hasMore}
            >
              Show more
            </button>
          )}
        </div>
      </div>
    );
  }
}

const InfinitePosts = connectInfiniteHits(Hits);

export { InfinitePosts };
