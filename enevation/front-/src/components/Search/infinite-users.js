import * as React from 'react';
import { connectInfiniteHits } from 'react-instantsearch-core';

class Hits extends React.Component {
  render() {
    const { hasMore, hits, refineNext } = this.props;
    return (
      <div className='card card-body p-2'>
        <h2>Users</h2>
        <div
          className='list-group overflow-auto'
          style={{ maxHeight: '240px' }}
        >
          {hits.map(hit => (
            <a href={`/${hit.username}`}>
              <div className='card border-bottom list-group-item list-group-item-action p-2'>
                <div className='card-body p-0'>
                  <h5 className='card-title text-capitalize'>
                    {hit.firstName} {hit.lastName}
                  </h5>
                  <h6 className='card-subtitle mb-2 text-muted'>
                    @{hit.username}
                  </h6>
                </div>
              </div>
            </a>
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

const InfiniteUsers = connectInfiniteHits(Hits);

export { InfiniteUsers };
