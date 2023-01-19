import React from 'react';
import { useQuery } from 'react-query';
import { WeatherHistory } from '@/dataSource/types/apiTypes';
import { airApiEndpoints } from '@/dataSource/restApis/robotoRestApi';
import Loader from '@/components/Misc/Loader';
import camelcaseKeys from 'camelcase-keys';
import { LineChart, ChartObject } from '@/components/Charts/LineChart';
import { WeatherChartSummary } from '@/views/air/components/WeatherChart/WeatherChartSummary';
import { ErrorViewDefault } from '@/components/Error/ErrorViewDefault';
import { camelCaseToSpaced, capitalizedFirst } from '@/utils/formatting';
import { WeatherChartSection, WeatherSubContainer } from '../../styles/airHomeStyles';
import { WeatherChartProps, WeatherSummary } from '../../types/airTypes';

export function WeatherChart(props: WeatherChartProps) {
  const { chartKey } = props;
  const { isLoading, isError, data, error } = useQuery<WeatherHistory,
    Error>(airApiEndpoints.weatherHistory);

  if (isLoading) {
    return (<Loader />);
  }
  if (isError) {
    return (<ErrorViewDefault errorMessage={error.message} />);
  }

  const airWeatherData: WeatherHistory = camelcaseKeys<WeatherHistory>(data);
  const weatherRecords: WeatherSummary[] = airWeatherData.weatherHistory;
  const { weatherUnits } = airWeatherData;
  const weatherSection: ChartObject = {
    chartData: [],
  };
  weatherRecords.forEach((weatherRecord:WeatherSummary, index:number) => {
    const recordNumberValue: number = weatherRecord[chartKey];
    if (!Number.isNaN(Number(recordNumberValue)) && index % 2 === 0) {
      weatherSection.chartData.push({
        x: weatherRecord.date,
        y: recordNumberValue,
      });
    }
  });
  const chartTitle: string = `2 Week ${camelCaseToSpaced(capitalizedFirst(chartKey))}`;
  const chartXAxisLabel: string = 'time';
  const chartYAxisLabel: string = weatherUnits[`${chartKey}`]
    ? weatherUnits[`${chartKey}`]
    : 'Severity Scale';

  return (
    <WeatherSubContainer>
      <LineChart
        title={chartTitle}
        xAxisLabel={chartXAxisLabel}
        yAxisLabel={chartYAxisLabel}
        chartObject={weatherSection}
      />
      <WeatherChartSection>
        <WeatherChartSummary descriptionType={chartKey} />
      </WeatherChartSection>
    </WeatherSubContainer>
  );
}
