import { LiveWeatherReport } from '@/dataSource/types/apiTypes';
import { GlobalThemeType } from '@/types';
import { ChartObject, LineChartProps } from '@/components/LineChart';

export type AirStandardTimeView = {
  date: string,
  hour: string,
  seconds: string,
}

export type WeatherSummary = {
  date: string,
  temperature: string,
  temperatureApparent: string,
  moonPhase: string,
  humidity: string,
  dewPoint: string,
  weatherCode: string,
  precipitationProbability: string,
  precipitationType: string,
  pressureSurfaceLevel: string,
  epaIndex: string,
  epaHealthConcern: string,
  epaPrimaryPollutant: string,
  particulateMatter10: string,
  particulateMatter25: string,
  pollutantCO: string,
  pollutantNO2: string,
  pollutantO3: string,
  pollutantSO2: string,
  grassIndex: number,
  treeIndex: number,
  weedIndex: number
}

export type CurrentWeatherReportProps = {
  report: LiveWeatherReport
}

export type CurrentWeatherProps = {
  currentWeatherReport: WeatherSummary,
}

export type ForecastSubTileProps = {
  forecast: WeatherSummary
}

export type SubWeatherSummary = {
  date: string,
  temperature: string,
  temperatureApparent: string,
  humidity: string,
  dewPoint: string,
  weatherCode: string,
  precipitationProbability: string,
  precipitationType: string,
  pressureSurfaceLevel: string,
}

export type WeatherPollutionSummary = {
  date: string,
  epaIndex: string,
  epaHealthConcern: string,
  epaPrimaryPollutant: string,
  particulateMatter10: string,
  particulateMatter25: string,
  pollutantCO: string,
  pollutantNO2: string,
  pollutantO3: string,
  pollutantSO2: string,
}

export type WeatherPollenSummary = {
  date: string,
  grassIndex: number,
  treeIndex: number,
  weedIndex: number
}

export enum WeatherTableType {
  weather = 'weather',
  pollution = 'pollution',
  pollen = 'pollen'
}

export enum WeatherChartType {
  temperature = 'temperature',
  humidity = 'humidity',
  precipitationProbability = 'precipitationProbability',
  pressureSurfaceLevel = 'pressureSurfaceLevel',
  epaIndex = 'epaIndex',
  particulateMatter10 = 'particulateMatter10',
  particulateMatter25 = 'particulateMatter25',
  pollutantCO = 'pollutantCO',
  pollutantNO2 = 'pollutantNO2',
  pollutantO3 = 'pollutantO3',
  pollutantSO2 = 'pollutantSO2',
  grassIndex = 'grassIndex',
  treeIndex = 'treeIndex',
  weedIndex = 'weedIndex'
}

export type WeatherTablesProps = {
  tableType: WeatherTableType
}

export interface WeatherSubcategoryProps extends GlobalThemeType{
  isHighLight?: boolean
}

export type WeatherTableObject<Type> = {
  title: string,
  weatherData: Type[]
}

export interface WeatherChartProps {
  chartKey: WeatherChartType
}
