import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export const InputTextArea = styled.textarea`
  border: ${(props: GlobalThemeType) => props.theme.wh00t.chatInput.textInput.borderColor} 5px solid;
  background-color: ${(props: GlobalThemeType) => props.theme.wh00t.chatInput.textInput.backgroundColor};
  font-size: 15px;
  color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputFontColor};
  padding: 10px;
  text-decoration: none;
  letter-spacing: 1px;
  word-spacing: 5px;
  transition: 0.4s;
  width: 100%;
  height: 100%;
  overflow-y: hidden;

  :focus{
    background-color: ${(props: GlobalThemeType) => props.theme.wh00t.chatInput.textInput.focusBackgroundColor};
    color: ${(props: GlobalThemeType) => props.theme.wh00t.chatInput.textInput.focusFontColor};
    outline: none;
  }
`;
