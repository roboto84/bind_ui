/* Chat Connection */
import styled from 'styled-components';
import { GlobalThemeType, Size } from '@/types';
import { Input } from '@/components/Input/Input';
import {
  ChatSendButton,
} from '@/views/wh00t/components/Wh00tChatInput/styles/wh00tChatInputStyle';
import { Section } from '@/views/styles/appStyles';
import { device } from '@/styles/responsive';

export const Wh00tConnectContainer = styled.div`
  max-width: 375px;
  height: 210px;
  margin: 10vh auto auto;
  padding: 20px;

  @media ${device.tabletS} {
    margin: 5vh auto auto;
  }
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
  border: 1px solid ${(props: Wh00tConnectSectionProps) => (
    props.size && props.size === Size.small
      ? props.theme.wh00t.miniWh00t.backgroundColor
      : props.theme.core.section.borderColor)};
  box-shadow: 0 0 0 1px rgba(0,0,0,0.06),0 2px 2px rgba(0,0,0,0.04),0 4px 4px rgba(0,0,0,0.05),0 6px 6px rgba(0,0,0,0.06);
`;

export const Wh00tConnectStatusSection = styled(Wh00tConnectSection)<Wh00tConnectSectionProps>`
  text-align: center;
`;

export const Wh00tStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Wh00tStatusTimer = styled.div`
  font-size: 50px;
  border: 2px solid ${(props: Wh00tConnectTitleProps) => props.theme.core.mainThemeColor};
  border-radius: 10%;
  width: 100px;
  height: 70px;
  padding: 5px 10px 10px 5px;
`;

interface Wh00tConnectTitleProps extends GlobalThemeType {
  margin ?: string
  fontSize ?: string
}

export const Wh00tLoginInformation = styled.p`
  font-size: 15px;
  margin: 25px 0 10px 0;
`;

export const Wh00tConnectTitle = styled.div<Wh00tConnectTitleProps>`
  margin: ${(props: Wh00tConnectTitleProps) => (props.margin ? props.margin : '20px 0 0 0')};
  color: ${(props: Wh00tConnectTitleProps) => props.theme.core.textColor};
  font-size: ${(props: Wh00tConnectTitleProps) => (props.fontSize ? props.fontSize : '18px')};
`;

export const Wh00tConnectTitleDescription = styled.span`
  font-size: 12px;
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

export const ChatConnectButton = styled(ChatSendButton)`
  margin: 20px 0 0 0;
  background-color: #2F3436;
  font-size: 14px;
  width: 92%;

  @media ${device.tabletS} {
    width: 90%;
  }
`;
