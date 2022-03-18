import React from 'react';
import { CurrentWeatherReport } from '@/views/air/components/WeatherSummary/CurrentWeatherReport';
import camelcaseKeys from 'camelcase-keys';
import { useQuery } from 'react-query';
import { Loader } from '@/components/Loader';
import { LiveWeatherReport } from '@/dataSource/types/apiTypes';
import { airApiEndpoints } from '@/dataSource/restApis/robotoRestApi';
import { ErrorView } from '@/components/ErrorView';
import NavigationLink from '@/views/components/Header/NavigationLink';
import { AirHomeContainer, SubNavigation, SubNavLinkContainer } from './styles/airHomeStyles';

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
      <SubNavigation>
        <SubNavLinkContainer style={{ marginRight: '50px' }}>
          <NavigationLink linkTo="/air/temperature">Charts</NavigationLink>
          <NavigationLink linkTo="/air/weather">Tables</NavigationLink>
        </SubNavLinkContainer>
      </SubNavigation>
      <CurrentWeatherReport report={airCurrentWeatherReport} />
    </AirHomeContainer>
  );
}
