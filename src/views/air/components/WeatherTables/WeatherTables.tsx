import React from 'react';
import { WeatherTable } from '@/views/air/components/WeatherTables/WeatherTable';
import { WeatherTableType } from '@/views/air/types/airTypes';
import { RouterItemConfig } from '@/types';
import { RoutesGenerator } from '@/components/Nav/RoutesGenerator';

export function WeatherTables() {
  const routerConfig: RouterItemConfig[] = [
    { path: 'weather', element: <WeatherTable tableType={WeatherTableType.weather} /> },
    { path: 'pollution', element: <WeatherTable tableType={WeatherTableType.pollution} /> },
    { path: 'pollen', element: <WeatherTable tableType={WeatherTableType.pollen} /> },
  ];
  return (<RoutesGenerator routerRoutesConfig={routerConfig} />);
}
