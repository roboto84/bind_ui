import { tomorrowDark, tomorrowLight } from '@/styles/themes/tomorrowTheme';
import { customThemeDark, customThemeLight } from '@/styles/themes/customTheme';
import { DebugThemeType } from '@/types';

export const debugLight: DebugThemeType = {
  messageTitleColor: '#242424',
  messageTextColor: '#363636',
  messageId: '#d36010',
  messageCategory: '#617800',
  messageTime: '#b80506',
  latestMessageBorder: customThemeLight.darkBlue,
};

export const debugDark: DebugThemeType = {
  messageTitleColor: '#e6e6e6',
  messageTextColor: '#e9e9e9',
  messageId: tomorrowDark.yellow,
  messageCategory: '#91b810',
  messageTime: '#eb5b5b',
  latestMessageBorder: customThemeDark.mainThemeColor,
};
