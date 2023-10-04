import { WeatherSummary, WeatherUnits } from '@/views/air/types/airTypes';
import { WordDefinition } from '@/views/search/lexicon/types/lexiconTypes';
import { ArcResultPackage } from '@/views/search/arcadia/types/arcadiaTypes';

export type AirEndpointsType = {
  weather: string,
  weatherReport: string,
  weatherHistory: string,
}

export type WeatherBasics = {
  weatherLocation: string
}

export type LiveWeatherReport = {
  weatherLocation: string,
  weatherUnits: WeatherUnits,
  currentWeather: WeatherSummary,
  previousWeather: WeatherSummary,
  weatherForecast: WeatherSummary[]
}

export type WeatherHistory = {
  weatherLocation: string,
  weatherUnits: WeatherUnits,
  weatherHistory: WeatherSummary[]
}

export type LexiconEndpointsType = {
  summary: string,
  wordOfDay: string,
  latestWords: string,
  globalWordSearch: string,
  cachedWordSearch: string
}

export enum LexiconSearchType {
  GLOBAL = 'GLOBAL',
  CACHE = 'CACHE'
}

export type ArcadiaEndpointsType = {
  summary: string,
  randomTags: string,
  tagsIndex: string,
  tags: string,
  wordSearch: string,
  removeItem: string,
  editItem: string,
  addItem: string
}

export type ArcadiaTagsIndex = {
  [key: string]: string[]
}

export type ArcadiaTags = {
  numberOfSubjects: number,
  subjects: string[],
}

export type ArcadiaSummaryApiResult = {
  numberOfSubjects: number,
  numberOfUrlRecords: number,
  randomSubjectSample: string[],
  subjects: string[],
  randomItemSample: ArcResultPackage
}

export type ArcadiaTagsApiResult = {
  subjectIndex: ArcadiaTagsIndex
}

export type LexiconSummaryApiResult = {
  numberOfWords: number,
  wordOfDay: WordDefinition
}

export type LatestWordListApiResult = {
  lexiconWords: string[]
}

export type DebugEndpointsType = {
  wh00tMessages: string
}

export type DebugMessage = {
  id: string,
  username: string,
  profile: string,
  time: string,
  category: string,
  message: string,
}

export type DebugApiResponse = {
  message: DebugMessage[]
}
