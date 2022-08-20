import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Nav/Button';
import { device } from '@/styles/responsive';

export const SearchContainer = styled.menu`
  all: unset;
  font-size: 13px;
  width: 98%;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  height: 70px;
  
  @media ${device.tabletS} {
    margin: 0 5px;
  }
  
`;

export const SearchInput = styled(Input)`
  width: 500px;
  min-width: 100px;
  margin: 13px 0;
`;

export const LexiconButton = styled(Button)`
  color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.searchButton.color};
  background-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.searchButton.background};
  border-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.searchButton.background};
  margin: 13px 0;
`;

export const BackButton = styled(LexiconButton)`
  font-size: 22px;
  padding-top: 7px;
`;

export const SearchButton = styled(LexiconButton)`
  font-size: 15px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const HomeButton = styled(LexiconButton)`
  font-size: 26px;
  padding-top: 4px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
