import { LexiconThemeType } from '@/types';

export const lexiconDark:LexiconThemeType = {
  textColor: '#d5d5d5',
  searchBar: {
    inputFontColor: '#d5d5d5',
    inputFontFocusColor: 'black',
    inputBackgroundColor: '#2F3436',
    inputBackgroundFocusColor: '#9c9c9c',
    borderColor: '#252729',
    borderFocusColor: '#9c9c9c',
    searchButton: {
      color: '#939393',
      background: '#252729',
    },
  },
};

export const lexiconLight:LexiconThemeType = {
  textColor: '#393939',
  searchBar: {
    inputFontColor: '#454545',
    inputFontFocusColor: 'black',
    inputBackgroundColor: '#d4d4d4',
    inputBackgroundFocusColor: '#e3e3e3',
    borderColor: 'grey',
    borderFocusColor: 'grey',
    searchButton: {
      color: '#fff',
      background: 'grey',
    },
  },
};
