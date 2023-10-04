import { SearchActionsEnum } from '@/context/types/enums';

export type SearchContextStateType = {
  tags: string[]
}

export type SearchContextActionType = {
  type: SearchActionsEnum,
  value: string[]
}
