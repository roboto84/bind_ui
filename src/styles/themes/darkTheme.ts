import { ThemeType } from '@/types/themeTypes';
import { lexiconDark } from '@/views/search/lexicon/styles/lexiconThemes';
import { debugDark } from '@/views/debug/styles/debugThemes';
import { customThemeDark } from '@/styles/themes/customTheme';
import { wh00tDark } from '@/views/wh00t/styles/wh00tThemes';
import { airDark } from '@/views/air/styles/airThemeStyle';
import { homeDark } from '@/views/home/styles/homeThemes';
import { shared } from '@/styles/themes/sharedTheme';
import { arcadiaDark } from '@/views/search/arcadia/styles/arcadiaThemes';

export const DarkTheme: ThemeType = {
  core: {
    mainThemeColor: customThemeDark.mainThemeColor, // Consider rgb(56 189 248)
    bgColor: customThemeDark.background,
    textColor: customThemeDark.textColor,
    basicShadow: 'rgb(22, 22, 22) 4px 4px 7px;',
    aLink: {
      linkColor: customThemeDark.mainThemeColor,
    },
    section: {
      borderColor: '#525963',
      backgroundColor: '#353843',
    },
    code: {
      backgroundColor: '#363a41',
      borderColor: '#5D5D5D',
      textColor: '#e29401',
    },
    table: {
      backgroundColor: '#25262e',
      borderColor: '#373C3F',
      headerColor: '#484c58',
      highlightCellBackgroundColor: customThemeDark.mainThemeColor,
      highlightCellColor: 'black',
      td: {
        borderColor: '#404448',
      },
      tr: {
        color: '#e9e9e9',
        evenCellsBackgroundColor: '#373D47',
      },
    },
  },
  chart: {
    border: '#292929',
    axisLabelFontColor: '#d0d0d0',
    axisXFontColor: '#969696',
    axisYFontColor: '#6a6a6a',
    backgroundColor: '#181a1b',
    tooltip: {
      borderColor: '#484848',
      bgColor: '#272a2c',
      timeBgColor: '#323131',
      timeColor: customThemeDark.mainThemeColor,
      valueBgColor: '#232528',
      valueColor: 'white',
    },
  },
  throbber: {
    background: customThemeDark.lightGrey,
    foreground: customThemeDark.mainThemeColor,
  },
  button: {
    border: '#484c58',
    fontColor: '#d1d2d2',
    transitionFontColor: 'black',
    backgroundColor: '#484c58',
    alertColor: '#f50809',
  },
  subButton: {
    backgroundColor: '#484c58',
    fontColor: '#d1d2d2',
    transitionFontColor: '#252525',
    borderColor: '#484c58',
  },
  header: {
    iconColor: '#dadada',
    iconHoverColor: customThemeDark.mainThemeColor,
    subTitleColor: '#939393',
    secondaryTitleColor: customThemeDark.mainThemeColor,
    secondaryTitleBrightness: 'brightness(115%)',
    borderBottomColor: customThemeDark.background,
  },
  home: homeDark,
  air: airDark,
  wh00t: wh00tDark,
  lexicon: lexiconDark,
  arcadia: arcadiaDark,
  debug: debugDark,
  shared,
};
