import { LexiconThemeType } from '@/types';
import { customTheme } from '@/styles/themes/customTheme';

export const lexiconDark:LexiconThemeType = {
  textColor: '#d5d5d5',
  searchBar: {
    inputFontColor: '#939393',
    inputFontFocusColor: '#2b2b2b',
    inputBackgroundColor: '#2F3436',
    inputBackgroundFocusColor: customTheme.green,
    borderColor: '#252729',
    searchButton: {
      color: '#939393',
      background: '#252729',
    },
  },
};

export const lexiconLight:LexiconThemeType = {
  textColor: '#393939',
  searchBar: {
    inputFontColor: 'black',
    inputFontFocusColor: '#2b2b2b',
    inputBackgroundColor: '#d4d4d4',
    inputBackgroundFocusColor: '#e3e3e3',
    borderColor: '#626f3694',
    searchButton: {
      color: '#fff',
      background: 'grey',
    },
  },
};
