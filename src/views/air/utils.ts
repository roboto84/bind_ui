import {
  BaseObject,
  PollenSeverity,
  PollenType,
  WeatherAlertSummary,
  WeatherTitles,
} from '@/views/air/types/airTypes';

export function precipitationTypeView(precipitationType: string): string {
  return precipitationType !== 'N/A' ? precipitationType : 'Rain';
}

export function pollenSeverityView(pollenSeverityNumber:number):string {
  const pollenSeverityLegend: BaseObject = {
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
  return pollenSeverityLegend[pollenSeverityNumber] as string;
}

export function pollenMaxConcern(
  treePollen:number,
  grassPollen:number,
  weedPollen:number,
): PollenSeverity {
  return [
    { pollenType: PollenType.tree, severity: treePollen },
    { pollenType: PollenType.weed, severity: weedPollen },
    { pollenType: PollenType.grass, severity: grassPollen },
  ].sort((a, b) => b.severity - a.severity)[0];
}

export function pressureConcern(current:number, previous:number): WeatherAlertSummary {
  const alertDelta: number = 0.01;
  let variable: string = 'pressure';
  variable = variable.charAt(0).toUpperCase().concat(variable.slice(1));
  const sentencePartition: string = 'by at least';
  let calculatedMessage: string = '';
  let calculatedReason: string = '';
  if (current - previous >= alertDelta) {
    calculatedMessage = 'GAIN';
    calculatedReason = `${variable} increased ${sentencePartition} ${alertDelta}`;
  } else if (previous - current >= alertDelta) {
    calculatedMessage = 'DROP';
    calculatedReason = `${variable} decreased ${sentencePartition} ${alertDelta}`;
  }
  return {
    message: calculatedMessage,
    reason: calculatedReason,
  };
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
    pressureSurfaceLevel: 'Pressure',
    epaIndex: 'EPA Index',
    epaHealthConcern: 'EPA Health Concern',
    epaPrimaryPollutant: 'Primary Pollutant',
    particulateMatter10: 'PM10',
    particulateMatter25: 'PM2.5',
    pollutantCO: 'CO',
    pollutantNO2: 'NO₂',
    pollutantO3: 'O₃',
    pollutantSO2: 'SO₂',
    grassIndex: 'Grass Index',
    treeIndex: 'Tree Index',
    weedIndex: 'Weed Index',
  };
  return tableTitleLegend[weatherTableTitle] as string;
}
