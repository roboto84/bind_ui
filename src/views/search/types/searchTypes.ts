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
  setContext: CallableFunction
}

export type AddRecordProps = {
  isAddRecordViewable: boolean,
  switchAddRecordView: CallableFunction,
  initialTags: string
}

export type AddRecordFormProps = {
  cancelAddForm: CallableFunction,
  onAddItem: CallableFunction,
  possibleTag: string
}

export type ArcAddPackage = {
  data: string,
  tags: string[],
}

export type AddRecordConfirmProps = {
  itemAddPackage: ArcAddPackage
  onReset: CallableFunction
}
