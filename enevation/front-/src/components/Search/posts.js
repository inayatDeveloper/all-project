import * as React from 'react';
import { connectStateResults } from 'react-instantsearch-core';

import { InfinitePosts } from './infinite-posts';

class Posts extends React.Component {
  render() {
    const { searchResults, searchState } = this.props;
    const hasResults = searchResults && searchResults.nbHits !== 0;

    if (!hasResults) {
      return (
        <div className='card card-body p-2'>
          <h2>Posts</h2>
          <div
            className='list-group overflow-auto'
            style={{ maxHeight: '240px' }}
          >
            No Posts Match Your Search...
          </div>
        </div>
      );
    } else if (searchState && searchState.query) {
      return <InfinitePosts />;
    } else {
      return null;
    }
  }
}

const ConnectedPosts = connectStateResults(Posts);

export default ConnectedPosts;
