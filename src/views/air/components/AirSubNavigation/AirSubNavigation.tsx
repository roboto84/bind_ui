import {
  SubNavigation,
} from '@/views/air/styles/airHomeStyles';
import NavigationLink from '@/views/components/Header/NavigationLink';
import React from 'react';

export function AirSubNavigation() {
  return (
    <SubNavigation margin="0 40px 0 0" justifyContent="right">
      <NavigationLink linkTo="/air/temperature">Charts</NavigationLink>
      <NavigationLink linkTo="/air/weather">Tables</NavigationLink>
    </SubNavigation>
  );
}
