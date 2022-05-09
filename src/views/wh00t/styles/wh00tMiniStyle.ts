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
  z-index: 1;
  opacity: .95;
  border: solid 5px ${(props: GlobalThemeType) => props.theme.button.border};
  border-radius: 5px;
  transition: 0.4s;

  @media ${device.tabletS} {
    width: 355px;
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
  border: 5px solid ${(props: GlobalThemeType) => props.theme.wh00t.miniWh00t.minimizedButton.borderColor};
  background-color: ${(props: GlobalThemeType) => props.theme.wh00t.miniWh00t.minimizedButton.backgroundColor};
  font-size: 18px;
  color: #939393;
  padding: 10px;
  text-decoration: none;
  transition: 0.4s;

  :hover {
    background-color: #de935f;
    border-color: #a3ff0000;
    color: black;
    cursor: pointer;
  }
`;

export const MinimizedWh00tIconContainer = styled.div`
  margin: -4px 0 0 -1px;
`;
