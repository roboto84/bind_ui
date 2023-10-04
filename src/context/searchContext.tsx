import React, { useReducer, useMemo, createContext } from 'react';
import { SearchActionsEnum } from '@/context/types/enums';
import { ChildrenProps } from '@/types';
import { SearchContextActionType, SearchContextStateType } from '@/context/types/searchContextTypes';

const initialState: SearchContextStateType = {
  tags: [],
};

export const SearchContext = createContext({
  state: initialState,
  dispatch: null,
});

const searchReducer = (state: SearchContextStateType, action: SearchContextActionType) => {
  switch (action.type) {
    case SearchActionsEnum.LOAD_TAGS:
      return {
        ...state,
        tags: action.value,
      };
    default:
      return state;
  }
};

export default function SearchProvider({ children }: ChildrenProps) {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  const memoizedValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <SearchContext.Provider value={memoizedValue}>
      { children }
    </SearchContext.Provider>
  );
}
