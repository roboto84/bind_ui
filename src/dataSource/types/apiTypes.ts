import { WeatherSummary } from '@/views/air/types/airTypes';

export type AirEndpointsType = {
  weatherReport: string,
  weatherHistory: string,
}

export type LexiconEndpointsType = {
  wordOfDay: string,
  latestWords: string,
  wordSearch: string
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

export type LiveWeatherReport = {
  currentWeather: WeatherSummary,
  weatherForecast: WeatherSummary[]
}

export type WeatherHistory = {
  weatherHistory: WeatherSummary[]
}

export type LatestWordListApiResult = {
  lexiconWords: string[]
}
