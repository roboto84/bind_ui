import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { Input } from '@/components/Input/Input';
import { Button, ButtonProps } from '@/components/Nav/Button';
import { device } from '@/styles/responsive';

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchContainer = styled.menu`
  all: unset;
  font-size: 13px;
  display: flex;
  height: 70px;

  @media ${device.tablet} {
    width: 100%
  }
`;

export const SearchInput = styled(Input)<{
  hasSearchTerm: boolean,
  rightSideWindowOpen: boolean,
}>`
  width: ${(props) => (props.hasSearchTerm ? '456px' : '500px')};
  border-right: ${(props) => (props.hasSearchTerm ? 'none' : '')};;
  min-width: 100px;
  margin: 13px 0;
  border-radius: 5px 0 0 5px;
  transition: none;

  @media ${device.laptop} {
    width: ${(props) => (props.rightSideWindowOpen ? '350px' : '430px')};
  }
  
  @media ${device.tablet} {
    width: ${(props) => (props.rightSideWindowOpen ? '100%' : '430px')};
  }

  @media ${device.mobileXL} {
    width: ${(props) => (props.rightSideWindowOpen ? '100%' : '325px')};
  }

  @media ${device.mobileLL} {
    width: ${(props) => (props.rightSideWindowOpen ? '100%' : '295px')};
  }

  @media ${device.mobileL} {
    width: 100%;
  }

  :focus + button {
    border-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.borderFocusColor};
    background-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputBackgroundFocusColor};
    color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputFontFocusColor};
    outline: none;

    &:hover {
      color: ${(props: GlobalThemeType) => props.theme.lexicon.secondaryTextColor};
    }
  }
`;

export const SearchAutoCompleteContainer = styled.ul<{ show: boolean }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: calc(100% - 91px);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 2px solid;
  border-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.borderFocusColor};
  border-top: 0;
  background-color: ${(props: GlobalThemeType) => props.theme.input.autocompleteOptions.backgroundColor};
  color: ${(props: GlobalThemeType) => props.theme.input.autocompleteOptions.fontColor};
  font-size: 16px;
  position: absolute;
  padding: 10px 3px;
  margin:  -16px 0;
  max-height: 225px;
  overflow-y: scroll;
  box-shadow: 0 5px 5px rgba(0, 0, 0, .2);

  li {
    list-style: none;
    padding: 5px;
  }

  .active{
    background-color: ${(props: GlobalThemeType) => props.theme.input.autocompleteOptions.activeBackground};
    color: ${(props: GlobalThemeType) => props.theme.input.autocompleteOptions.activeFontColor
};
    border-radius: 3px;
  }
`;

export const LexiconButton = styled(Button)`
  color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.searchButton.color};
  background-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.searchButton.background};
  border-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.searchButton.background};
  margin: 13px 0;
`;

export const BackButton = styled(LexiconButton)`
  font-size: 24px;
  padding-top: 6px;
`;

export const SearchButton = styled(LexiconButton)`
  font-size: 15px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const HomeButton = styled(LexiconButton)`
  font-size: 26px;
  padding-top: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const ClearSearchButton = styled(Button)<{ hasSearchTerm: boolean }>`
  margin: 13px 0;
  display: ${(props) => (props.hasSearchTerm ? 'block' : 'none')};
  font-size: 22px;
  padding-top: 7px;
  padding-left: 12px;
  background-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputBackgroundColor};
  color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputFontColor};
  border: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.borderColor} 2px solid;
  border-left: none;
  transition: none;

  &:hover {
    background-color: ${(props:ButtonProps) => props.theme.lexicon.searchBar.inputBackgroundColor};
    border-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.borderColor};
    color: ${(props: GlobalThemeType) => props.theme.lexicon.secondaryTextColor};
  }
`;
