import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export const Input = styled.input`
  all: unset;
  border: ${(props: GlobalThemeType) => props.theme.button.border} 3px solid;
  background-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputBackgroundColor};
  color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputFontColor};
  padding: 10px;
  text-decoration: none;
  letter-spacing: 3px;
  word-spacing: 10px;
  transition: 0.4s;

  :focus {
    border-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.borderColor};
    background-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputBackgroundFocusColor};
    color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputFontFocusColor};
    outline: none;
  }
`;
