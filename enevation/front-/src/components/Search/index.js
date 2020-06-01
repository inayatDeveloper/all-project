import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Index } from 'react-instantsearch-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import Default, { Desktop, Mobile } from '../Wrappers/Queries';
import CustomSearchBar from './search-bar';
import ConnectedUsers from './users';
import ConnectedPosts from './posts';

const searchClient = algoliasearch(
  '70PRHCFRAW',
  '4d23141a22d596a7d5e0c5c59f1d4037'
);

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hashTagQuery: null, mobileToggleState: false };
  }

  componentDidMount = () => {
    let params = new URL(document.location).searchParams;
    let hashTag = params.get('hash-tag-search');
    if (hashTag) {
      this.setState({ hashTagQuery: `#${hashTag}`,});
    }
  };

  toggleSearchState = () => {
    this.setState({ mobileToggleState: !this.state.mobileToggleState });
  };

  render() {
    const state = this.state;
    return (
      <>
        <Default>
          <InstantSearch
            indexName='production_avonation_users'
            searchClient={searchClient}
          >
            <div className='search-bar w-search notification-list friend-requests'>
              <div className='form-group with-button'>
                <CustomSearchBar />

                <div className='search-result'>
                  <Index indexName='production_avonation_users'>
                    <ConnectedUsers
                      hashTagQuery={state.hashTagQuery}
                      clearHashTagQuery={this.clearHashTagQuery}
                    />
                  </Index>

                  <Index indexName='production_avonation_posts'>
                    <ConnectedPosts />
                  </Index>
                </div>
              </div>
            </div>
          </InstantSearch>
        </Default>
        <Mobile>
          <FontAwesomeIcon
            size='2x'
            color='white'
            icon={state.mobileToggleState ? faTimes : faSearch}
            style={{ height: '24px', marginTop: '3px' }}
            onClick={this.toggleSearchState}
          />
          {state.mobileToggleState && (
            <InstantSearch
              indexName='production_avonation_users'
              searchClient={searchClient}
            >
              <div className='search-bar w-search notification-list friend-requests'>
                <div className='form-group with-button'>
                  <CustomSearchBar />

                  <div className='search-result'>
                    <Index indexName='production_avonation_users'>
                      <ConnectedUsers
                        hashTagQuery={state.hashTagQuery}
                        clearHashTagQuery={this.clearHashTagQuery}
                      />
                    </Index>

                    <Index indexName='production_avonation_posts'>
                      <ConnectedPosts />
                    </Index>
                  </div>
                </div>
              </div>
            </InstantSearch>
          )}
        </Mobile>
      </>
    );
  }

  clearHashTagQuery = () => {
    this.setState({ hashTagQuery: null });
  };
}
