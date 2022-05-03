import { WeatherTitles } from '@/views/air/types/airTypes';

export function precipitationTypeView(precipitationType: string): string {
  return precipitationType !== 'N/A' ? precipitationType : 'Rain';
}

export function pollenSeverityView(pollenSeverityNumber:number):string {
  const pollenSeverityLegend: { [key: number]: string } = {
    0: 'None',
    0.5: 'Extremely Low',
    1: 'Very Low',
    1.5: 'Very Low',
    2: 'Low',
    2.5: 'Low',
    3: 'Medium',
    3.5: 'Medium',
    4: 'High',
    4.5: 'Very High',
    5: 'Extremely High',
  };
  return pollenSeverityLegend[pollenSeverityNumber];
}

export function pollenMaxConcern(treePollen:number, grassPollen:number, weedPollen:number) {
  return Math.max(treePollen, grassPollen, weedPollen);
}

export function getWeatherTableTitle(weatherTableTitle:string):string {
  const tableTitleLegend: WeatherTitles = {
    date: 'Date',
    temperature: 'Temperature',
    temperatureApparent: 'Apparent Temp',
    humidity: 'Humidity',
    dewPoint: 'Dew Point',
    weatherCode: 'Weather',
    precipitationProbability: 'Precipitation Probability',
    precipitationType: 'Precipitation Type',
    pressureSurfaceLevel: 'Pressure Surface Level',
    epaIndex: 'EPA Index',
    epaHealthConcern: 'EPA Health Concern',
    epaPrimaryPollutant: 'Primary Pollutant',
    particulateMatter10: 'PM10',
    particulateMatter25: 'PM2.5',
    pollutantCO: 'CO',
    pollutantNO2: 'NO2',
    pollutantO3: 'O3',
    pollutantSO2: 'SO2',
    grassIndex: 'Grass Index',
    treeIndex: 'Tree Index',
    weedIndex: 'Weed Index',
  };
  return tableTitleLegend[weatherTableTitle];
}
