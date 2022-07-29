import { LocalStorageEnum, ThemeModeEnum } from '@/context/types/enums';

export const getLocalStorage = (key: string) => localStorage.getItem(key);

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

export const getInitialTheme = ():ThemeModeEnum => {
  const urlParams:URLSearchParams = new URLSearchParams(window.location.search);
  const theme:string|null = urlParams.get('theme');
  if (theme) {
    if (theme && theme === ThemeModeEnum.DARK) {
      return ThemeModeEnum.DARK;
    }
    return ThemeModeEnum.LIGHT;
  }

  const storageTheme: string = getLocalStorage(LocalStorageEnum.THEME);
  if (storageTheme) {
    return storageTheme === ThemeModeEnum.LIGHT ? ThemeModeEnum.LIGHT : ThemeModeEnum.DARK;
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return ThemeModeEnum.DARK;
  }
  return ThemeModeEnum.LIGHT;
};
