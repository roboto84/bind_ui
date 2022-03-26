import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { SearchButton, SearchContainer, SearchInput } from '../styles/searchContainer';

export function SearchBar() {
  const searchInputRef: React.MutableRefObject<any> = React.useRef();
  const navigate: NavigateFunction = useNavigate();
  const sendSearchWord = () => {
    navigate(`/lexicon/search?word=${searchInputRef.current.value}`);
  };
  const searchKeyInput = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      sendSearchWord();
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search Word"
        ref={searchInputRef}
        onKeyUp={searchKeyInput}
        autoFocus
      />
      <SearchButton onClick={() => sendSearchWord()}>
        Search Lexicon
      </SearchButton>
    </SearchContainer>
  );
}
