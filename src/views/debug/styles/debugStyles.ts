import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { style } from 'd3';
import { device } from '@/styles/responsive';

export const DebugHomeContainer = styled.div`
  margin: auto;
  width: calc(100vw - 100px);
  min-width: 400px;
  font-size: 14px;
`;

export const DebugSectionContainer = styled.div`
  margin-top: 40px;
`;

export const LatestMessage = styled.div`{
  border: ${(props: GlobalThemeType) => props.theme.debug.latestMessageBorder} 5px solid;
  padding: 20px;
  margin: 20px 50px;
  min-height: 25px;
  background-color: ${(props: GlobalThemeType) => props.theme.debug.messageBackgroundColor};

  @media ${device.tabletS} {
    margin: 0;
  }
}`;

export const MessageHistory = styled.div`{
  border: ${(props: GlobalThemeType) => props.theme.debug.messageHistoryBorder} 5px solid;
  padding: 20px;
  margin: 20px 50px 0 50px;
  overflow: auto;
  min-height: 100px;
  height: calc(90vh - 325px);
  background-color: ${(props: GlobalThemeType) => props.theme.debug.messageBackgroundColor};

  @media ${device.tabletS} {
    margin: 0;
  }
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
