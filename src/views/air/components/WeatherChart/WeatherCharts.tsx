import React from 'react';
import { WeatherChartType } from '@/views/air/types/airTypes';
import { WeatherChart } from '@/views/air/components/WeatherChart/WeatherChart';
import { RouterItemConfig } from '@/types';
import { RoutesGenerator } from '@/components/Nav/RoutesGenerator';
import {
  WeatherChartSubNavigation,
} from '@/views/air/components/WeatherChart/WeatherChartSubNavigation';

export function WeatherCharts() {
  const routerConfig: RouterItemConfig[] = [
    { path: 'temperature', element: <WeatherChart chartKey={WeatherChartType.temperature} /> },
    { path: 'humidity', element: <WeatherChart chartKey={WeatherChartType.humidity} /> },
    { path: 'precipitation', element: <WeatherChart chartKey={WeatherChartType.precipitationProbability} /> },
    { path: 'pressure', element: <WeatherChart chartKey={WeatherChartType.pressureSurfaceLevel} /> },
    { path: 'epa_index', element: <WeatherChart chartKey={WeatherChartType.epaIndex} /> },
    { path: 'particulate_matter_10', element: <WeatherChart chartKey={WeatherChartType.particulateMatter10} /> },
    { path: 'particulate_matter_25', element: <WeatherChart chartKey={WeatherChartType.particulateMatter25} /> },
    { path: 'pollutant_co', element: <WeatherChart chartKey={WeatherChartType.pollutantCO} /> },
    { path: 'pollutant_no2', element: <WeatherChart chartKey={WeatherChartType.pollutantNO2} /> },
    { path: 'pollutant_o3', element: <WeatherChart chartKey={WeatherChartType.pollutantO3} /> },
    { path: 'pollutant_so2', element: <WeatherChart chartKey={WeatherChartType.pollutantSO2} /> },
    { path: 'pollen_grass', element: <WeatherChart chartKey={WeatherChartType.grassIndex} /> },
    { path: 'pollen_tree', element: <WeatherChart chartKey={WeatherChartType.treeIndex} /> },
    { path: 'pollen_weed', element: <WeatherChart chartKey={WeatherChartType.weedIndex} /> },
  ];
  return (
    <>
      <WeatherChartSubNavigation />
      <RoutesGenerator routerRoutesConfig={routerConfig} />
    </>
  );
}
