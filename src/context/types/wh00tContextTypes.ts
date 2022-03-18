import { Wh00tActionsEnum } from '@/context/types/enums';
import { Wh00tWebSocket } from '@/dataSource/webSockets/wh00tWebSocket';
import { AppNotification } from '@/utils/appNotification';

export type Wh00tMessagePackage = {
  username: string,
  time: string,
  message: string
}

export type Wh00tContextStateType = {
  historicalChatMessages: Wh00tMessagePackage[],
  currentChatMessage: Wh00tMessagePackage,
  wh00tIsConnected: boolean,
  wh00tWebSocket: Wh00tWebSocket,
  wh00tMinimizedSwitch: boolean,
  wh00tNotifier: AppNotification,
}

export type Wh00tContextActionType = {
  type: Wh00tActionsEnum
  value ?: Wh00tMessagePackage
}
