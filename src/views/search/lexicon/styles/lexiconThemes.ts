import { LexiconThemeType } from '@/types';

export const lexiconDark:LexiconThemeType = {
  textColor: '#d5d5d5',
  secondaryTextColor: '#9d9d9d',
  ternaryTextColor: '#9d9d9d',
  searchBar: {
    inputFontColor: '#d5d5d5',
    inputFontFocusColor: 'white',
    inputBackgroundColor: '#444e5c',
    inputBackgroundFocusColor: '#4c5767',
    borderColor: '#444e5c',
    borderFocusColor: '#4c5767',
    searchButton: {
      color: '#c0c1c1',
      background: '#434756',
    },
  },
};

export const lexiconLight:LexiconThemeType = {
  textColor: '#393939',
  secondaryTextColor: '#606060',
  ternaryTextColor: '#323232',
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
