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