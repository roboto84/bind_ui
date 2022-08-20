import { ThemeType } from '@/types/themeTypes';
import { lexiconLight } from '@/views/lexicon/styles/lexiconThemes';
import { debugLight } from '@/views/debug/styles/debugThemes';
import { wh00tLight } from '@/views/wh00t/styles/wh00tThemes';
import { airLight } from '@/views/air/styles/airThemeStyle';
import { homeLight } from '@/views/home/styles/homeThemes';
import { shared } from '@/styles/themes/sharedTheme';

export const LightTheme: ThemeType = {
  core: {
    mainThemeColor: '#5397a9',
    bgColor: '#d4d4d4',
    textColor: 'black',
    basicShadow: '0 0 0 1px rgba(0,0,0,0.06) , 0 2px 2px rgba(0,0,0,0.04) , 0 4px 4px rgba(0,0,0,0.05) , 0 6px 6px rgba(0,0,0,0.06);',
    aLink: {
      linkColor: '#32889e',
      hoverColor: '#119dc1',
    },
    section: {
      backgroundColor: '#e3e3e3',
      borderColor: '#c7c7c7',
    },
    table: {
      backgroundColor: '#e3e3e3',
      borderColor: '#8a8b8b',
      headerColor: '#8a8b8b',
      highlightCellColor: '#6a9ca9',
      td: {
        borderColor: '#828a90',
      },
      tr: {
        color: '#414141',
        evenCellsBackgroundColor: '#CFD2D3',
      },
    },
    code: {
      backgroundColor: '#dae6eb',
      borderColor: '#0B4C8C33',
      textColor: '#d85b00',
    },
  },
  button: {
    border: '#949494',
    fontColor: '#4e4e4e',
    transitionFontColor: 'white',
    backgroundColor: '#e3e3e3',
    alertColor: '#dc0e10',
  },
  subButton: {
    backgroundColor: '#8a8b8b',
    fontColor: '#e9e9e9',
    transitionFontColor: '#e9e9e9',
    borderColor: '#8a8b8b',
  },
  chart: {
    border: '#d1d1d1',
    axisLabelFontColor: '#565656',
    axisXFontColor: '#7c7c7c',
    axisYFontColor: '#a2a2a2',
    backgroundColor: '#e3e3e3',
  },
  throbber: {
    background: '#ccc',
    foreground: '#86a0a7',
  },
  header: {
    iconColor: '#636363',
    iconHoverColor: '#6a9ca9',
    subTitleColor: '#6c6c6c',
    secondaryTitleColor: '#6a9ca9',
    borderBottomColor: '#d4d4d4',
  },
  home: homeLight,
  air: airLight,
  wh00t: wh00tLight,
  lexicon: lexiconLight,
  debug: debugLight,
  shared,
};
