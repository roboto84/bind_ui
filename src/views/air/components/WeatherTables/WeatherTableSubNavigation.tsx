import { NavigationItemConfig } from '@/components/Nav/NavigationLink';
import React from 'react';
import { NavigationLinkType } from '@/views/components/Header/types/headerTypes';
import { SubNavigation } from '@/components/Nav/SubNavigation';

export function WeatherTableSubNavigation() {
  const navConfig: NavigationItemConfig[] = [
    { borderRadius: '5px 0 0 5px', linkTo: '/air/data/tables/weather', title: 'Weather' },
    { linkTo: '/air/data/tables/pollution', title: 'Pollution' },
    { borderRadius: '0 5px 5px 0', linkTo: '/air/data/tables/pollen', title: 'Pollen' },
  ];
  return (
    <SubNavigation
      navKey="weatherTablesNav"
      navLinkType={NavigationLinkType.sub}
      margin="10px 0 25px 0"
      justifyContent="left"
      navConfig={navConfig}
    />
  );
}
