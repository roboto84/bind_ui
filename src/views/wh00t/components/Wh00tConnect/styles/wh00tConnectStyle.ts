/* Chat Connection */
import styled from 'styled-components';
import { GlobalThemeType, Size } from '@/types';
import { Input } from '@/components/Input/Input';
import {
  ChatInputButton,
} from '@/views/wh00t/components/Wh00tChatInput/styles/wh00tChatInputStyle';
import { Section } from '@/views/styles/appStyles';
import { device } from '@/styles/responsive';

export const Wh00tConnectContainer = styled.div`
  max-width: 375px;
  height: 210px;
  margin: 12% auto auto;
  padding: 20px;
`;

interface Wh00tConnectSectionProps extends GlobalThemeType {
  size ?: Size
}

export const Wh00tConnectSection = styled(Section)<Wh00tConnectSectionProps>`
  background-color: ${(props: Wh00tConnectSectionProps) => (props.theme.core.section.backgroundColor)};
  margin: ${(props: Wh00tConnectSectionProps) => (
    props.size && props.size === Size.small
      ? '0 20px'
      : '20px')};
  border: 2px solid ${(props: Wh00tConnectSectionProps) => (
    props.size && props.size === Size.small
      ? props.theme.wh00t.miniWh00t.backgroundColor
      : props.theme.core.section.borderColor)};
`;

export const Wh00tConnectTitle = styled.div`
  margin-top: 20px;
  color: ${(props: GlobalThemeType) => props.theme.core.textColor};
  font-size: 18px;
`;

export const Wh00tConnectTitleDescription = styled.span`
  font-size: 11px;
  color: ${(props: GlobalThemeType) => props.theme.wh00t.connect.labelDescription};
  margin-left: 5px;
`;

export const Wh00tConnectInput = styled(Input)`
  margin-top: 20px;
  font-size: 12px;
  width: 92%;
  border-color: #6b6b6b94;
  
  :focus{
    border-color: #6b6b6b94;
    background-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputBackgroundColor};
    color: ${(props: GlobalThemeType) => props.theme.wh00t.miniWh00t.inputColor};
  }

  @media ${device.tabletS} {
    width: 90%;
  }
`;

export const ChatConnectButton = styled(ChatInputButton)`
  margin: 20px 0 0 0;
  background-color: #2F3436;
  font-size: 14px;
  width: 92%;

  @media ${device.tabletS} {
    width: 90%;
  }
`;
