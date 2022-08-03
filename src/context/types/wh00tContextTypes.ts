import { Wh00tWebSocket } from '@/dataSource/webSockets/wh00tWebSocket';
import { AppNotification } from '@/utils/appNotification';
import { Wh00tActionsEnum, Wh00tMessageTypeEnum } from '@/context/types/enums';

export type Wh00tMessagePackage = {
  username: string,
  time: string,
  message: string
}

export interface Wh00tExtendedMessagePackage extends Wh00tMessagePackage{
  source: Wh00tMessageTypeEnum
}

export type Wh00tContextStateType = {
  historicalChatMessages: Wh00tExtendedMessagePackage[],
  currentChatMessage: Wh00tExtendedMessagePackage,
  wh00tIsConnected: boolean,
  wh00tIsConnecting: boolean,
  wh00tConnectionError: boolean,
  wh00tWebSocket: Wh00tWebSocket,
  wh00tMinimizedSwitch: boolean,
  wh00tNotifier: AppNotification,
  wh00tInternalAlert: boolean
}

export type Wh00tContextActionType = {
  source: Wh00tMessageTypeEnum,
  type: Wh00tActionsEnum,
  value ?: Wh00tMessagePackage
}
