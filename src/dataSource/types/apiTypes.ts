import { WeatherSummary, WeatherUnits } from '@/views/air/types/airTypes';

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
  wordOfDay: string,
  latestWords: string,
  wordSearch: string
}

export type ArcadiaEndpointsType = {
  tags: string,
  wordSearch: string,
  removeItem: string,
  editItem: string
}

export type ArcadiaTagsApiResult = {
  arcadiaSubjects: object
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
