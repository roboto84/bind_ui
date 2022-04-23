import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { WeatherChartType } from '@/views/air/types/airTypes';
import { WeatherChart } from '@/views/air/components/WeatherChart/WeatherChart';

export function WeatherCharts() {
  return (
    <Routes>
      <Route path="temperature" element={<WeatherChart chartKey={WeatherChartType.temperature} />} />
      <Route path="humidity" element={<WeatherChart chartKey={WeatherChartType.humidity} />} />
      <Route path="precipitation" element={<WeatherChart chartKey={WeatherChartType.precipitationProbability} />} />
      <Route path="pressure" element={<WeatherChart chartKey={WeatherChartType.pressureSurfaceLevel} />} />
      <Route path="epa_index" element={<WeatherChart chartKey={WeatherChartType.epaIndex} />} />
      <Route path="particulate_matter_10" element={<WeatherChart chartKey={WeatherChartType.particulateMatter10} />} />
      <Route path="particulate_matter_25" element={<WeatherChart chartKey={WeatherChartType.particulateMatter25} />} />
      <Route path="pollutant_co" element={<WeatherChart chartKey={WeatherChartType.pollutantCO} />} />
      <Route path="pollutant_no2" element={<WeatherChart chartKey={WeatherChartType.pollutantNO2} />} />
      <Route path="pollutant_o3" element={<WeatherChart chartKey={WeatherChartType.pollutantO3} />} />
      <Route path="pollutant_so2" element={<WeatherChart chartKey={WeatherChartType.pollutantSO2} />} />
      <Route path="pollen_grass" element={<WeatherChart chartKey={WeatherChartType.grassIndex} />} />
      <Route path="pollen_tree" element={<WeatherChart chartKey={WeatherChartType.treeIndex} />} />
      <Route path="pollen_weed" element={<WeatherChart chartKey={WeatherChartType.weedIndex} />} />
    </Routes>
  );
}
