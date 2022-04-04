import React from 'react';
import { getSimpleDateTime } from '@/utils/formatting';
import { useQuery } from 'react-query';
import { WeatherHistory } from '@/dataSource/types/apiTypes';
import { airApiEndpoints } from '@/dataSource/restApis/robotoRestApi';
import { Loader } from '@/components/Loader';
import { ErrorView } from '@/components/ErrorView';
import camelcaseKeys from 'camelcase-keys';
import { Table } from '@/components/Table';
import { AirSubNavigation } from '@/views/air/components/AirSubNavigation/AirSubNavigation';
import { WeatherTableSubNavigation } from '@/views/air/components/WeatherTables/WeatherTableSubNavigation';
import {
  AirHomeContainer,
  WeatherSubContainer,
  WeatherTableContainer
} from '../../styles/airHomeStyles';
import {
  SubWeatherSummary,
  WeatherPollenSummary,
  WeatherPollutionSummary,
  WeatherSummary,
  WeatherTableObject,
  WeatherTablesProps,
  WeatherTableType,
} from '../../types/airTypes';

export function WeatherTable(props: WeatherTablesProps) {
  const { tableType } = props;
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
  const weatherSection: WeatherTableObject<
    SubWeatherSummary |
    WeatherPollenSummary |
    WeatherPollutionSummary> = {
      title: tableType.toString(),
      weatherData: [],
    };
  weatherRecords.forEach((weatherRecord:WeatherSummary, index:number) => {
    if (index % 2 === 0) {
      if (tableType === WeatherTableType.weather) {
        weatherSection.weatherData.push({
          date: getSimpleDateTime(weatherRecord.date),
          temperature: weatherRecord.temperature,
          temperatureApparent: weatherRecord.temperatureApparent,
          humidity: weatherRecord.humidity,
          dewPoint: weatherRecord.dewPoint,
          weatherCode: weatherRecord.weatherCode,
          precipitationProbability: weatherRecord.precipitationProbability,
          precipitationType: weatherRecord.precipitationType,
          pressureSurfaceLevel: weatherRecord.pressureSurfaceLevel,
        });
      } else if (tableType === WeatherTableType.pollution) {
        weatherSection.weatherData.push({
          date: getSimpleDateTime(weatherRecord.date),
          epaIndex: weatherRecord.epaIndex,
          epaHealthConcern: weatherRecord.epaHealthConcern,
          epaPrimaryPollutant: weatherRecord.epaPrimaryPollutant,
          particulateMatter10: weatherRecord.particulateMatter10,
          particulateMatter25: weatherRecord.particulateMatter25,
          pollutantCO: weatherRecord.pollutantCO,
          pollutantNO2: weatherRecord.pollutantNO2,
          pollutantO3: weatherRecord.pollutantO3,
          pollutantSO2: weatherRecord.pollutantSO2,
        });
      } else {
        weatherSection.weatherData.push({
          date: getSimpleDateTime(weatherRecord.date),
          grassIndex: weatherRecord.grassIndex,
          treeIndex: weatherRecord.treeIndex,
          weedIndex: weatherRecord.weedIndex,
        });
      }
    }
  });

  const tableHeaders = Object.keys(weatherSection.weatherData[0]);
  const cellData:string[][] = weatherSection.weatherData.map(
    (weatherPortion) => (
      Object.values(weatherPortion) as string[]
    ),
  );

  return (
    <WeatherSubContainer>
      <AirSubNavigation />
      <WeatherTableContainer>
        <WeatherTableSubNavigation />
        <Table tableObject={{
          key: weatherSection.title,
          headers: tableHeaders,
          cells: cellData,
        }}
        />
      </WeatherTableContainer>
    </WeatherSubContainer>
  );
}
