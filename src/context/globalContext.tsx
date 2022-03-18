import React, { useReducer, useMemo, createContext } from 'react';
import { getInitialTheme } from '@/utils/localStorage';
import { ThemeModeEnum, GlobalActionsEnum } from '@/context/types/enums';
import { ChildrenProps } from '@/types';
import { GlobalContextActionType, GlobalContextStateType } from '@/context/types/globalContextTypes';

const initialState: GlobalContextStateType = {
  theme: getInitialTheme(),
};

export const GlobalContext = createContext({
  state: initialState,
  dispatch: null,
});

const globalReducer = (state: GlobalContextStateType, action: GlobalContextActionType) => {
  switch (action.type) {
    case GlobalActionsEnum.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === ThemeModeEnum.LIGHT ? ThemeModeEnum.DARK : ThemeModeEnum.LIGHT,
      };
    default:
      return state;
  }
};

export default function GlobalProvider({ children }: ChildrenProps) {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const memoizedValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <GlobalContext.Provider value={memoizedValue}>
      { children }
    </GlobalContext.Provider>
  );
}
