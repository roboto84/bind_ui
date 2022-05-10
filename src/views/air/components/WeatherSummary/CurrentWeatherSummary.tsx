import React from 'react';
import { MoonIcon, MoonPhaseEnum } from '@/components/Images/MoonIcon';
import { WeatherConditionEnum, WeatherConditionIcon } from '@/components/Images/WeatherConditionIcon';
import { removeSpaces } from '@/utils/formatting';
import { pollenMaxConcern, pollenSeverityView, precipitationTypeView } from '../../utils';
import { CurrentWeatherProps } from '../../types/airTypes';
import {
  Weather,
  WeatherTitle,
  CurrentTemperature,
  MoonPhase,
  WeatherBlurb,
  WeatherElement,
  WeatherIconContainer,
  WeatherSubcategory,
  MoonPhaseSummaryContainer,
} from '../../styles/airHomeStyles';

export function CurrentWeatherSummary(props: CurrentWeatherProps) {
  const { currentWeatherReport, weatherUnits } = props;
  const { temperature, temperatureApparent, precipitationType, weatherCode,
    precipitationProbability, humidity, dewPoint, epaIndex, epaHealthConcern,
    pressureSurfaceLevel, treeIndex, grassIndex, weedIndex } = currentWeatherReport;
  const pollenMax: number = pollenMaxConcern(treeIndex, grassIndex, weedIndex);
  const pollenSeveritySummary: string = pollenSeverityView(pollenMax);
  const moonPhase: MoonPhaseEnum = removeSpaces(currentWeatherReport.moonPhase) as MoonPhaseEnum;
  const weatherState: WeatherConditionEnum = removeSpaces(
    weatherCode,
  ) as WeatherConditionEnum;
  return (
    <Weather>
      <WeatherSubcategory>
        <CurrentTemperature>{temperature} {weatherUnits.temperature}</CurrentTemperature>
        <WeatherIconContainer>
          <WeatherConditionIcon weatherCondition={weatherState} fontSize="135px" />
        </WeatherIconContainer>
        <WeatherBlurb>
          {weatherCode}...
          feels like {temperatureApparent} {weatherUnits.temperatureApparent}
        </WeatherBlurb>
      </WeatherSubcategory>
      <WeatherSubcategory>
        <WeatherTitle>moon</WeatherTitle>
        <MoonPhase>
          <div><MoonIcon moonPhase={moonPhase} fontSize="85px" /></div>
          <MoonPhaseSummaryContainer>
            {moonPhase} Moon
          </MoonPhaseSummaryContainer>
        </MoonPhase>
      </WeatherSubcategory>
      <WeatherSubcategory>
        <WeatherTitle>water</WeatherTitle>
        <div>
          <WeatherElement>
            {`${precipitationProbability} ${weatherUnits.precipitationProbability} Chance of ${precipitationTypeView(precipitationType)}`}
          </WeatherElement>
          <WeatherElement>{humidity} {weatherUnits.humidity} Humidity</WeatherElement>
          <WeatherElement>{dewPoint} {weatherUnits.dewPoint} Dew Point</WeatherElement>
        </div>
      </WeatherSubcategory>
      <WeatherSubcategory>
        <WeatherTitle>air</WeatherTitle>
        <div>
          <WeatherElement>
            {epaHealthConcern} Air Quality ({epaIndex} {weatherUnits.epaIndex})
          </WeatherElement>
          <WeatherElement>
            {pressureSurfaceLevel} {weatherUnits.pressureSurfaceLevel} Pressure
          </WeatherElement>
          <WeatherElement>Pollen is {pollenSeveritySummary} (Severity {pollenMax})</WeatherElement>
        </div>
      </WeatherSubcategory>
    </Weather>
  );
}
