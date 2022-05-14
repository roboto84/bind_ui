/* Chat Messages */
import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { TextMessageContainerProps } from '@/views/wh00t/types/wh00tTypes';

export const Wh00tMessageWrapper = styled.div`
  display: flex;
  margin: 5px 0;
`;

export const Wh00tChatImageWrapper = styled.div`
  margin-top: -12px;
`;

export const Wh00tBaseUserImageContainer = styled.div`
  margin: 7px 10px 5px 0;
  color: white;
  width: 33px;
  height: 33px;
  padding: 7px 5px 5px 5px;
  border-radius: 5px;
  font-size: 35px;
  text-transform: capitalize;
  text-align: center;

  &.UsernameBaseImageBackgroundColor{
    background-color: ${(props: GlobalThemeType) => props.theme.wh00t.messages.usernameBaseImageBackgroundColor};
  }

  &.OtherUsernamesBaseImageBackgroundColor{
    background-color: ${(props: GlobalThemeType) => props.theme.wh00t.messages.otherUsernameBaseImageBackgroundColor};
  }

  &.BotBaseImageBackgroundColor{
    background-color: ${(props: GlobalThemeType) => props.theme.wh00t.messages.botUsernameColor};
  }
`;

export const Wh00tMessageBody = styled.div`
  margin-top: 3px;
`;

export const Wh00tMessageTitle = styled.div``;

export const Wh00tMessageUsername = styled.span`
  font-weight: 600;

  &.wh00tUsernameColor{
    color: ${(props: GlobalThemeType) => props.theme.wh00t.messages.usernameColor};
  }

  &.wh00tOtherUsernamesColor{
    color: ${(props: GlobalThemeType) => props.theme.wh00t.messages.otherUsernamesColor};
  }
`;

export const Wh00tMessageTime = styled.span`
  font-size: 12px;
  color: ${(props: GlobalThemeType) => props.theme.wh00t.messages.timeColor};
`;

export const BoldText = styled.span`
  color: ${(props: GlobalThemeType) => props.theme.core.code.textColor};
  font-weight: 700;
`;

export const ItalicText = styled.span`
  color: ${(props: GlobalThemeType) => props.theme.core.code.textColor};
  font-style: italic;
`;

export const CodeBlock = styled.div`
  background: ${(props: GlobalThemeType) => props.theme.core.code.backgroundColor};
  border: 1px solid ${(props: GlobalThemeType) => props.theme.core.code.borderColor};
  border-radius: 4px;
  color: ${(props: GlobalThemeType) => props.theme.core.code.textColor};
  display: block;
  font-family: monospace;
  font-size: 85%;
  padding: 10px;
  margin: 20px;
  white-space: break-spaces;
  word-break: break-word;
`;

export const TextMessageContainer = styled.div<TextMessageContainerProps>`
  filter: ${(props: TextMessageContainerProps) => (props.filterBlur ? 'blur(4px)' : 'blur(0)')};
  transition: 0.4s;
  
  &:hover, &:active {
    filter: blur(0);
  }
`;

export const TextMessage = styled.span`
  white-space: break-spaces;
  word-break: break-word;
`;

export const Wh00tMessageTextContainer = styled.span`
  white-space: break-spaces;
  word-break: break-word;
`;

export const Wh00tImage = styled.img`
  border-radius: 10px;
`;
