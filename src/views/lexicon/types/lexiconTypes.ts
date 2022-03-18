export type WordDefinition = {
  word: string,
  definitionIsAcceptable: boolean,
  spellingSuggestions: string[],
  stems: string[],
  dateFirstUsed: string,
  partOfSpeech: string,
  wordBreak: string,
  pronounce: [string, string],
  audio: string,
  etymology: string,
  definitions: string[],
  example: string,
  source: string,
}

export type WordOfDayProps = {
  wordDefinition: WordDefinition
}

export type WordSearchDefinitionProps = {
  wordDefinition: WordDefinition
}

export type LatestWordListProps = {
  wordList: string[]
}
