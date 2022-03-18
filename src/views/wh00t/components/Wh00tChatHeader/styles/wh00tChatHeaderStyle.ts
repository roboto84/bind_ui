/* Chat Header */
import styled from 'styled-components';
import { Wh00tChatHeaderContainerProps } from '@/views/wh00t/types/wh00tTypes';

export const Wh00tChatHeaderContainer = styled.div`
  background-color: ${(props: Wh00tChatHeaderContainerProps) => props.theme.wh00t.chatHeader.backgroundColor};
  margin: ${(props: Wh00tChatHeaderContainerProps) => (props.margin || '0')};
  border-radius: ${(props: Wh00tChatHeaderContainerProps) => (props.borderRadius || '0')};
  padding: 5px;
  color: ${(props: Wh00tChatHeaderContainerProps) => props.theme.wh00t.chatHeader.titleColor};
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

export const Wh00tChatHeaderTitleContainer = styled.div`
  margin-left: 5px;
  margin-top: -2px;
`;

export const Wh00tChatHeaderButton = styled.span`
  padding: 0 8px;
  color: #eee;
  font-size: 16px;
  
  :hover{
    color: #de935f;
    cursor: pointer;
  }
`;

export const Wh00tChannelTitle = styled.span`
  color: ${(props: Wh00tChatHeaderContainerProps) => props.theme.wh00t.chatHeader.titleHighlightColor};
`;

export const Wh00tChatHeaderTitleIcon = styled.span`
  padding: 0 5px 0 0;
  color: #eee;
  font-size: 16px;
`;
