import { LexiconThemeType } from '@/types';

export const lexiconDark:LexiconThemeType = {
  textColor: '#d5d5d5',
  searchBar: {
    inputFontColor: '#d5d5d5',
    inputFontFocusColor: 'white',
    inputBackgroundColor: '#2F3436',
    inputBackgroundFocusColor: '#54585c',
    borderColor: '#2F3436',
    borderFocusColor: '#54585c',
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
