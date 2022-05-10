import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { device } from '@/styles/responsive';

export const AppContainer = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

export const MainContainer = styled.div`
  overflow-y: auto;
  height: calc(100vh - 50px);

  &.side-flexed {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const Hoverable = styled.div`
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 15px;
  min-width: 170px;
  transition: 0.4s;

  :hover{
    background-color: ${(props:GlobalThemeType) => props.theme.core.mainThemeColor};
    color: ${(props:GlobalThemeType) => props.theme.button.transitionFontColor};
  }
`;

export const Section = styled.div`
  background-color: ${(props: GlobalThemeType) => props.theme.core.section.backgroundColor};
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  border: 3px solid ${(props: GlobalThemeType) => props.theme.core.section.borderColor};

  @media ${device.tabletS} {
    padding: 12px;
  }
`;
