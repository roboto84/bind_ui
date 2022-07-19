/* Wh00t Main Chat Representation */
import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { device } from '@/styles/responsive';

interface MessagesContainerProps extends GlobalThemeType {
  showBackgroundImage: boolean
}

export const Wh00tMessagesContainer = styled.div<MessagesContainerProps>`
  background-color: ${(props: MessagesContainerProps) => props.theme.wh00t.messages.backgroundColor};
  background-image: ${(props: MessagesContainerProps) => (
    props.showBackgroundImage ? `url(${props.theme.wh00t.backgroundImage})` : 'none'
  )};
  background-repeat: no-repeat;
  background-position: 103% calc(100% + 210px);
  color: ${(props: MessagesContainerProps) => props.theme.wh00t.messages.messageText};
  margin: 0 5px 5px 5px;
  font-family: verdana,serif;
  font-size: 17px;
  line-height: 1.5;
  padding: 5px;
  overflow-y: auto;
  height: calc(100% - 105px);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  a:link, a:visited {
    color: ${(props: MessagesContainerProps) => props.theme.wh00t.messages.aLinkColor};
  }

  @media ${device.tabletS} {
    background-image: none;
  }
`;
