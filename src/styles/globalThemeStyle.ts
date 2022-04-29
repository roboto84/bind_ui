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

  a:link {
    color: ${(props: GlobalThemeType) => props.theme.core.aLink.linkColor};
  }

  a:visited {
    color: ${(props: GlobalThemeType) => props.theme.core.aLink.linkColor};
  }

  a:hover {
    color: ${(props: GlobalThemeType) => props.theme.core.aLink.hoverColor};
  }

  a:active {
    color: ${(props: GlobalThemeType) => props.theme.core.aLink.linkColor};
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: auto;
    flex-grow: 0;
    background-color: ${(props: GlobalThemeType) => props.theme.air.weatherSubcategory.backgroundColor};
  }

  th {
    color: ${(props: GlobalThemeType) => props.theme.button.transitionFontColor};
    background-color: ${(props: GlobalThemeType) => props.theme.core.mainThemeColor};
    padding: 8px;
    border: 5px solid ${(props: GlobalThemeType) => props.theme.core.mainThemeColor};
    text-align: center;
    font-weight: normal;
    letter-spacing: 2px;
    transition: 0.4s;
  }

  td {
    padding: 10px;
    border: 5px solid ${(props: GlobalThemeType) => props.theme.air.weatherTable.cellBorderColor};
    text-align: left;
  }

  tr {
    color: ${(props: GlobalThemeType) => props.theme.air.weatherSubcategory.fontColor};
    
    :nth-child(even) {
      background-color: ${(props: GlobalThemeType) => props.theme.air.weatherTable.evenCellsBackgroundColor};
    }

    :hover {
      color: white;
      background-color: ${(props: GlobalThemeType) => props.theme.core.mainThemeColor};
    }
  }

  code {
    background: ${(props: GlobalThemeType) => props.theme.core.code.backgroundColor};
    border: 1px solid ${(props: GlobalThemeType) => props.theme.core.code.borderColor};
    border-radius: 4px;
    color: ${(props: GlobalThemeType) => props.theme.core.code.textColor};
    display: inline-block;
    font-family: monospace;
    font-size: 85%;
    padding: 0 4px;
    white-space: normal;
  }
`;
