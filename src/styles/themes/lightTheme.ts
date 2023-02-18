import { ThemeType } from '@/types/themeTypes';
import { lexiconLight } from '@/views/search/lexicon/styles/lexiconThemes';
import { debugLight } from '@/views/debug/styles/debugThemes';
import { wh00tLight } from '@/views/wh00t/styles/wh00tThemes';
import { airLight } from '@/views/air/styles/airThemeStyle';
import { homeLight } from '@/views/home/styles/homeThemes';
import { shared } from '@/styles/themes/sharedTheme';
import { customThemeLight } from '@/styles/themes/customTheme';
import { arcadiaLight } from '@/views/search/arcadia/styles/arcadiaThemes';

export const LightTheme: ThemeType = {
  core: {
    mainThemeColor: customThemeLight.darkBlue,
    bgColor: '#d4d4d4',
    textColor: 'black',
    basicShadow: '0 0 0 1px rgba(0,0,0,0.06) , 0 2px 2px rgba(0,0,0,0.04) , 0 4px 4px rgba(0,0,0,0.05) , 0 6px 6px rgba(0,0,0,0.06);',
    aLink: {
      linkColor: customThemeLight.darkBlue,
    },
    section: {
      backgroundColor: '#E9E9E9',
      borderColor: '#c7c7c7',
    },
    table: {
      backgroundColor: '#e3e3e3',
      borderColor: '#8a8b8b',
      headerColor: '#8a8b8b',
      highlightCellBackgroundColor: customThemeLight.darkBlue,
      highlightCellColor: 'white',
      td: {
        borderColor: '#828a90',
      },
      tr: {
        color: '#414141',
        evenCellsBackgroundColor: '#CFD0D3',
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
    alertColor: '#d36010',
  },
  subButton: {
    backgroundColor: '#848585',
    fontColor: '#fff',
    transitionFontColor: '#e9e9e9',
    borderColor: '#848585',
  },
  chart: {
    border: '#d1d1d1',
    axisLabelFontColor: '#565656',
    axisXFontColor: '#7c7c7c',
    axisYFontColor: '#a2a2a2',
    backgroundColor: '#e3e3e3',
    tooltip: {
      borderColor: '#b2b2b2',
      bgColor: '#d4d4d4',
      timeBgColor: '#d4d4d4',
      timeColor: customThemeLight.darkBlue,
      valueBgColor: '',
      valueColor: 'black',
    },
  },
  throbber: {
    background: customThemeLight.darkGrey,
    foreground: customThemeLight.darkBlue,
  },
  header: {
    iconColor: '#636363',
    iconHoverColor: customThemeLight.darkBlue,
    subTitleColor: '#6c6c6c',
    secondaryTitleColor: customThemeLight.darkBlue,
    secondaryTitleBrightness: 'brightness(100%)',
    activeBorderBottomColor: '#a5a5a5',
    inactiveBorderBottomColor: '#d4d4d4',
  },
  home: homeLight,
  air: airLight,
  wh00t: wh00tLight,
  lexicon: lexiconLight,
  arcadia: arcadiaLight,
  debug: debugLight,
  shared,
};
