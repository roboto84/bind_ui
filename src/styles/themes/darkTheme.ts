import { ThemeType } from '@/types/themeTypes';
import { lexiconDark } from '@/views/lexicon/styles/lexiconThemes';
import { debugDark } from '@/views/debug/styles/debugThemes';
import { customTheme } from '@/styles/themes/customTheme';
import { wh00tDark } from '@/views/wh00t/styles/wh00tThemes';
import { airDark } from '@/views/air/styles/airThemeStyle';
import { homeDark } from '@/views/home/styles/homeThemes';

export const DarkTheme: ThemeType = {
  core: {
    mainThemeColor: customTheme.green,
    bgColor: customTheme.background,
    textColor: customTheme.textColor,
    aLink: {
      linkColor: customTheme.green,
      hoverColor: '#91b400',
    },
    section: {
      backgroundColor: '#23252c',
      borderColor: '#484c58',
    },
    code: {
      backgroundColor: '#2e3234',
      borderColor: '#5D5D5D',
      textColor: '#d88e01',
    },
    table: {
      borderColor: '#373C3F',
      headerColor: '#444A4E',
      highlightCellColor: '#617c07',
    },
  },
  chart: {
    border: '#292929',
    axisLabelFontColor: '#d0d0d0',
    axisXFontColor: '#969696',
    axisYFontColor: '#6a6a6a',
    backgroundColor: '#181a1b',
  },
  throbber: {
    background: customTheme.lightGrey,
    foreground: customTheme.green,
  },
  button: {
    border: '#484c58',
    fontColor: '#d1d2d2',
    transitionFontColor: 'black',
    backgroundColor: '#484c58',
  },
  subButton: {
    backgroundColor: '#484c58',
    fontColor: '#d1d2d2',
    transitionFontColor: '#252525',
    borderColor: '#484c58',
  },
  header: {
    iconColor: '#dadada',
    iconHoverColor: customTheme.green,
    subTitleColor: '#939393',
    secondaryTitleColor: '#a4d20c',
    borderBottomColor: customTheme.background,
  },
  home: homeDark,
  air: airDark,
  wh00t: wh00tDark,
  lexicon: lexiconDark,
  debug: debugDark,
};
