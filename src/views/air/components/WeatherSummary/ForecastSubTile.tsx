import React from 'react';
import { dayOfWeekAbbreviation, simpleDateTimeFormat, removeSpaces, padTime } from '@/utils/formatting';
import { WeatherConditionEnum, WeatherConditionIcon } from '@/components/Images/WeatherConditionIcon';
import { pollenMaxConcern, pollenSeverityView, precipitationTypeView } from '@/views/air/utils';
import { ForecastSubTileProps, PollenSeverity } from '../../types/airTypes';
import {
  WeatherTitle,
  WeatherForecastTemperature,
  WeatherForecastTemperatureApparent,
  WeatherForecastElement,
  WeatherIconSubTileContainer,
  WeatherSubcategory,
} from '../../styles/airHomeStyles';

export function ForecastSubTile(props: ForecastSubTileProps) {
  const { forecast, forecastUnits } = props;
  const { date, weatherCode, temperature, precipitationProbability, treeIndex, grassIndex,
    weedIndex, humidity, epaHealthConcern, epaIndex, moonPhase, pressureSurfaceLevel,
    temperatureApparent, precipitationType } = forecast;
  const pollenMax: PollenSeverity = pollenMaxConcern(treeIndex, grassIndex, weedIndex);
  const pollenSeveritySummary: string = pollenSeverityView(pollenMax.severity);
  const forecastDate: string = simpleDateTimeFormat(date);
  const dayOfMonth: string = forecastDate.split('/')[1];
  const currentDayOfMonth: string = padTime(new Date().getDate());
  const isHighLighted: boolean = dayOfMonth === currentDayOfMonth;
  const dayOfWeek: string = dayOfWeekAbbreviation(date);
  const weatherState: WeatherConditionEnum = removeSpaces(
    weatherCode,
  ) as WeatherConditionEnum;
  return (
    <WeatherSubcategory isHighLight={isHighLighted}>
      <WeatherTitle>{`${dayOfWeek} | ${forecastDate}`}</WeatherTitle>
      <WeatherForecastTemperature>
        {temperature} {forecastUnits.temperature}
      </WeatherForecastTemperature>
      <WeatherIconSubTileContainer>
        <WeatherConditionIcon weatherCondition={weatherState} fontSize="90px" />
      </WeatherIconSubTileContainer>
      <WeatherForecastTemperatureApparent>
        {weatherCode}... will
        feel like {temperatureApparent} {forecastUnits.temperatureApparent}
      </WeatherForecastTemperatureApparent>
      <WeatherForecastElement>
        {`${precipitationProbability} ${forecastUnits.precipitationProbability} chance of ${precipitationTypeView(precipitationType)}`}
      </WeatherForecastElement>
      <WeatherForecastElement>
        {humidity} {forecastUnits.humidity} Humidity
      </WeatherForecastElement>
      <WeatherForecastElement>
        {pressureSurfaceLevel} {forecastUnits.pressureSurfaceLevel} Pressure
      </WeatherForecastElement>
      <WeatherForecastElement>
        {epaHealthConcern} Air Quality ({epaIndex} {forecastUnits.epaIndex})
      </WeatherForecastElement>
      <WeatherForecastElement>
        {pollenMax.pollenType.toUpperCase()} pollen will be {pollenSeveritySummary}
      </WeatherForecastElement>
      <WeatherForecastElement>
        {moonPhase} Moon
      </WeatherForecastElement>
    </WeatherSubcategory>
  );
}
