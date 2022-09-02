import React from 'react';
import { ForecastSubTile } from '@/views/air/components/WeatherSummary/ForecastSubTile';
import { CurrentWeatherSummary } from '@/views/air/components/WeatherSummary/CurrentWeatherSummary';
import { CurrentWeatherReportProps, WeatherSummary } from '../../types/airTypes';
import { Weather } from '../../styles/airHomeStyles';

export function FullWeatherReport(props: CurrentWeatherReportProps) {
  const { report } = props;
  report.currentWeather.moonPhase = report.weatherForecast[1].moonPhase;
  return (
    <>
      <CurrentWeatherSummary
        currentWeatherReport={report.currentWeather}
        previousWeatherReport={report.previousWeather}
        weatherUnits={report.weatherUnits}
      />
      <Weather>
        {
          report.weatherForecast.map(
            (forecast:WeatherSummary) => (
              <ForecastSubTile
                key={'forecastTile'.concat(String(forecast.date))}
                forecast={forecast}
                forecastUnits={report.weatherUnits}
              />
            ),
          )
        }
      </Weather>
    </>
  );
}
