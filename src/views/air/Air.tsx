import React from 'react';
import { AirHomeContainer, AirSubTitleContainer } from '@/views/air/styles/airHomeStyles';
import { AirSubNavigation } from '@/views/air/components/AirSubNavigation/AirSubNavigation';
import { WeatherReportIndex } from '@/views/air/components/WeatherSummary/WeatherReportIndex';
import { WeatherTables } from '@/views/air/components/WeatherTables/WeatherTables';
import { WeatherCharts } from '@/views/air/components/WeatherChart/WeatherCharts';
import { RoutesGenerator } from '@/components/Nav/RoutesGenerator';
import { RouterItemConfig } from '@/types';
import { AirLocation } from '@/views/air/components/AirLocation/AirLocation';

export function Air() {
  const routerConfig: RouterItemConfig[] = [
    { index: true, element: <WeatherReportIndex /> },
    { path: 'tables/*', element: <WeatherTables /> },
    { path: 'charts/*', element: <WeatherCharts /> },
  ];

  return (
    <AirHomeContainer>
      <AirSubTitleContainer>
        <AirLocation contents="Raleigh, NC" />
        <AirSubNavigation />
      </AirSubTitleContainer>
      <RoutesGenerator routerRoutesConfig={routerConfig} />
    </AirHomeContainer>
  );
}
