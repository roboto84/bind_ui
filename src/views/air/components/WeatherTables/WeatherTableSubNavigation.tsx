import { SubNavigation } from '@/views/air/styles/airHomeStyles';
import NavigationLink from '@/views/components/Header/NavigationLink';
import React from 'react';

export function WeatherTableSubNavigation() {
  return (
    <SubNavigation margin="10px 0 25px 0" justifyContent="left">
      <NavigationLink linkTo="/air/weather">Weather</NavigationLink>
      <NavigationLink linkTo="/air/pollution">Pollution</NavigationLink>
      <NavigationLink linkTo="/air/pollen">Pollen</NavigationLink>
    </SubNavigation>
  );
}
