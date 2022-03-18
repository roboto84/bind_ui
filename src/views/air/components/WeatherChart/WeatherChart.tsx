import React from 'react';
import { useQuery } from 'react-query';
import { WeatherHistory } from '@/dataSource/types/apiTypes';
import { airApiEndpoints } from '@/dataSource/restApis/robotoRestApi';
import { Loader } from '@/components/Loader';
import { ErrorView } from '@/components/ErrorView';
import camelcaseKeys from 'camelcase-keys';
import NavigationLink from '@/views/components/Header/NavigationLink';
import { LineChart, ChartObject } from '@/components/LineChart';
import {
  AirHomeContainer,
  ChartSubNavigation,
  SubNavLinkContainer,
  WeatherTablesStyle,
} from '../../styles/airHomeStyles';
import { WeatherChartProps, WeatherChartType, WeatherSummary } from '../../types/airTypes';

export function WeatherChart(props: WeatherChartProps) {
  const { chartKey } = props;
  const { isLoading, isError, data, error } = useQuery<WeatherHistory,
    Error>(airApiEndpoints.weatherHistory);

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
          <div>What is the error?</div>
          <div>{error}</div>
        </ErrorView>
      </AirHomeContainer>
    );
  }

  const airWeatherData: WeatherHistory = camelcaseKeys<WeatherHistory>(data);
  const weatherRecords: WeatherSummary[] = airWeatherData.weatherHistory;
  const weatherSection: ChartObject = {
    chartData: [],
  };
  weatherRecords.forEach((weatherRecord:WeatherSummary, index:number) => {
    if (index % 2 === 0) {
      weatherSection.chartData.push({
        x: weatherRecord.date,
        y: Number(String(weatherRecord[chartKey]).split(' ')[0]),
      });
    }
  });
  const chartXAxisLabel: string = 'time';
  const chartYAxisLabel: string = String(weatherRecords[0][chartKey]).split(' ')[1];
  const yDomain: [number, number] = chartKey === WeatherChartType.pressureSurfaceLevel
    ? [29.70, 30.25] : null;

  return (
    <WeatherTablesStyle>
      <ChartSubNavigation>
        <SubNavLinkContainer style={{ marginBottom: '10px' }}>
          <NavigationLink linkTo="/air/temperature">Temperature</NavigationLink>
          <NavigationLink linkTo="/air/humidity">Humidity</NavigationLink>
          <NavigationLink linkTo="/air/precipitation">Precipitation</NavigationLink>
          <NavigationLink linkTo="/air/pressure">Pressure</NavigationLink>
          <NavigationLink linkTo="/air/epa_index">EPA Index</NavigationLink>
          <NavigationLink linkTo="/air/particulate_matter_10">PM10</NavigationLink>
          <NavigationLink linkTo="/air/particulate_matter_25">PM25</NavigationLink>
          <NavigationLink linkTo="/air/pollutant_co">CO</NavigationLink>
          <NavigationLink linkTo="/air/pollutant_no2">NO2</NavigationLink>
          <NavigationLink linkTo="/air/pollutant_o3">O3</NavigationLink>
          <NavigationLink linkTo="/air/pollutant_so2">SO2</NavigationLink>
          <NavigationLink linkTo="/air/pollen_grass">Grass</NavigationLink>
          <NavigationLink linkTo="/air/pollen_tree">Trees</NavigationLink>
          <NavigationLink linkTo="/air/pollen_weed">Weeds</NavigationLink>
        </SubNavLinkContainer>
      </ChartSubNavigation>
      <LineChart
        xAxisLabel={chartXAxisLabel}
        yAxisLabel={chartYAxisLabel}
        chartObject={weatherSection}
        yDomainRange={yDomain}
      />
    </WeatherTablesStyle>
  );
}
