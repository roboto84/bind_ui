import { SearchActionsEnum } from '@/context/types/enums';
import { TagWithCount } from '@/dataSource/types/apiTypes';

export type SearchContextStateType = {
  tags: TagWithCount[]
}

export type SearchContextActionType = {
  type: SearchActionsEnum,
  value: TagWithCount[]
}
