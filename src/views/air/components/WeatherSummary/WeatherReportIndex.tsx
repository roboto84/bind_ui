import React from 'react';
import { FullWeatherReport } from '@/views/air/components/WeatherSummary/FullWeatherReport';
import camelcaseKeys from 'camelcase-keys';
import { useQuery } from 'react-query';
import { Loader } from '@/components/Loader';
import { LiveWeatherReport } from '@/dataSource/types/apiTypes';
import { airApiEndpoints } from '@/dataSource/restApis/robotoRestApi';
import { ErrorView } from '@/components/ErrorView';

export function WeatherReportIndex() {
  const { isLoading, isError, data, error } = useQuery<LiveWeatherReport,
    Error>(airApiEndpoints.weatherReport);

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
    <FullWeatherReport report={camelcaseKeys<LiveWeatherReport>(data)} />
  );
}
