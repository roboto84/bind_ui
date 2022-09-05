import { HomeThemeType } from '@/types';
import { customThemeDark, customThemeLight } from '@/styles/themes/customTheme';

export const homeDark:HomeThemeType = {
  robotoDescription: {
    borderColor: '#9e9f9f',
    backgroundColor: '#353843',
  },
  appDescription: {
    titleColor: customThemeDark.mainThemeColor,
    fontColor: '#e9e9e9',
    borderColor: '#525963',
    backgroundColor: '#3e424e',
  },
};

export const homeLight:HomeThemeType = {
  robotoDescription: {
    borderColor: customThemeLight.darkBlue,
    backgroundColor: '#e3e3e3',
  },
  appDescription: {
    titleColor: customThemeLight.darkBlue,
    fontColor: '#4e4e4e',
    borderColor: '#949494',
    backgroundColor: '#e3e3e3',
  },
};
