import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { device } from '@/styles/responsive';

export const DebugHomeContainer = styled.div`
  margin: auto;
  width: calc(100vw - 100px);
  min-width: 400px;
  font-size: 14px;

  @media ${device.tabletS} {
    width: 95%;
    min-width: 335px;
  }
`;

export const DebugSectionContainer = styled.section`
  margin-top: 40px;

  @media ${device.mobileXL} {
    margin-top: 20px;
  }
`;

export const LatestMessage = styled.ul`{
  border: ${(props: GlobalThemeType) => props.theme.debug.latestMessageBorder} 2px solid;
  border-radius: 5px;
  padding: 20px;
  margin: 20px 50px;
  min-height: 25px;
  box-shadow: ${(props: GlobalThemeType) => props.theme.core.basicShadow};
  background-color: ${(props: GlobalThemeType) => props.theme.core.section.backgroundColor};

  li {
    list-style: none;
  }
  
  @media ${device.tabletS} {
    margin: 0;
  }
}`;

export const MessageHistory = styled.ul`{
  border: ${(props: GlobalThemeType) => props.theme.core.section.borderColor} 1px solid;
  border-radius: 5px;
  padding: 20px;
  margin: 20px 50px 0 50px;
  overflow: auto;
  min-height: 100px;
  height: calc(90vh - 325px);
  box-shadow: ${(props: GlobalThemeType) => props.theme.core.basicShadow};
  background-color: ${(props: GlobalThemeType) => props.theme.core.section.backgroundColor};

  li {
    list-style: none;
  }
  
  @media ${device.tabletS} {
    margin: 0;
  }
}`;

export const MessageContainer = styled.li`
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
