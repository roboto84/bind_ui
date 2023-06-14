import { GlobalThemeType } from '@/types';
import React from 'react';

export enum ArcResultDisplay {
  VIEW = 'VIEW',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
}

export type ArcResultPackage = {
  id: number,
  timeStamp: string,
  data: string,
  tags: string[],
  dataType: string,
  title: string,
  description: string,
  image: string
}

export type ArcResultEditingPackage = {
  itemPackage: ArcEditPackage,
  editingMessage: string
}

export type ArcEditPackage = {
  data: string,
  dataUpdate: string,
  tags: string[],
  title: string,
  description: string,
  image: string
}

export type ArcResultProps = {
  arcResultPackage: ArcResultPackage,
  onSubTagClick: CallableFunction
}

export type ArcResultViewProps = {
  _ref: React.Ref<any>,
  arcResultPackage: ArcResultPackage,
  onDelete: CallableFunction,
  onEdit: CallableFunction,
  onSubTagClick: CallableFunction
  displayMessage: string
}

export type ArcResultDeleteProps = {
  _ref: React.Ref<any>,
  itemKey: string,
  onReset: CallableFunction
}

export type ArcResultEditProps = {
  itemKey: string,
  image: string,
  tags: string,
  title: string,
  description: string,
  onReset: CallableFunction,
  onEditConfirmed: CallableFunction
}

export type ArcResultEditViewProps = {
  itemKey: string,
  image: string,
  tags: string,
  title: string,
  description: string,
  onReset: CallableFunction,
  onEdit: CallableFunction
}

export type ArcResultDeleteQuestionProps = {
  itemKey: string,
  onConfirm: CallableFunction,
  onDeny: CallableFunction,
}

export type ArcResultDeleteConfirmProps = {
  _ref: React.Ref<any>,
  itemKey: string
}

export type ArcResultSubNodeProps = {
  node: ArcSearchResultsNode,
  onTagClick: CallableFunction
}

export type ArcadiaSearchProps = {
  setContext: CallableFunction
}

export type TagGroupProps = {
  highlight ?: boolean,
  title: string,
  tagList: string[],
  onTagClick: CallableFunction
}

export interface TagGroupSectionProps extends GlobalThemeType {
  isHighLight ?: boolean
}

export type ArcSearchResultsNode = {
  subject: string,
  notes: string[],
  urls: ArcResultPackage[]
}

export type ArcSearchResultPackage = {
  subject: string,
  mainNode: ArcSearchResultsNode,
  subNode: ArcSearchResultsNode[]
}

export type ArcSearchResults = {
  similarTags: string[],
  searchResults: ArcSearchResultPackage
}

export type ArcDeleteItemResults = {
  deletedItem: boolean,
  reason: string,
  data: string[]
}

export type ArcEditItemResults = {
  updatedItem: boolean,
  reason: string,
  data: string[]
}

export type ArcAddItemResults = {
  addedItem: boolean,
  reason: string,
  data: string[]
}

export type ArcResultEditConfirmProps = {
  itemEditPackage: ArcEditPackage,
  onEditConfirmed: CallableFunction
}

export type ArcSearchPageInnerLinksProps = {
  tags: string []
}

export type ArcSearchPageHeaderProps = {
  urlLength: number,
  tagsLength: number,
  subject: string
}

export type ArcadiaSearchHomeProps = {
  tagSearchTerm ?: string
  onTagClick: CallableFunction
}

export type ArcadiaGraphCoherenceProps = {
  numberOfSubjects: number,
  numberOfUrlRecords: number
}

export type ArcRandomRecordProps = {
  record: ArcResultPackage,
  onTagClick: CallableFunction
}

export type ArcadiaTagIndexProps = {
  searchTerm: string,
  onTagClick: CallableFunction
}

export type TagIndexProps = {
  arcadiaTags: [string, string[]][],
  onTagClick: CallableFunction
}
