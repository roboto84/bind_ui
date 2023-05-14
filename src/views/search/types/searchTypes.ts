export type SearchSystem = {
  system: string,
  onHomeClick: CallableFunction,
  onSearchKeyUp: CallableFunction|null,
  onSendSearch: CallableFunction,
}

export type SearchBarProps = {
  searchSystem: SearchSystem
}

export enum ArcadiaView {
  INDEX = 'INDEX',
  MAIN = 'MAIN'
}

export type ArcadiaProps = {
  view: ArcadiaView,
  subTag: string,
  setContext: CallableFunction
}

export type AddRecordProps = {
  isAddRecordViewable: boolean,
  cancelAddRecordFormView: CallableFunction
}

export type AddRecordFormProps = {
  cancelAddForm: CallableFunction,
  onAddItem: CallableFunction,
  isFormActive: boolean
}

export type ArcAddPackage = {
  data: string,
  tags: string[],
}

export type AddRecordConfirmProps = {
  itemAddPackage: ArcAddPackage
  onConfirmation: CallableFunction
}
