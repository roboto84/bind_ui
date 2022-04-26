import React from 'react';
import { MoonIcon, MoonPhaseEnum } from '@/components/MoonIcon';
import { WeatherConditionEnum, WeatherConditionIcon } from '@/components/WeatherConditionIcon';
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
  const { currentWeatherReport } = props;
  const { temperature, temperatureApparent, precipitationType, weatherCode,
    precipitationProbability, humidity, dewPoint, epaIndex, epaHealthConcern,
    pressureSurfaceLevel, treeIndex, grassIndex, weedIndex } = currentWeatherReport;
  const pollenMax: number = pollenMaxConcern(
    Number(treeIndex.split(' ')[0]),
    Number(grassIndex.split(' ')[0]),
    Number(weedIndex.split(' ')[0]),
  );
  const pollenSeveritySummary: string = pollenSeverityView(pollenMax);
  const moonPhase: MoonPhaseEnum = removeSpaces(currentWeatherReport.moonPhase) as MoonPhaseEnum;
  const weatherState: WeatherConditionEnum = removeSpaces(
    weatherCode,
  ) as WeatherConditionEnum;
  return (
    <Weather>
      <WeatherSubcategory>
        <CurrentTemperature>{temperature}</CurrentTemperature>
        <WeatherIconContainer>
          <WeatherConditionIcon weatherCondition={weatherState} fontSize="135px" />
        </WeatherIconContainer>
        <WeatherBlurb>
          {weatherCode}...
          feels like {temperatureApparent}
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
        <WeatherElement>
          {`${precipitationProbability} Chance of ${precipitationTypeView(precipitationType)}`}
        </WeatherElement>
        <WeatherElement>{humidity} Humidity</WeatherElement>
        <WeatherElement>{dewPoint} Dew Point</WeatherElement>
      </WeatherSubcategory>
      <WeatherSubcategory>
        <WeatherTitle>air</WeatherTitle>
        <WeatherElement>
          {epaHealthConcern} Air Quality ({epaIndex})
        </WeatherElement>
        <WeatherElement>{pressureSurfaceLevel} Pressure</WeatherElement>
        <WeatherElement>Pollen is {pollenSeveritySummary} (Severity {pollenMax})</WeatherElement>
      </WeatherSubcategory>
    </Weather>
  );
}
