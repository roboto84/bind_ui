import React from 'react';
import { CurrentWeatherReport } from '@/views/air/components/WeatherSummary/CurrentWeatherReport';
import camelcaseKeys from 'camelcase-keys';
import { useQuery } from 'react-query';
import { Loader } from '@/components/Loader';
import { LiveWeatherReport } from '@/dataSource/types/apiTypes';
import { airApiEndpoints } from '@/dataSource/restApis/robotoRestApi';
import { ErrorView } from '@/components/ErrorView';
import { AirSubNavigation } from '@/views/air/components/AirSubNavigation/AirSubNavigation';
import { AirHomeContainer } from './styles/airHomeStyles';

export function Air() {
  const { isLoading, isError, data, error } = useQuery<LiveWeatherReport,
    Error>(airApiEndpoints.weatherReport);

  if (isLoading) {
    return (
      <AirHomeContainer>
        <Loader />
      </AirHomeContainer>
    );
  }
  if (isError) {
    return (
      <AirHomeContainer>
        <ErrorView title="Data Error">
          <div>Is it for latest words? {isError}</div>
          <div>What is the error?</div>
          <div>{error}</div>
        </ErrorView>
      </AirHomeContainer>
    );
  }

  const airCurrentWeatherReport: LiveWeatherReport = camelcaseKeys<LiveWeatherReport>(data);
  return (
    <AirHomeContainer>
      <AirSubNavigation />
      <CurrentWeatherReport report={airCurrentWeatherReport} />
    </AirHomeContainer>
  );
}
