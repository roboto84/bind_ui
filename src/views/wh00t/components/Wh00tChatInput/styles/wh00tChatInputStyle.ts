/* Chat Input */
import styled from 'styled-components';
import { Button, ButtonProps } from '@/components/Nav/Button';
import { InputTextArea } from '@/components/Input/InputTextArea';
import { GlobalThemeType } from '@/types';
import { EmojiSelectorContainerProps } from '@/views/wh00t/types/wh00tTypes';

export const Wh00tChatInputContainer = styled.div`
`;

export const ChatInputButtonContainer = styled.div`
  display: flex;
`;

export const ChatSendButton = styled(Button)`
  background-color: ${(props: GlobalThemeType) => props.theme.wh00t.chatInput.button.backgroundColor};
  border: 0;
  font-size: ${(props) => (props.fontSize || '16px')};
  font-weight: bold;
  margin: 0 0 0 5px;
  padding: ${(props) => (props.padding || '12px 13px 13px 13px')};
  color: ${(props: GlobalThemeType) => props.theme.wh00t.chatInput.button.color};
  border-radius: 5px;
  
  :hover, &.active {
    background-color: rgb(179, 107, 0);
  }
`;

// Needs to be a div instead of a button due to a browser refresh bug
export const EmojiButton = styled.div<ButtonProps>`
  text-decoration: none;
  text-align: center;
  letter-spacing: 3px;
  word-spacing: 10px;
  transition: 0.4s;
  background-color: ${(props: GlobalThemeType) => props.theme.wh00t.chatInput.button.backgroundColor};
  border: 0;
  font-size: ${(props) => (props.fontSize || '16px')};
  font-weight: bold;
  margin: 0 0 0 5px;
  padding: ${(props) => (props.padding || '13px')};
  color: ${(props: GlobalThemeType) => props.theme.wh00t.chatInput.button.color};
  border-radius: 5px;

  &:hover, &.active {
    background-color: rgb(179, 107, 0);
    border-color: #a3ff0000;
    color: ${(props:ButtonProps) => props.theme.button.transitionFontColor};
    cursor: pointer;
  }
`;

export const Wh00tInputTextArea = styled(InputTextArea)`
  width: calc(100% - 157px);
  height: 22px;
  border-radius: 3px;
`;

export const Wh00tChatForm = styled.form`
  display: flex;
  padding-left: 5px;
`;

export const EmojiUnitContainer = styled.div`
  display: flex;
`;

export const EmojiSelectorContainer = styled.div<EmojiSelectorContainerProps>`
  width: 204px;
  height: 273px;
  background-color: ${(props: EmojiSelectorContainerProps) => props.theme.wh00t.chatInput.button.backgroundColor};
  border: 1px solid ${(props: EmojiSelectorContainerProps) => props.theme.wh00t.chatInput.emoji.borderColor};
  border-radius: 3px;
  display: ${(props: EmojiSelectorContainerProps) => props.display};
  flex-wrap: wrap;
  padding: 10px;
  position: absolute;
  margin-top: -300px;
  margin-left: -182px;
  overflow-y: scroll;
`;

export const EmojiContainer = styled.div`
  font-size: 20px;
  padding: 6px;
  background: inherit;
  border-radius: 5px;
  
  :hover {
    background: #eee;
    cursor: pointer;
  }
`;
