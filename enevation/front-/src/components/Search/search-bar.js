import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

import { useStore } from 'store';

const SearchBar = ({ currentRefinement, refine }) => {
  const [{ auth }] = useStore();
  return (
    <>
      <input
        className='form-control js-user-search'
        placeholder='Search here for people or posts...'
        type='search'
        aria-label='Search'
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
      />
    </>
  );
};

const CustomSearchBar = connectSearchBox(SearchBar);
export default CustomSearchBar;
