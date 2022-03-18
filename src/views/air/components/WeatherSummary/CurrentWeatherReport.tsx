import React from 'react';
import { ForecastSubTile } from '@/views/air/components/WeatherSummary/ForecastSubTile';
import { CurrentWeather } from '@/views/air/components/WeatherSummary/CurrentWeather';
import { CurrentWeatherReportProps, WeatherSummary } from '../../types/airTypes';
import { Weather } from '../../styles/airHomeStyles';

export function CurrentWeatherReport(props: CurrentWeatherReportProps) {
  const { report } = props;
  report.currentWeather.moonPhase = report.weatherForecast[1].moonPhase;
  return (
    <>
      <CurrentWeather currentWeatherReport={report.currentWeather} />
      <Weather>
        {
        report.weatherForecast.map(
          (forecast:WeatherSummary, index:number) => (
            <ForecastSubTile key={'forecastTile'.concat(String(index))} forecast={forecast} />
          ),
        )
      }
      </Weather>
    </>
  );
}
