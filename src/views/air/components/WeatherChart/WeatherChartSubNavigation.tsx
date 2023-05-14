import { SubNavigationContainer } from '@/views/air/styles/airHomeStyles';
import NavigationLink, { NavigationItemConfig } from '@/components/Nav/NavigationLink';
import React from 'react';
import { NavigationLinkType } from '@/views/components/Header/types/headerTypes';
import { getWeatherTableTitle } from '@/views/air/utils';

export function WeatherChartSubNavigation() {
  const navConfig: NavigationItemConfig[] = [
    { borderRadius: '5px 0 0 5px', linkTo: 'pressure', navTitle: getWeatherTableTitle('pressureSurfaceLevel') },
    { linkTo: 'temperature', navTitle: getWeatherTableTitle('temperature') },
    { linkTo: 'humidity', navTitle: getWeatherTableTitle('humidity') },
    { linkTo: 'precipitation', navTitle: getWeatherTableTitle('precipitationProbability') },
    { linkTo: 'epa_index', navTitle: getWeatherTableTitle('epaIndex') },
    { linkTo: 'particulate_matter_10', navTitle: getWeatherTableTitle('particulateMatter10') },
    { linkTo: 'particulate_matter_25', navTitle: getWeatherTableTitle('particulateMatter25') },
    { linkTo: 'pollutant_co', navTitle: getWeatherTableTitle('pollutantCO') },
    { linkTo: 'pollutant_no2', navTitle: getWeatherTableTitle('pollutantNO2') },
    { linkTo: 'pollutant_o3', navTitle: getWeatherTableTitle('pollutantO3') },
    { linkTo: 'pollutant_so2', navTitle: getWeatherTableTitle('pollutantSO2') },
    { linkTo: 'pollen_grass', navTitle: getWeatherTableTitle('grassIndex') },
    { linkTo: 'pollen_tree', navTitle: getWeatherTableTitle('treeIndex') },
    { borderRadius: '0 5px 5px 0', linkTo: 'pollen_weed', navTitle: getWeatherTableTitle('weedIndex') },
  ];
  return (
    <SubNavigationContainer margin="40px 0 0 0" justifyContent="center" gap="12px 6px">
      {
        navConfig.map((navItem: NavigationItemConfig) => (
          <NavigationLink
            title={`${navItem.navTitle as string} Chart`}
            key={`weatherCharts-${navItem.linkTo}`}
            padding="7px 10px"
            borderRadius={navItem.borderRadius || 'inherit'}
            navigationLinkType={NavigationLinkType.sub}
            linkTo={`/air/data/charts/${navItem.linkTo}`}
          >
            {navItem.navTitle}
          </NavigationLink>
        ))
      }
    </SubNavigationContainer>
  );
}
