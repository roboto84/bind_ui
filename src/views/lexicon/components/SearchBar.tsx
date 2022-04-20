import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { FaArrowLeft } from 'react-icons/fa';
import {
  BackButton,
  HomeButton,
  SearchButton,
  SearchContainer,
  SearchInput,
} from '../styles/searchContainer';

export function SearchBar() {
  const searchInputRef: React.MutableRefObject<any> = React.useRef();
  const navigate: NavigateFunction = useNavigate();
  const sendSearchWord = () => {
    if (searchInputRef.current.value !== '') {
      navigate(`/lexicon/search?word=${searchInputRef.current.value}`);
    }
  };
  const searchKeyInput = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      sendSearchWord();
    }
  };

  return (
    <SearchContainer>
      <HomeButton onClick={() => navigate('/lexicon')}>
        <AiOutlineHome />
      </HomeButton>
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </BackButton>
      <SearchInput
        type="text"
        placeholder="Search Word"
        ref={searchInputRef}
        onKeyUp={searchKeyInput}
        autoFocus
      />
      <SearchButton onClick={() => sendSearchWord()}>
        Search
      </SearchButton>
    </SearchContainer>
  );
}
