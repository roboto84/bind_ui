import wh00tBackgroundDark from '@/assets/images/wh00t_background_dark.png';
import wh00tBackgroundLight from '@/assets/images/wh00t_background_light.png';
import { Wh00tThemeType } from '@/types';

export const wh00tDark: Wh00tThemeType = {
  backgroundImage: wh00tBackgroundDark,
  miniWh00t: {
    minimizedButton: {
      color: '#939393',
      borderColor: '#484c58',
      backgroundColor: '#1e1f25',
      backgroundHoverColor: '#ef8236',
    },
    backgroundColor: '#23252c',
    borderColor: '#484c58',
    inputColor: '#FF9800',
  },
  largeWh00t: {
  },
  messages: {
    backgroundColor: '#1d1f21',
    otherUsernamesColor: '#de935f',
    usernameColor: '#b5bd68',
    botUsernameColor: '#3da497',
    usernameBaseImageBackgroundColor: '#8a904e',
    otherUsernameBaseImageBackgroundColor: '#94673f',
    timeColor: '#A3A3A3',
    messageText: '#f0c674',
    aLinkColor: '#81a2be',
    imageBorderColor: '#444',
  },
  chatInput: {
    button: {
      backgroundColor: '#2F3436',
      color: '#FFA31A',
    },
    textInput: {
      borderColor: '#373737',
      backgroundColor: '#2F3436',
      focusBackgroundColor: '#2F3436',
      focusFontColor: '#FF9800',
    },
    emoji: {
      borderColor: '#474747',
    },
  },
  chatHeader: {
    backgroundColor: '#2e313a',
    titleColor: '#de935f',
    titleHighlightColor: '#bababa',
  },
  connect: {
    labelDescription: '#757575',
  },
};

export const wh00tLight: Wh00tThemeType = {
  backgroundImage: wh00tBackgroundLight,
  miniWh00t: {
    minimizedButton: {
      color: '#4e4e4e',
      borderColor: '#4e4e4e',
      backgroundColor: '#d4d4d4',
      backgroundHoverColor: '#6a9ca9',
    },
    backgroundColor: '#d4d4d4',
    borderColor: '#949494',
    inputColor: '#A16000',
  },
  largeWh00t: {
  },
  messages: {
    backgroundColor: '#e9e9e9',
    otherUsernamesColor: '#e37122',
    usernameColor: '#889411',
    botUsernameColor: '#3e999f',
    usernameBaseImageBackgroundColor: '#99a14a',
    otherUsernameBaseImageBackgroundColor: '#c37835',
    timeColor: '#8E8D8D',
    messageText: '#004578',
    aLinkColor: '#5c9bd0',
    imageBorderColor: '#e5e5e5',
  },
  chatInput: {
    button: {
      backgroundColor: '#696969',
      color: '#F9B551',
    },
    textInput: {
      borderColor: 'grey',
      backgroundColor: '#d4d4d4',
      focusBackgroundColor: '#f2f2f2',
      focusFontColor: '#004578',
    },
    emoji: {
      borderColor: '#8d8e8e',
    },
  },
  chatHeader: {
    backgroundColor: '#707070',
    titleColor: '#ffa464',
    titleHighlightColor: 'white',
  },
  connect: {
    labelDescription: '#757575',
  },
};
