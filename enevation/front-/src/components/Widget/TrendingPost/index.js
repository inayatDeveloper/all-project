import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import TopThreePosts from './top-three-posts';

const searchClient = algoliasearch(
  '70PRHCFRAW',
  '4d23141a22d596a7d5e0c5c59f1d4037'
);

export default class TrendingPost extends React.Component {
  render() {
    return (
      <InstantSearch
        indexName='production_avonation_posts_by_engagement_score'
        searchClient={searchClient}
      >
        <TopThreePosts />
      </InstantSearch>
    );
  }
}
