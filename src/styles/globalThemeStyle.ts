import { createGlobalStyle } from 'styled-components';
import { GlobalThemeType } from '@/types';
import { device } from '@/styles/responsive';

export const GlobalThemeStyle = createGlobalStyle`
  html {
    background-color: ${(props: GlobalThemeType) => props.theme.core.bgColor};
  }
  
  body {
    font-family: Verdana, sans-serif;
    font-size: 12px;
    text-align: left;
    color: ${(props: GlobalThemeType) => props.theme.core.textColor};
    height: 100%;
    width: 99%;
    
    @media ${device.tablet} {
      width: 98%;
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: auto;
    flex-grow: 0;
    background-color: ${(props: GlobalThemeType) => props.theme.air.weatherSubcategory.backgroundColor};
  }

  td, th {
    color: ${(props: GlobalThemeType) => props.theme.air.weatherSubcategory.fontColor};
    padding: 8px;
    border: 8px solid ${(props: GlobalThemeType) => props.theme.air.weatherTable.cellBorderColor};
    text-align: left;
  }

  tr:nth-child(even) {
    background-color: ${(props: GlobalThemeType) => props.theme.air.weatherTable.evenCellsBackgroundColor};
  }
`;
