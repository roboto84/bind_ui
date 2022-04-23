import React from 'react';
import { AirHomeContainer } from '@/views/air/styles/airHomeStyles';
import { AirSubNavigation } from '@/views/air/components/AirSubNavigation/AirSubNavigation';
import { Routes, Route } from 'react-router-dom';
import { WeatherReportIndex } from '@/views/air/components/WeatherSummary/WeatherReportIndex';
import { WeatherTables } from '@/views/air/components/WeatherTables/WeatherTables';
import { WeatherCharts } from '@/views/air/components/WeatherChart/WeatherCharts';

export function Air() {
  return (
    <AirHomeContainer>
      <AirSubNavigation />
      <Routes>
        <Route index element={<WeatherReportIndex />} />
        <Route path="tables/*" element={<WeatherTables />} />
        <Route path="charts/*" element={<WeatherCharts />} />
      </Routes>
    </AirHomeContainer>
  );
}
