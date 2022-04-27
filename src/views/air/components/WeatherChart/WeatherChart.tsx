import React from 'react';
import { useQuery } from 'react-query';
import { WeatherHistory } from '@/dataSource/types/apiTypes';
import { airApiEndpoints } from '@/dataSource/restApis/robotoRestApi';
import { Loader } from '@/components/Loader';
import { ErrorView } from '@/components/ErrorView';
import camelcaseKeys from 'camelcase-keys';
import { LineChart, ChartObject } from '@/components/LineChart';
import { WeatherChartSummary } from '@/views/air/components/WeatherChart/WeatherChartSummary';
import { WeatherChartSection, WeatherSubContainer } from '../../styles/airHomeStyles';
import { WeatherChartProps, WeatherChartType, WeatherSummary } from '../../types/airTypes';

export function WeatherChart(props: WeatherChartProps) {
  const { chartKey } = props;
  const { isLoading, isError, data, error } = useQuery<WeatherHistory,
    Error>(airApiEndpoints.weatherHistory);

  if (isLoading) {
    return (
      <Loader />
    );
  }
  if (isError) {
    return (
      <ErrorView title="Data Error">
        <div>What is the error?</div>
        <div>{error}</div>
      </ErrorView>
    );
  }

  const airWeatherData: WeatherHistory = camelcaseKeys<WeatherHistory>(data);
  const weatherRecords: WeatherSummary[] = airWeatherData.weatherHistory;
  const weatherSection: ChartObject = {
    chartData: [],
  };
  weatherRecords.forEach((weatherRecord:WeatherSummary, index:number) => {
    const recordNumberValue:number = Number(String(weatherRecord[chartKey]).split(' ')[0]);
    if (!Number.isNaN(recordNumberValue) && index % 2 === 0) {
      weatherSection.chartData.push({
        x: weatherRecord.date,
        y: recordNumberValue,
      });
    }
  });
  const chartXAxisLabel: string = 'time';
  const chartYAxisLabel: string = String(weatherRecords[0][chartKey]).split(' ')[1];
  const yDomain: [number, number] = chartKey === WeatherChartType.pressureSurfaceLevel
    ? [29.70, 30.25] : null;

  return (
    <WeatherSubContainer>
      <WeatherChartSection>
        <WeatherChartSummary descriptionType={chartKey} />
      </WeatherChartSection>
      <LineChart
        xAxisLabel={chartXAxisLabel}
        yAxisLabel={chartYAxisLabel}
        chartObject={weatherSection}
        yDomainRange={yDomain}
      />
    </WeatherSubContainer>
  );
}
