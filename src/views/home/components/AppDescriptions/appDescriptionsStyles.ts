import styled from 'styled-components';
import { device } from '@/styles/responsive';
import { GlobalThemeType } from '@/types';

export const RobotoDescriptionContainer = styled.div`
  font-size: 18px;
  border: 3px dashed ${(props: GlobalThemeType) => props.theme.core.section.borderColor};
  padding: 20px 0;

  @media ${device.tablet} {
    margin: 10px;
  }
`;

export const AppDescriptionCoreContainer = styled.div`
  font-size: 18px;
  padding: 20px;
  margin: 15px;
  width: 200px;
  border-radius: 5px;
  color: ${(props:GlobalThemeType) => props.theme.button.fontColor};
  border: 2px solid ${(props:GlobalThemeType) => props.theme.button.border};
  background-color: ${(props: GlobalThemeType) => props.theme.button.backgroundColor};
  transition: 0.4s;

  &:hover {
    background-color: ${(props:GlobalThemeType) => props.theme.core.mainThemeColor};
    border-color: #a3ff0000;
    color: ${(props:GlobalThemeType) => props.theme.button.transitionFontColor};
    cursor: pointer;
  }

  @media ${device.tablet} {
    margin: 10px;
    width: 100%;
  }
`;
