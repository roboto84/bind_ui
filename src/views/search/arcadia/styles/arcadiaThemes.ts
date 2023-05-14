import { ArcadiaThemeType } from '@/types';
import { customThemeDark, customThemeLight } from '@/styles/themes/customTheme';
import { tomorrowDark } from '@/styles/themes/tomorrowTheme';

export const arcadiaLight:ArcadiaThemeType = {
  search: {
    alphabetHeaderColor: customThemeLight.darkBlue,
    subTitleColor: '#d36010',
    timeColor: '#617800',
  },
};

export const arcadiaDark:ArcadiaThemeType = {
  search: {
    alphabetHeaderColor: customThemeDark.lightBlue,
    subTitleColor: tomorrowDark.yellow,
    timeColor: '#91b810',
  },
};
