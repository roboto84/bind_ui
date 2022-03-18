import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export const DebugHomeContainer = styled.div`
  margin: 60px auto auto;
  width: calc(100vw - 100px);
  min-width: 400px;
  font-size: 14px;
`;

export const LatestMessage = styled.div`{
  border: ${(props: GlobalThemeType) => props.theme.debug.latestMessageBorder} 10px solid;
  padding: 20px;
  margin: 0 50px;
  min-height: 25px;
  background-color: ${(props: GlobalThemeType) => props.theme.debug.messageBackgroundColor};
}`;

export const MessageHistory = styled.div`{
  border: ${(props: GlobalThemeType) => props.theme.debug.messageHistoryBorder} 10px solid;
  padding: 20px;
  margin: 0 50px;
  overflow: auto;
  min-height: 100px;
  height: calc(70vh - 200px);
  background-color: ${(props: GlobalThemeType) => props.theme.debug.messageBackgroundColor};
}`;

export const MessageContainer = styled.div`
    margin-bottom: 5px;
    white-space: break-spaces;
    word-break: break-word;
  
  .appTitle{
    color: ${(props: GlobalThemeType) => props.theme.debug.messageTitleColor};
    
    .messageId{
      color: ${(props: GlobalThemeType) => props.theme.debug.messageId};
    }
    .messageCategory{
      color: ${(props: GlobalThemeType) => props.theme.debug.messageCategory};
    }
    .messageTime{
      color: ${(props: GlobalThemeType) => props.theme.debug.messageTime};
    }
  }
  .appMessage{
    color: ${(props: GlobalThemeType) => props.theme.debug.messageTextColor}
  }
`;
