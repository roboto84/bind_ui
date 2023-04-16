import React, { useRef } from 'react';
import { SearchBarProps } from '@/views/search/types/searchTypes';
import { AiOutlineHome } from 'react-icons/ai';
import {
  BackButton,
  HomeButton,
  SearchButton,
  SearchContainer,
  SearchInput,
} from '../lexicon/styles/searchContainer';

export function SearchBar(props: SearchBarProps) {
  const { searchSystem, onSystemSwitch } = props;
  const searchInputRef: React.MutableRefObject<any> = useRef();
  const sendSearchWord = () => {
    searchSystem.onSendSearch(searchInputRef.current.value);
  };
  const updateSearchWord = () => {
    if (searchSystem.onSearchKeyUp) {
      searchSystem.onSearchKeyUp(searchInputRef.current.value);
    }
  };
  const onHomeClick = () => {
    searchInputRef.current.value = '';
    updateSearchWord();
    searchSystem.onHomeClick();
  };
  const searchKeyInput = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      sendSearchWord();
    } else {
      updateSearchWord();
    }
  };

  /* const systemSwitchButton: JSX.Element = (
    <BackButton title={`${searchSystem.system} Search`} onClick={() => onSystemSwitch()}>
      {searchSystem.icon}
    </BackButton>
  ); */

  return (
    <SearchContainer>
      <HomeButton title={`${searchSystem.system} Home`} onClick={() => onHomeClick()}>
        <AiOutlineHome />
      </HomeButton>
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
