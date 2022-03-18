/* Chat Input */
import styled from 'styled-components';
import { Button } from '@/components/Button';
import { InputTextArea } from '@/components/InputTextArea';
import { GlobalThemeType } from '@/types';

export const Wh00tChatInputContainer = styled.div`
`;

export const ChatInputButton = styled(Button)`
  background-color: ${(props: GlobalThemeType) => props.theme.wh00t.chatInput.button.backgroundColor};
  border: 0;
  font-size: ${(props) => (props.fontSize || '16px')};
  font-weight: bold;
  margin: 0 0 0 5px;
  padding: ${(props) => (props.padding || '13px')};
  color: ${(props: GlobalThemeType) => props.theme.wh00t.chatInput.button.color};
  border-radius: 5px;
  
  :hover {
    background-color: rgb(179, 107, 0);
  }
`;

export const Wh00tInputTextArea = styled(InputTextArea)`
  width: calc(100% - 162px);
  height: 20px;
  border-radius: 5px;
`;

export const Wh00tChatForm = styled.form`
  display: flex;
  padding-left: 5px;
`;
