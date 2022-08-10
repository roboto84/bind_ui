import { LiveWeatherReport } from '@/dataSource/types/apiTypes';
import { GlobalThemeType } from '@/types';

export type StandardTime = {
  year: string,
  month: string,
  date: string,
  hour: string,
  minute: string,
  seconds: string
}

export type PollenSeverity = {
  pollenType: PollenType,
  severity: number
}

export type WeatherSummary = {
  date: string,
  temperature: number,
  temperatureApparent: number,
  moonPhase: string,
  humidity: number,
  dewPoint: number,
  weatherCode: string,
  precipitationProbability: number,
  precipitationType: string,
  pressureSurfaceLevel: number,
  epaIndex: number,
  epaHealthConcern: string,
  epaPrimaryPollutant: string,
  particulateMatter10: number,
  particulateMatter25: number,
  pollutantCO: number,
  pollutantNO2: number,
  pollutantO3: number,
  pollutantSO2: number,
  grassIndex: number,
  treeIndex: number,
  weedIndex: number
}

export type BaseObject = { [key: string]: string|number }

export interface WeatherUnits extends BaseObject {
  temperature: string,
  temperatureApparent: string,
  humidity: string,
  dewPoint: string,
  precipitationProbability: string,
  pressureSurfaceLevel: string,
  epaIndex: string,
  particulateMatter10: string,
  particulateMatter25: string,
  pollutantCO: string,
  pollutantNO2: string,
  pollutantO3: string,
  pollutantSO2: string,
  grassIndex: string,
  treeIndex: string,
  weedIndex: string
}

export interface WeatherTitles extends WeatherUnits {
  date: string,
  weatherCode: string,
  precipitationType: string,
  epaHealthConcern: string,
  epaPrimaryPollutant: string
}

export type CurrentWeatherReportProps = {
  report: LiveWeatherReport
}

export type CurrentWeatherProps = {
  currentWeatherReport: WeatherSummary,
  weatherUnits: WeatherUnits
}

export type ForecastSubTileProps = {
  forecast: WeatherSummary,
  forecastUnits: WeatherUnits
}

export interface SubWeatherSummary extends BaseObject {
  date: string,
  temperature: number,
  temperatureApparent: number,
  humidity: number,
  dewPoint: number,
  weatherCode: string,
  precipitationProbability: number,
  precipitationType: string,
  pressureSurfaceLevel: number
}

export interface WeatherPollutionSummary extends BaseObject {
  date: string,
  epaIndex: number,
  epaHealthConcern: string,
  epaPrimaryPollutant: string,
  particulateMatter10: number,
  particulateMatter25: number,
  pollutantCO: number,
  pollutantNO2: number,
  pollutantO3: number,
  pollutantSO2: number
}

export interface WeatherPollenSummary extends BaseObject {
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

export enum PollenType {
  weed = 'weed',
  grass = 'grass',
  tree = 'tree'
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

export interface SubNavigationProps extends GlobalThemeType{
  margin ?: string,
  justifyContent: string
}
