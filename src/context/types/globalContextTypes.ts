import { GlobalActionsEnum, ThemeModeEnum } from '@/context/types/enums';

export type GlobalContextStateType = {
  theme: ThemeModeEnum
}

export type GlobalContextActionType = {
  type: GlobalActionsEnum
}
