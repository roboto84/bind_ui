import { LocalStorageEnum, ThemeModeEnum, Wh00tWindowStateEnum } from '@/context/types/enums';

export const getLocalStorage = (key: string) => localStorage.getItem(key);

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

export const getInitialTheme = ():ThemeModeEnum => {
  const storageTheme: string = getLocalStorage(LocalStorageEnum.THEME);
  if (storageTheme) {
    return storageTheme === ThemeModeEnum.LIGHT ? ThemeModeEnum.LIGHT : ThemeModeEnum.DARK;
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return ThemeModeEnum.DARK;
  }
  return ThemeModeEnum.LIGHT;
};

export const getInitialChatState = ():Wh00tWindowStateEnum => {
  const storageChatState: string = getLocalStorage(LocalStorageEnum.CHAT_STATE);
  if (storageChatState) {
    switch (storageChatState) {
      case Wh00tWindowStateEnum.MED:
        return Wh00tWindowStateEnum.MED;
      case Wh00tWindowStateEnum.MAX:
        return Wh00tWindowStateEnum.MAX;
      default:
        return Wh00tWindowStateEnum.MIN;
    }
  }

  return Wh00tWindowStateEnum.MIN;
};
