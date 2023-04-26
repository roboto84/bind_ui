import React, { useRef } from 'react';
import { SearchBarProps } from '@/views/search/types/searchTypes';
import {
  SearchButton,
  SearchContainer,
  SearchInput,
} from '../lexicon/styles/searchContainer';

export function SearchBar(props: SearchBarProps) {
  const { searchSystem } = props;
  const searchInputRef: React.MutableRefObject<any> = useRef();
  const sendSearchWord = () => {
    searchSystem.onSendSearch(searchInputRef.current.value);
  };
  const updateSearchWord = () => {
    if (searchSystem.onSearchKeyUp) {
      searchSystem.onSearchKeyUp(searchInputRef.current.value);
    }
  };

  const searchKeyInput = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      sendSearchWord();
    } else {
      updateSearchWord();
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        title="Search Term Input"
        type="text"
        placeholder="Search Word"
        ref={searchInputRef}
        onKeyUp={searchKeyInput}
        autoFocus
      />
      <SearchButton title="Submit Search Term" onClick={() => sendSearchWord()}>
        Search
      </SearchButton>
    </SearchContainer>
  );
}
