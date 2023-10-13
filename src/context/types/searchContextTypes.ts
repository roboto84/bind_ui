import { SearchActionsEnum } from '@/context/types/enums';
import { TagWithCount } from '@/dataSource/types/apiTypes';

export type SearchContextStateType = {
  tags: TagWithCount[],
  tagsHashMap: Map<string, number>
}

export type SearchContextActionType = {
  type: SearchActionsEnum,
  value: TagWithCount[]
}
