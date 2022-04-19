import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

export const SearchContainer = styled.div`
  font-size: 14px;
  width: 95%;
  margin: 5px 30px;
  display: flex;
  justify-content: center;
  height: 70px;
`;

export const SearchInput = styled(Input)`
  min-width: 500px;
  margin: 10px 0;
`;

export const LexiconButton = styled(Button)`
  color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.searchButton.color};
  background-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.searchButton.background};
  margin: 10px 0;
`;

export const BackButton = styled(LexiconButton)`
  font-size: 31px;
  padding-top: 1px;
`;

export const SearchButton = styled(LexiconButton)`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const HomeButton = styled(LexiconButton)`
  font-size: 31px;
  padding-top: 1px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
