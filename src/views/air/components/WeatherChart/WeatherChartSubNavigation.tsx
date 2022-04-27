import { SubNavigation } from '@/views/air/styles/airHomeStyles';
import NavigationLink, { NavigationItemConfig } from '@/components/NavigationLink';
import React from 'react';
import { NavigationLinkType } from '@/views/components/Header/types/headerTypes';

export function WeatherChartSubNavigation() {
  const navConfig: NavigationItemConfig[] = [
    { borderRadius: '5px 0 0 5px', linkTo: 'temperature', title: 'Temperature' },
    { linkTo: 'humidity', title: 'Humidity' },
    { linkTo: 'precipitation', title: 'Precipitation' },
    { linkTo: 'pressure', title: 'Pressure' },
    { linkTo: 'epa_index', title: 'EPA Index' },
    { linkTo: 'particulate_matter_10', title: 'PM10' },
    { linkTo: 'particulate_matter_25', title: 'PM25' },
    { linkTo: 'pollutant_co', title: 'CO' },
    { linkTo: 'pollutant_no2', title: 'NO2' },
    { linkTo: 'pollutant_o3', title: 'O3' },
    { linkTo: 'pollutant_so2', title: 'SO2' },
    { linkTo: 'pollen_grass', title: 'Grass' },
    { linkTo: 'pollen_tree', title: 'Trees' },
    { borderRadius: '0 5px 5px 0', linkTo: 'pollen_weed', title: 'Weeds' },
  ];
  return (
    <SubNavigation margin="40px 0 0 0" justifyContent="center">
      {
        navConfig.map((navItem: NavigationItemConfig) => (
          <NavigationLink
            key={`weatherCharts-${navItem.linkTo}`}
            borderRadius={navItem.borderRadius || 'inherit'}
            navigationLinkType={NavigationLinkType.sub}
            linkTo={`/air/data/charts/${navItem.linkTo}`}
          >
            {navItem.title}
          </NavigationLink>
        ))
      }
    </SubNavigation>
  );
}
