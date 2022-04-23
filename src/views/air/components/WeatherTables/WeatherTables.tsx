import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { WeatherTable } from '@/views/air/components/WeatherTables/WeatherTable';
import { WeatherTableType } from '@/views/air/types/airTypes';

export function WeatherTables() {
  return (
    <Routes>
      <Route path="weather" element={<WeatherTable tableType={WeatherTableType.weather} />} />
      <Route path="pollution" element={<WeatherTable tableType={WeatherTableType.pollution} />} />
      <Route path="pollen" element={<WeatherTable tableType={WeatherTableType.pollen} />} />
    </Routes>
  );
}
