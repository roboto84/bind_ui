import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export const Input = styled.input`
  all: unset;
  font-family: Open Sans,Helvetica,Verdana,sans-serif;
  font-size: 15px;
  border: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.borderColor} 2px solid;
  background-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputBackgroundColor};
  color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputFontColor};
  padding: 10px;
  text-decoration: none;
  letter-spacing: 2px;
  word-spacing: 5px;
  transition: 0.4s;

  :focus {
    border-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.borderFocusColor};
    background-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputBackgroundFocusColor};
    color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputFontFocusColor};
    outline: none;
  }
`;
