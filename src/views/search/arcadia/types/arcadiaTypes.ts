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

export type ArcResultProps = {
  arcResultPackage: ArcResultPackage
}

export type ArcResultViewProps = {
  arcResultPackage: ArcResultPackage
  onDelete: CallableFunction
  onEdit: CallableFunction
}

export type ArcResultDeleteProps = {
  itemKey: string
  onReset: CallableFunction
}

export type ArcResultDeleteQuestionProps = {
  onConfirm: CallableFunction
  onDeny: CallableFunction
}

export type ArcResultDeleteConfirmProps = {
  itemKey: string
}

export type ArcSearchResultsNode = {
  subject: string,
  notes: string[],
  urls: ArcResultPackage[]
}

export type ArcSearchResults = {
  similarTags: string[],
  searchResults: {
    subject: string,
    mainNode: ArcSearchResultsNode,
    subNode: ArcSearchResultsNode[]
  }
}

export type ArcDeleteItemResults = {
  deletedItem: boolean,
  reason: string,
  data: string[]
}
