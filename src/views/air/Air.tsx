import React from 'react';
import { AirHomeContainer, AirSubTitleContainer } from '@/views/air/styles/airHomeStyles';
import { AirSubNavigation } from '@/views/air/components/AirSubNavigation/AirSubNavigation';
import { WeatherReportIndex } from '@/views/air/components/WeatherSummary/WeatherReportIndex';
import { WeatherTables } from '@/views/air/components/WeatherTables/WeatherTables';
import { WeatherCharts } from '@/views/air/components/WeatherChart/WeatherCharts';
import { RoutesGenerator } from '@/components/Nav/RoutesGenerator';
import { RouterItemConfig } from '@/types';
import { AirLocation } from '@/views/air/components/AirLocation/AirLocation';
import { useQuery } from 'react-query';
import { LiveWeatherReport, WeatherBasics } from '@/dataSource/types/apiTypes';
import { airApiEndpoints } from '@/dataSource/restApis/robotoRestApi';
import { Loader } from '@/components/Misc/Loader';
import { ErrorView } from '@/components/Error/ErrorView';
import camelcaseKeys from 'camelcase-keys';

export function Air() {
  const { isLoading, isError, data, error } = useQuery<WeatherBasics,
    Error>(airApiEndpoints.weather);
  const routerConfig: RouterItemConfig[] = [
    { index: true, element: <WeatherReportIndex /> },
    { path: 'tables/*', element: <WeatherTables /> },
    { path: 'charts/*', element: <WeatherCharts /> },
  ];

  if (isLoading) {
    return (
      <Loader />
    );
  }
  if (isError) {
    return (
      <ErrorView title="Data Error">
        <div>Is it for latest words? {isError}</div>
        <div>What is the error?</div>
        <div>{error}</div>
      </ErrorView>
    );
  }

  return (
    <AirHomeContainer>
      <AirSubTitleContainer>
        <AirLocation contents={camelcaseKeys<WeatherBasics>(data).weatherLocation} />
        <AirSubNavigation />
      </AirSubTitleContainer>
      <RoutesGenerator routerRoutesConfig={routerConfig} />
    </AirHomeContainer>
  );
}
