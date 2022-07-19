import { HomeThemeType } from '@/types';
import { customTheme } from '@/styles/themes/customTheme';

export const homeDark:HomeThemeType = {
  robotoDescription: {
    borderColor: '#9e9f9f',
    backgroundColor: '#212329',
  },
  appDescription: {
    titleColor: customTheme.green,
    fontColor: '#e9e9e9',
    borderColor: '#484c58',
    backgroundColor: '#23252c',
  },
};

export const homeLight:HomeThemeType = {
  robotoDescription: {
    borderColor: '#6a9ca9',
    backgroundColor: '#e3e3e3',
  },
  appDescription: {
    titleColor: '#6a9ca9',
    fontColor: '#4e4e4e',
    borderColor: '#949494',
    backgroundColor: '#e3e3e3',
  },
};
