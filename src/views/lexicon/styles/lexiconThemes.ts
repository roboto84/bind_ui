import { LexiconThemeType } from '@/types';

export const lexiconDark:LexiconThemeType = {
  textColor: '#d5d5d5',
  secondaryTextColor: '#787878',
  ternaryTextColor: '#9d9d9d',
  searchBar: {
    inputFontColor: '#d5d5d5',
    inputFontFocusColor: 'white',
    inputBackgroundColor: '#3A4043',
    inputBackgroundFocusColor: '#434c54',
    borderColor: '#3A4043',
    borderFocusColor: '#434c54',
    searchButton: {
      color: '#939393',
      background: '#1e1f21',
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
