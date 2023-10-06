import React from 'react';

export interface IStringIndexedObject {
  [key: string]: any
}

export type SearchSystem = {
  system: string,
  onHomeClick: CallableFunction,
  onSearchKeyUp: CallableFunction|null,
  onSendSearch: CallableFunction,
}

export type SearchBarProps = {
  searchSystem: SearchSystem,
}

export enum ArcadiaView {
  INDEX = 'INDEX',
  MAIN = 'MAIN'
}

export type ArcadiaProps = {
  view: ArcadiaView,
  searchTerm: string
}

export type AddRecordProps = {
  isAddRecordViewable: boolean,
  cancelAddRecordFormView: CallableFunction
}

export type AddRecordFormProps = {
  _ref?: React.Ref<any>,
  cancelAddForm: CallableFunction,
  onAddItem: CallableFunction,
  isFormActive: boolean,
  isSuccess: boolean
}

export type ArcAddPackage = {
  data: string,
  tags: string[],
}

export type AddRecordConfirmProps = {
  itemAddPackage: ArcAddPackage,
  onConfirmation: CallableFunction
}
