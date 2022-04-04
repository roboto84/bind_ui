import { SubNavigation } from '@/views/air/styles/airHomeStyles';
import NavigationLink from '@/views/components/Header/NavigationLink';
import React from 'react';

export function WeatherChartSubNavigation() {
  return (
    <SubNavigation margin="40px 0 15px 0" justifyContent="center">
      <NavigationLink linkTo="/air/temperature">Temperature</NavigationLink>
      <NavigationLink linkTo="/air/humidity">Humidity</NavigationLink>
      <NavigationLink linkTo="/air/precipitation">Precipitation</NavigationLink>
      <NavigationLink linkTo="/air/pressure">Pressure</NavigationLink>
      <NavigationLink linkTo="/air/epa_index">EPA Index</NavigationLink>
      <NavigationLink linkTo="/air/particulate_matter_10">PM10</NavigationLink>
      <NavigationLink linkTo="/air/particulate_matter_25">PM25</NavigationLink>
      <NavigationLink linkTo="/air/pollutant_co">CO</NavigationLink>
      <NavigationLink linkTo="/air/pollutant_no2">NO2</NavigationLink>
      <NavigationLink linkTo="/air/pollutant_o3">O3</NavigationLink>
      <NavigationLink linkTo="/air/pollutant_so2">SO2</NavigationLink>
      <NavigationLink linkTo="/air/pollen_grass">Grass</NavigationLink>
      <NavigationLink linkTo="/air/pollen_tree">Trees</NavigationLink>
      <NavigationLink linkTo="/air/pollen_weed">Weeds</NavigationLink>
    </SubNavigation>
  );
}
