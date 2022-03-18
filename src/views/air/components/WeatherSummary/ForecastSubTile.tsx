import React from 'react';
import { dayOfWeekAbbreviation, simpleDateTimeFormat, removeSpaces, padTime } from '@/utils/formatting';
import { WeatherConditionEnum, WeatherConditionIcon } from '@/components/WeatherConditionIcon';
import { ForecastSubTileProps } from '../../types/airTypes';
import {
  WeatherTitle,
  WeatherForecastTemperature,
  WeatherForecastTemperatureApparent,
  WeatherForecastElement,
  WeatherIconSubTileContainer,
  WeatherSubcategory,
} from '../../styles/airHomeStyles';

export function ForecastSubTile(props: ForecastSubTileProps) {
  const { forecast } = props;
  const forecastDate: string = simpleDateTimeFormat(forecast.date);
  const dayOfMonth: string = forecastDate.split('/')[1];
  const currentDayOfMonth: string = padTime(new Date().getDate());
  const isHighLighted: boolean = dayOfMonth === currentDayOfMonth;
  const dayOfWeek: string = dayOfWeekAbbreviation(forecast.date);
  const weatherState: WeatherConditionEnum = removeSpaces(
    forecast.weatherCode,
  ) as WeatherConditionEnum;
  return (
    <WeatherSubcategory isHighLight={isHighLighted}>
      <WeatherTitle>{`${dayOfWeek} | ${forecastDate}`}</WeatherTitle>
      <WeatherForecastTemperature>
        {forecast.temperature}
      </WeatherForecastTemperature>
      <WeatherIconSubTileContainer>
        <WeatherConditionIcon weatherCondition={weatherState} fontSize="90px" />
      </WeatherIconSubTileContainer>
      <WeatherForecastTemperatureApparent>
        {forecast.weatherCode}... will
        feel like {forecast.temperatureApparent}
      </WeatherForecastTemperatureApparent>
      <WeatherForecastElement>
        {forecast.precipitationProbability} chance of {forecast.precipitationType === 'N/A' ? 'Rain' : forecast.precipitationType}
      </WeatherForecastElement>
      <WeatherForecastElement>
        {forecast.humidity} Humidity
      </WeatherForecastElement>
      <WeatherForecastElement>
        {forecast.pressureSurfaceLevel} Pressure
      </WeatherForecastElement>
      <WeatherForecastElement>
        {forecast.epaHealthConcern} Air Quality ({forecast.epaIndex})
      </WeatherForecastElement>
      <WeatherForecastElement>
        Pollen {forecast.treeIndex}
      </WeatherForecastElement>
      <WeatherForecastElement>
        {forecast.moonPhase} Moon
      </WeatherForecastElement>
    </WeatherSubcategory>
  );
}
