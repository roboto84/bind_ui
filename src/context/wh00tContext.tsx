import React, { useMemo, useReducer, useEffect } from 'react';
import { ChildrenProps } from '@/types';
import {
  Wh00tContextActionType,
  Wh00tContextStateType, Wh00tExtendedMessagePackage,
  Wh00tMessagePackage,
} from '@/context/types/wh00tContextTypes';
import {
  LocalStorageEnum,
  Wh00tActionsEnum,
  Wh00tMessageTypeEnum,
  Wh00tWindowStateEnum,
} from '@/context/types/enums';
import { Wh00tWebSocket } from '@/dataSource/webSockets/wh00tWebSocket';
import { getInitialChatState, getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import { AppNotification } from '@/utils/appNotification';
import { userIsBot } from '@/views/wh00t/utils/utils';

const initialState: Wh00tContextStateType = {
  historicalChatMessages: [],
  currentChatMessage: null,
  wh00tIsConnected: false,
  wh00tIsConnecting: false,
  wh00tConnectionError: false,
  wh00tWebSocket: new Wh00tWebSocket(),
  wh00tWindowState: getInitialChatState(),
  wh00tNotifier: new AppNotification(),
  wh00tInternalAlert: false,
};

export const Wh00tSocketContext = React.createContext({
  state: initialState,
  dispatch: null,
});

export const useWh00tWebsocket = () => React.useContext(Wh00tSocketContext);

const wh00tReducer = (state: Wh00tContextStateType, action: Wh00tContextActionType) => {
  const message: Wh00tExtendedMessagePackage = { ...action.value, source: action.source };
  switch (action.type) {
    case Wh00tActionsEnum.INTERNAL_ALERT_ON:
      return {
        ...state,
        wh00tInternalAlert: true,
      };
    case Wh00tActionsEnum.INTERNAL_ALERT_OFF:
      return {
        ...state,
        wh00tInternalAlert: false,
      };
    case Wh00tActionsEnum.WINDOW_MIN:
      setLocalStorage(LocalStorageEnum.CHAT_STATE, Wh00tWindowStateEnum.MIN);
      return {
        ...state,
        wh00tWindowState: Wh00tWindowStateEnum.MIN,
      };
    case Wh00tActionsEnum.WINDOW_MED:
      setLocalStorage(LocalStorageEnum.CHAT_STATE, Wh00tWindowStateEnum.MED);
      return {
        ...state,
        wh00tWindowState: Wh00tWindowStateEnum.MED,
      };
    case Wh00tActionsEnum.WINDOW_MAX:
      setLocalStorage(LocalStorageEnum.CHAT_STATE, Wh00tWindowStateEnum.MAX);
      return {
        ...state,
        wh00tWindowState: Wh00tWindowStateEnum.MAX,
      };
    case Wh00tActionsEnum.HISTORICAL_MESSAGE:
      return {
        ...state,
        historicalChatMessages: state.historicalChatMessages.concat(message),
      };
    case Wh00tActionsEnum.NEW_MESSAGE:
      return {
        ...state,
        historicalChatMessages: state.currentChatMessage
          ? state.historicalChatMessages.concat(state.currentChatMessage)
          : state.historicalChatMessages,
        currentChatMessage: message,
      };
    case Wh00tActionsEnum.SECRET_MESSAGE:
      return {
        ...state,
        historicalChatMessages: state.historicalChatMessages.filter(
          (historicalMessage: Wh00tMessagePackage) => (
            historicalMessage.message !== action.value.message),
        ),
        currentChatMessage: state.currentChatMessage
        && (state.currentChatMessage.message === action.value.message)
          ? null
          : state.currentChatMessage,
      };
    case Wh00tActionsEnum.CLEAR_MESSAGES:
      return {
        ...state,
        historicalChatMessages: [],
        currentChatMessage: null,
      };
    case Wh00tActionsEnum.CONNECTED:
      return {
        ...state,
        wh00tIsConnected: true,
        wh00tIsConnecting: false,
        wh00tConnectionError: false,
      };
    case Wh00tActionsEnum.DISCONNECTED:
      return {
        ...state,
        wh00tIsConnected: false,
        wh00tIsConnecting: false,
        wh00tConnectionError: false,
        historicalChatMessages: [],
        currentChatMessage: null,
      };
    case Wh00tActionsEnum.CONNECTING:
      return {
        ...state,
        wh00tIsConnecting: true,
        wh00tIsConnected: false,
        wh00tConnectionError: false,
      };
    case Wh00tActionsEnum.CONNECTION_ERROR:
      return {
        ...state,
        wh00tIsConnecting: false,
        wh00tIsConnected: false,
        wh00tConnectionError: true,
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
    const stopNotifier = () => {
      state.wh00tNotifier.stopDocumentTitleNotification();
    };

    if (!state.wh00tIsConnected && !state.wh00tIsConnecting && !state.wh00tConnectionError) {
      const username: string = getLocalStorage(LocalStorageEnum.USERNAME);
      const shouldConnect: string = getLocalStorage(LocalStorageEnum.STAY_CONNECTED);

      document.addEventListener('focus', stopNotifier);
      state.wh00tWebSocket.setDispatch(dispatch);
      state.wh00tNotifier.setDispatch(dispatch);
      if (JSON.parse(shouldConnect) === true && username) {
        state.wh00tWebSocket.connectWebSocket(username);
      }
    }

    return () => {
      document.removeEventListener('focus', stopNotifier);
    };
  }, []);

  useEffect(() => {
    if (state.currentChatMessage !== null
      && state.currentChatMessage.username !== state.wh00tWebSocket.clientId
      && !userIsBot(state.currentChatMessage.username)
      && state.currentChatMessage.source === Wh00tMessageTypeEnum.SOCKET) {
      state.wh00tNotifier.playNotificationSound();
      state.wh00tNotifier.startDocumentTitleNotification();
    }
  }, [state.currentChatMessage]);

  return (
    <Wh00tSocketContext.Provider value={memoizedValue}>
      { children }
    </Wh00tSocketContext.Provider>
  );
}
