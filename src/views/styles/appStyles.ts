import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { device } from '@/styles/responsive';

export const AppContainer = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  height: 99vh;
  width: 100vw;
  
  @media ${device.mobileXL} {
    height: inherit;
  }

`;

export const MainContainer = styled.main`
  overflow-y: auto;
  height: calc(100vh - 65px);

  &.side-flexed {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const Hoverable = styled.li`
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 15px;
  min-width: 170px;
  transition: 0.4s;

  :hover {
    background-color: ${(props:GlobalThemeType) => props.theme.core.mainThemeColor};
    color: ${(props:GlobalThemeType) => props.theme.button.transitionFontColor};
  }

  @media ${device.tabletS} {
    padding: 5px;
  }
`;

export const NonListHoverable = styled.span`
  border-radius: 5px;
  cursor: pointer;
  padding: 0 4px;
  min-width: 170px;
  transition: 0.4s;

  :hover {
    background-color: ${(props:GlobalThemeType) => props.theme.core.mainThemeColor};
    color: ${(props:GlobalThemeType) => props.theme.button.transitionFontColor};
  }
`;

export const Pill = styled(NonListHoverable)`
  font-size: 17px;
  background-color: ${(props: GlobalThemeType) => props.theme.button.backgroundColor};
  margin: 0;
  padding: 4px 12px;
  min-width: auto;
  width: auto;
`;

export const PillContainer = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 8px;

  a:link, a:hover {
    text-decoration: none !important;
    color: inherit
  }
`;

export interface SectionProps extends GlobalThemeType{
  withShadow?: boolean
}

export const Section = styled.section<SectionProps>`
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  background-color: ${(props: SectionProps) => props.theme.core.section.backgroundColor};
  border: 1px solid ${(props: SectionProps) => props.theme.core.section.borderColor};
  box-shadow: ${(props: SectionProps) => (props.withShadow ? props.theme.core.basicShadow : 'inherit')};


  @media ${device.tabletS} {
    padding: 12px;
  }
`;
