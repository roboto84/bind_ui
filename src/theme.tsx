import React, { useContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalContext } from '@/context/globalContext';
import { GlobalStyle } from '@/styles/globalStyle';
import { ThemeModeEnum, LocalStorageEnum } from '@/context/types/enums';
import { DarkTheme, LightTheme } from '@/styles/theme';
import { ChildrenProps } from '@/types/globalTypes';
import { setLocalStorage } from '@/utils/localStorage';
import { GlobalThemeStyle } from '@/styles/globalThemeStyle';

export default function Theme({ children }: ChildrenProps) {
  const { state } = useContext(GlobalContext);
  const thisTheme = state.theme === ThemeModeEnum.LIGHT ? LightTheme : DarkTheme;

  useEffect(() => {
    setLocalStorage(LocalStorageEnum.THEME, state.theme);
  }, [state.theme]);

  return (
    <ThemeProvider theme={thisTheme}>
      <GlobalStyle />
      <GlobalThemeStyle />
      { children }
    </ThemeProvider>
  );
}
