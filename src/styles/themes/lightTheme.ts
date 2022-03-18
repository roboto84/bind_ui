import { ThemeType } from '@/types/themeTypes';
import { tomorrowLight } from '@/styles/themes/tomorrowTheme';
import { lexiconLight } from '@/views/lexicon/styles/lexiconThemes';
import { debugLight } from '@/views/debug/styles/debugThemes';
import { customTheme } from '@/styles/themes/customTheme';
import { wh00tLight } from '@/views/wh00t/styles/wh00tThemes';
import { airLight } from '@/views/air/styles/airThemeStyle';

export const LightTheme: ThemeType = {
  core: {
    mainThemeColor: tomorrowLight.green,
    bgColor: '#d4d4d4',
    textColor: 'black',
    linkColor: '#5dd2f2',
  },
  button: {
    border: 'grey',
    fontColor: '#4e4e4e',
    transitionFontColor: 'white',
    backgroundColor: '#e3e3e3',
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
    foreground: customTheme.green,
  },
  header: {
    subTitleFontColor: '#6c6c6c',
    borderBottomColor: '#a5a5a5',
  },
  air: airLight,
  wh00t: wh00tLight,
  lexicon: lexiconLight,
  debug: debugLight,
};
