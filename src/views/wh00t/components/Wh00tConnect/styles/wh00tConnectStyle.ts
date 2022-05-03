/* Chat Connection */
import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { Input } from '@/components/Input';
import {
  ChatInputButton,
} from '@/views/wh00t/components/Wh00tChatInput/styles/wh00tChatInputStyle';
import { Section } from '@/views/styles/appStyles';

export const Wh00tConnectContainer = styled.div`
  max-width: 410px;
  height: 210px;
  margin: 12% auto auto;
  padding: 20px;
`;

export const Wh00tConnectSection = styled(Section)`

`;
export const Wh00tConnectTitle = styled.div`
  margin-top: 20px;
  color: ${(props: GlobalThemeType) => props.theme.core.textColor};
  font-size: 20px;
`;

export const Wh00tConnectTitleDescription = styled.span`
  font-size: 11px;
  color: ${(props: GlobalThemeType) => props.theme.wh00t.connect.labelDescription};
  margin-left: 5px;
`;

export const Wh00tConnectInput = styled(Input)`
  margin-top: 30px;
  width: 93%;
  border-color: #6b6b6b94;
  
  :focus{
    border-color: #6b6b6b94;
    background-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputBackgroundColor};
    color: ${(props: GlobalThemeType) => props.theme.wh00t.miniWh00t.inputColor};
  }
`;

export const ChatConnectButton = styled(ChatInputButton)`
  margin: 20px 0 0 0;
  background-color: #2F3436;
  font-size: 16px;
  font-weight: bold;
`;
