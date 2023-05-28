import { Size } from '@/types';
import { LexiconSearchType } from '@/dataSource/types/apiTypes';
import { CamelCaseKeys } from 'camelcase-keys';

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
  size ?: Size
}

export type LexiconSearchDefinitionSmallViewProps = {
  wordDefinition: WordDefinition
}

export type LatestWordListProps = {
  wordList: string[]
}

export type LexiconDictionarySizeProps = {
  size: number
}

export type WordDefinitionsProps = {
  definitions: string[],
  numOfDefs ?: number
}

export type LexiconCardProps = {
  title: string,
  searchTerm ?: string,
  definition ?: WordDefinition
}

export type LexiconConfirmSearchProps = {
  searchTerm: string,
  shouldSearch: CallableFunction
}

export type LexiconCardViewProps = {
  searchTerm: string
}
