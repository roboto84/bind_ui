import { ThemeType } from '@/types/themeTypes';
import { lexiconDark } from '@/views/lexicon/styles/lexiconThemes';
import { debugDark } from '@/views/debug/styles/debugThemes';
import { customTheme } from '@/styles/themes/customTheme';
import { wh00tDark } from '@/views/wh00t/styles/wh00tThemes';
import { airDark } from '@/views/air/styles/airThemeStyle';

export const DarkTheme: ThemeType = {
  core: {
    mainThemeColor: customTheme.green,
    bgColor: customTheme.background,
    textColor: customTheme.textColor,
    linkColor: customTheme.lightBlue,
    code: {
      backgroundColor: '#2e3234',
      borderColor: 'rgb(93, 93, 93)',
      textColor: '#d88e01',
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
    border: '#373737',
    fontColor: '#939393',
    transitionFontColor: 'black',
    backgroundColor: '#181a1b',
  },
  header: {
    subTitleFontColor: '#939393',
    borderBottomColor: '#181a1b',
  },
  air: airDark,
  wh00t: wh00tDark,
  lexicon: lexiconDark,
  debug: debugDark,
};
