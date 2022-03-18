import React from 'react';
import { MoonIcon, MoonPhaseEnum } from '@/components/MoonIcon';
import { WeatherConditionEnum, WeatherConditionIcon } from '@/components/WeatherConditionIcon';
import { removeSpaces } from '@/utils/formatting';
import { CurrentWeatherProps } from '../../types/airTypes';
import {
  Weather,
  WeatherTitle,
  CurrentTemperature,
  MoonPhase,
  WeatherBlurb,
  WeatherElement,
  WeatherIconContainer,
  WeatherSubcategory, MoonPhaseSummaryContainer,
} from '../../styles/airHomeStyles';

export function CurrentWeather(props: CurrentWeatherProps) {
  const { currentWeatherReport } = props;
  const moonPhase: MoonPhaseEnum = removeSpaces(currentWeatherReport.moonPhase) as MoonPhaseEnum;
  const weatherState: WeatherConditionEnum = removeSpaces(
    currentWeatherReport.weatherCode,
  ) as WeatherConditionEnum;
  return (
    <Weather>
      <WeatherSubcategory>
        <CurrentTemperature>{currentWeatherReport.temperature}</CurrentTemperature>
        <WeatherIconContainer>
          <WeatherConditionIcon weatherCondition={weatherState} fontSize="135px" />
        </WeatherIconContainer>
        <WeatherBlurb>
          {currentWeatherReport.weatherCode}...
          feels like {currentWeatherReport.temperatureApparent}
        </WeatherBlurb>
      </WeatherSubcategory>
      <WeatherSubcategory>
        <WeatherTitle>moon</WeatherTitle>
        <MoonPhase>
          <div><MoonIcon moonPhase={moonPhase} fontSize="85px" /></div>
          <MoonPhaseSummaryContainer>
            {currentWeatherReport.moonPhase} Moon
          </MoonPhaseSummaryContainer>
        </MoonPhase>
      </WeatherSubcategory>
      <WeatherSubcategory>
        <WeatherTitle>water</WeatherTitle>
        <WeatherElement>
          {`${currentWeatherReport.precipitationProbability} Chance of ${currentWeatherReport.precipitationType}`}
        </WeatherElement>
        <WeatherElement>{currentWeatherReport.humidity} Humidity</WeatherElement>
        <WeatherElement>{currentWeatherReport.dewPoint} Dew Point</WeatherElement>
      </WeatherSubcategory>
      <WeatherSubcategory>
        <WeatherTitle>air</WeatherTitle>
        <WeatherElement>
          {currentWeatherReport.epaHealthConcern} Air Quality ({currentWeatherReport.epaIndex})
        </WeatherElement>
        <WeatherElement>{currentWeatherReport.pressureSurfaceLevel} Pressure</WeatherElement>
        <WeatherElement>Pollen {currentWeatherReport.treeIndex}</WeatherElement>
      </WeatherSubcategory>
    </Weather>
  );
}
