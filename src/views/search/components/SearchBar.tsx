import React, { KeyboardEvent, useRef, useState } from 'react';
import { SearchBarProps } from '@/views/search/types/searchTypes';
import { acceptableCharactersTest } from '@/utils/utils';
import { IoMdClose } from 'react-icons/io';
import {
  ClearSearchButton,
  SearchButton,
  SearchContainer,
  SearchInput,
} from '../lexicon/styles/searchContainer';

export function SearchBar(props: SearchBarProps) {
  const { searchSystem } = props;
  const searchInputRef: React.MutableRefObject<any> = useRef();
  const [hasSearchTerm, setHasSearchTerm] = useState(false);

  const sendSearchWord = () => {
    searchSystem.onSendSearch(searchInputRef.current.value);
  };
  const updateSearchWord = () => {
    if (searchSystem.onSearchKeyUp) {
      searchSystem.onSearchKeyUp(searchInputRef.current.value);
    }
  };

  const searchKeyInput = (event: KeyboardEvent) => {
    if (searchInputRef.current.value) {
      setHasSearchTerm(true);
    } else {
      setHasSearchTerm(false);
    }

    if (event.key === 'Enter') {
      sendSearchWord();
    } else if (acceptableCharactersTest(event.key)) {
      updateSearchWord();
    }
  };

  const clearSearch = () => {
    searchInputRef.current.value = '';
    searchSystem.onSearchKeyUp(searchInputRef.current.value);
    setHasSearchTerm(false);
    updateSearchWord();
  };

  return (
    <SearchContainer>
      <SearchInput
        title="Search Term Input"
        type="text"
        placeholder="Search Term"
        ref={searchInputRef}
        onKeyUp={searchKeyInput}
        autoFocus
        hasSearchTerm={hasSearchTerm}
      />
      <ClearSearchButton hasSearchTerm={hasSearchTerm} onClick={clearSearch}>
        <IoMdClose />
      </ClearSearchButton>
      <SearchButton title="Submit Search Term" onClick={sendSearchWord}>
        Search
      </SearchButton>
    </SearchContainer>
  );
}
