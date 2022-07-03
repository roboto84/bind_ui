import { createGlobalStyle } from 'styled-components';
import { GlobalThemeType } from '@/types';
import { device } from '@/styles/responsive';

export const GlobalThemeStyle = createGlobalStyle`
  html {
    background-color: ${(props: GlobalThemeType) => props.theme.core.bgColor};
  }
  
  body {
    font-family: Open Sans, Helvetica, Verdana, sans-serif;
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
    border: 1px solid ${(props: GlobalThemeType) => props.theme.core.table.borderColor};
    width: 100%;
    margin: auto;
    flex-grow: 0;
    background-color: ${(props: GlobalThemeType) => props.theme.air.weatherSubcategory.backgroundColor};
  }

  thead tr th { 
    position: sticky; 
    top: 0;
    color: #fff;
    background-color: ${(props: GlobalThemeType) => props.theme.core.table.headerColor};
    padding: 10px;
    text-align: center;
    font-weight: normal;
    letter-spacing: 1px;
    transition: 0.4s;

    &:hover, &.active {
      cursor: pointer;
      color: white;
      background-color: ${(props: GlobalThemeType) => props.theme.core.table.highlightCellColor};
    }
  }

  tbody td {
    padding: 10px;
    border: 1px solid ${(props: GlobalThemeType) => props.theme.air.weatherTable.cellBorderColor};
    text-align: left;
  }

  tbody tr {
    color: ${(props: GlobalThemeType) => props.theme.air.weatherSubcategory.fontColor};
    
    :nth-child(even) {
      background-color: ${(props: GlobalThemeType) => props.theme.air.weatherTable.evenCellsBackgroundColor};
    }

    :hover {
      color: white;
      background-color: ${(props: GlobalThemeType) => props.theme.core.table.highlightCellColor};
    }
  }

  tfoot tr { 
    position: sticky; 
    bottom: 0; 
    background-color: ${(props: GlobalThemeType) => props.theme.core.table.headerColor};
  }
  
  tfoot td {
    padding: 4px;
    color: #fff;
    border: 1px solid ${(props: GlobalThemeType) => props.theme.air.weatherTable.cellBorderColor};
    text-align: center;

    @media ${device.tabletS} {
      text-align: left;
    }
  }

  code {
    background: ${(props: GlobalThemeType) => props.theme.core.code.backgroundColor};
    border: 1px solid ${(props: GlobalThemeType) => props.theme.core.code.borderColor};
    border-radius: 4px;
    color: ${(props: GlobalThemeType) => props.theme.core.code.textColor};
    display: inline-block;
    font-family: monospace;
    font-size: 90%;
    padding: 0 4px;
    white-space: normal;
  }

  .wh00tHelp {
    white-space: normal;
    padding: 10px;

    h2 {
      margin: 0 0 10px 0;
      
      &.tableHeader {
        margin-top: 30px;
      }
    }
    
    p {
      color: ${(props: GlobalThemeType) => props.theme.header.iconColor};
    }

    table {
      margin-top: 10px;
    }

    thead tr th {
      text-align: center;
      padding:3px;
      position: inherit;

      &:hover, &.active {
        cursor: inherit;
      }
    }

    tbody td {
      padding: 0px 10px;
    }

    tbody td:first-child {
      text-align: center; padding:10px
    }
  }
`;
