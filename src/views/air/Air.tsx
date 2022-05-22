import React from 'react';
import { AirHomeContainer } from '@/views/air/styles/airHomeStyles';
import { AirSubNavigation } from '@/views/air/components/AirSubNavigation/AirSubNavigation';
import { WeatherReportIndex } from '@/views/air/components/WeatherSummary/WeatherReportIndex';
import { WeatherTables } from '@/views/air/components/WeatherTables/WeatherTables';
import { WeatherCharts } from '@/views/air/components/WeatherChart/WeatherCharts';
import { RoutesGenerator } from '@/components/Nav/RoutesGenerator';
import { RouterItemConfig } from '@/types';
import { Error404 } from '@/views/404/404';

export function Air() {
  const routerConfig: RouterItemConfig[] = [
    { index: true, element: <WeatherReportIndex /> },
    { path: 'tables/*', element: <WeatherTables /> },
    { path: 'charts/*', element: <WeatherCharts /> },
    { path: '*', element: <Error404 /> },
  ];

  return (
    <AirHomeContainer>
      <AirSubNavigation />
      <RoutesGenerator routerRoutesConfig={routerConfig} />
    </AirHomeContainer>
  );
}
