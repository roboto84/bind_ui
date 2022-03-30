import React, { useMemo, useReducer, useEffect } from 'react';
import { ChildrenProps } from '@/types';
import { Wh00tContextActionType, Wh00tContextStateType } from '@/context/types/wh00tContextTypes';
import { LocalStorageEnum, Wh00tActionsEnum } from '@/context/types/enums';
import { Wh00tWebSocket } from '@/dataSource/webSockets/wh00tWebSocket';
import { getLocalStorage } from '@/utils/localStorage';
import { AppNotification } from '@/utils/appNotification';

const initialState: Wh00tContextStateType = {
  historicalChatMessages: [],
  currentChatMessage: null,
  wh00tIsConnected: false,
  wh00tWebSocket: new Wh00tWebSocket(),
  wh00tMinimizedSwitch: true,
  wh00tNotifier: new AppNotification(),
};

export const Wh00tSocketContext = React.createContext({
  state: initialState,
  dispatch: null,
});

export const useWh00tWebsocket = () => React.useContext(Wh00tSocketContext);

const wh00tReducer = (state: Wh00tContextStateType, action: Wh00tContextActionType) => {
  switch (action.type) {
    case Wh00tActionsEnum.MINIMIZED_SWITCH:
      return {
        ...state,
        wh00tMinimizedSwitch: !state.wh00tMinimizedSwitch,
      };
    case Wh00tActionsEnum.HISTORICAL_MESSAGE:
      return {
        ...state,
        wh00tIsConnected: true,
        historicalChatMessages: state.historicalChatMessages.concat(action.value),
      };
    case Wh00tActionsEnum.NEW_MESSAGE:
      return {
        ...state,
        wh00tIsConnected: true,
        historicalChatMessages: state.historicalChatMessages.concat(state.currentChatMessage),
        currentChatMessage: action.value,
      };
    case Wh00tActionsEnum.SECRET_MESSAGE:
      return {
        ...state,
        historicalChatMessages: state.historicalChatMessages.filter(
          (historicalMessage) => (
            historicalMessage.message !== action.value.message),
        ),
        currentChatMessage: state.currentChatMessage && (state.currentChatMessage.message === action.value.message)
          ? null
          : state.currentChatMessage,
      };
    case Wh00tActionsEnum.CLEAR_MESSAGES:
      return {
        ...state,
        historicalChatMessages: [],
        currentChatMessage: null,
      };
    case Wh00tActionsEnum.DISCONNECT:
      return {
        ...state,
        wh00tIsConnected: false,
        historicalChatMessages: [],
        currentChatMessage: null,
      };
    default:
      return state;
  }
};

export function Wh00tSocketManager({ children }: ChildrenProps) {
  const [state, dispatch] = useReducer(wh00tReducer, initialState);
  const memoizedValue = useMemo(() => ({ state, dispatch }), [state]);

  useEffect(() => {
    state.wh00tWebSocket.setDispatch(dispatch);
    const username: string = getLocalStorage(LocalStorageEnum.USERNAME);
    const shouldConnect: string = getLocalStorage(LocalStorageEnum.STAY_CONNECTED);
    const stopNotifier = () => {
      state.wh00tNotifier.stopDocumentTitleNotification();
    };
    if (JSON.parse(shouldConnect) === true && username) {
      state.wh00tWebSocket.connectWebSocket(username);
    }

    document.addEventListener('focus', stopNotifier);
    return () => {
      document.removeEventListener('focus', stopNotifier);
    };
  }, []);

  useEffect(() => {
    if (state.currentChatMessage !== null) {
      state.wh00tNotifier.startDocumentTitleNotification();
    }
  }, [state.currentChatMessage]);

  return (
    <Wh00tSocketContext.Provider value={memoizedValue}>
      { children }
    </Wh00tSocketContext.Provider>
  );
}
