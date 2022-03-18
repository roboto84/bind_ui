import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

export const SearchContainer = styled.div`
  font-size: 14px;
  width: 95%;
  margin: 60px 30px;
  display: flex;
  justify-content: center;
  height: 70px;
`;

export const SearchInput = styled(Input)`
  min-width: 500px;
  margin: 10px 0;
`;

export const SearchButton = styled(Button)`
  color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.searchButton.color};
  background-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.searchButton.background};
  margin: 10px;
`;
