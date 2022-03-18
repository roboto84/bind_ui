/* Chat Messages */
import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export const Wh00tMessageWrapper = styled.div`
  display: flex;
  margin: 5px 0;
`;

export const Wh00tBaseUserImageContainer = styled.div`
  margin: 7px 10px 5px 0;
  color: white;
  width: 33px;
  height: 33px;
  padding: 7px 5px 5px 5px;
  border-radius: 5px;
  font-size: 18px;
  text-transform: capitalize;
  text-align: center;
`;

export const Wh00tMessageBody = styled.div`
  margin-top: 3px;
`;

export const Wh00tMessageTitle = styled.div``;

export const Wh00tMessageUsername = styled.span`
  font-weight: 600;
`;

export const Wh00tMessageTime = styled.span`
  font-size: 12px;
  color: ${(props: GlobalThemeType) => props.theme.wh00t.messages.timeColor};
`;

export const Wh00tMessageText = styled.span`
  white-space: pre;
  word-break: break-all;
`;

export const Wh00tImage = styled.img`
  border-radius: 10px;
`;
