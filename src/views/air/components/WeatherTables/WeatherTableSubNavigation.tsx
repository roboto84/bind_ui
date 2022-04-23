import { SubNavigation } from '@/views/air/styles/airHomeStyles';
import NavigationLink from '@/views/components/NavigationLink';
import React from 'react';

export function WeatherTableSubNavigation() {
  return (
    <SubNavigation margin="10px 0 25px 0" justifyContent="left">
      <NavigationLink linkTo="/air/data/tables/weather">Weather</NavigationLink>
      <NavigationLink linkTo="/air/data/tables/pollution">Pollution</NavigationLink>
      <NavigationLink linkTo="/air/data/tables/pollen">Pollen</NavigationLink>
    </SubNavigation>
  );
}
