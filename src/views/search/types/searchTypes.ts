import { ArcEditPackage } from '@/views/search/arcadia/types/arcadiaTypes';

export type SearchSystem = {
  system: string,
  icon: JSX.Element,
  onHomeClick: CallableFunction,
  onSearchKeyUp: CallableFunction|null,
  onSendSearch: CallableFunction,
}

export type SearchBarProps = {
  searchSystem: SearchSystem,
  onSystemSwitch: CallableFunction,
}

export type ArcadiaProps = {
  subTag: string,
}

export type AddRecordProps = {
  isAddRecordViewable: boolean,
  switchAddRecordView: CallableFunction
}

export type AddRecordFormProps = {
  cancelAddForm: CallableFunction,
  onAddItem: CallableFunction
}

export type ArcAddPackage = {
  data: string,
  tags: string[],
}

export type AddRecordConfirmProps = {
  itemAddPackage: ArcAddPackage
  onReset: CallableFunction
}
