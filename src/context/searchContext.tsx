import React, { useReducer, useMemo, createContext } from 'react';
import { SearchActionsEnum } from '@/context/types/enums';
import { ChildrenProps } from '@/types';
import { SearchContextActionType, SearchContextStateType } from '@/context/types/searchContextTypes';
import { TagWithCount } from '@/dataSource/types/apiTypes';

const initialState: SearchContextStateType = {
  tags: [],
  tagsHashMap: new Map<string, number>(),
};

export const SearchContext = createContext({
  state: initialState,
  dispatch: null,
});

const searchReducer = (state: SearchContextStateType, action: SearchContextActionType) => {
  switch (action.type) {
    case SearchActionsEnum.LOAD_TAGS: {
      const newTagMap: Map<string, number> = new Map<string, number>();
      action.value.forEach((tagObject: TagWithCount) => {
        newTagMap.set(tagObject.tag, tagObject.count);
      });

      return {
        ...state,
        tags: action.value,
        tagsHashMap: newTagMap,
      };
    }
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
