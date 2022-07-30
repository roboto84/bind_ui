/* Chat Header */
import styled from 'styled-components';
import { Wh00tChatHeaderContainerProps } from '@/views/wh00t/types/wh00tTypes';

export const Wh00tChatHeaderContainer = styled.div<Wh00tChatHeaderContainerProps>`
  background-color: ${(props: Wh00tChatHeaderContainerProps) => props.theme.wh00t.chatHeader.backgroundColor};
  margin: ${(props: Wh00tChatHeaderContainerProps) => (props.margin || '0')};
  border-top-right-radius: ${(props: Wh00tChatHeaderContainerProps) => (props.borderRadius || '0')};
  border-top-left-radius: ${(props: Wh00tChatHeaderContainerProps) => (props.borderRadius || '0')};
  padding: 5px;
  color: ${(props: Wh00tChatHeaderContainerProps) => props.theme.wh00t.chatHeader.titleColor};
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;

export const Wh00tChatHeaderTitleContainer = styled.ul`
  all: unset;
  display: flex;
  margin-left: 5px;
  margin-top: -1px;
  
  li {
    list-style: none;
    margin-right: 5px;
  }
`;

export const Wh00tChatHeaderButtonsContainer = styled.ul`
  all: unset;
  display: flex;

  li {
    list-style: none;
  }
`;

export const Wh00tChatHeaderButton = styled.li`
  padding: 0 8px;
  color: #eee;
  font-size: 16px;
  
  :hover{
    color: #de935f;
    cursor: pointer;
  }
`;

export const Wh00tChannelTitle = styled.li`
  color: ${(props: Wh00tChatHeaderContainerProps) => props.theme.wh00t.chatHeader.titleHighlightColor};
`;

export const Wh00tChatHeaderTitleIcon = styled.span`
  padding: 0 6px 0 0;
  color: #eee;
  font-size: 16px;
`;
