/* Minimized Chat Representation */
import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { device } from '@/styles/responsive';

export const Wh00tMiniContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  right: 5px;
  bottom: 5px;
  background-color: ${(props: GlobalThemeType) => props.theme.wh00t.miniWh00t.backgroundColor};
  border: solid 1px ${(props: GlobalThemeType) => props.theme.wh00t.miniWh00t.borderColor};
  border-radius: 5px;
  z-index: 1;
  transition: 0.4s;

  @media ${device.tabletS} {
    width: 340px;
    height: 425px;
  }
`;

export const MinimizedWh00tButton = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 1;
  height: 15px;
  width: 15px;
  border-radius: 100%;
  border: 2px solid ${(props: GlobalThemeType) => props.theme.wh00t.miniWh00t.minimizedButton.borderColor};
  background-color: ${(props: GlobalThemeType) => props.theme.wh00t.miniWh00t.minimizedButton.backgroundColor};
  font-size: 18px;
  color: ${(props: GlobalThemeType) => props.theme.wh00t.miniWh00t.minimizedButton.color};
  padding: 10px;
  text-decoration: none;
  transition: 0.4s;

  :hover {
    background-color: ${(props: GlobalThemeType) => props.theme.wh00t.miniWh00t.minimizedButton.backgroundHoverColor};
    border-color: ${(props: GlobalThemeType) => props.theme.wh00t.miniWh00t.minimizedButton.backgroundHoverColor};
    color: ${(props: GlobalThemeType) => props.theme.button.transitionFontColor};
    cursor: pointer;
  }
`;

export const MinimizedWh00tIconContainer = styled.div`
  margin: -4px 0 0 -1px;
`;
