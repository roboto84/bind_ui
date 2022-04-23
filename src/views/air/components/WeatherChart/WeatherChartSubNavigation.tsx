import { SubNavigation } from '@/views/air/styles/airHomeStyles';
import NavigationLink from '@/views/components/NavigationLink';
import React from 'react';
import {
  NavigationLinkType,
} from '@/views/components/Header/types/headerTypes';

export function WeatherChartSubNavigation() {
  return (
    <SubNavigation margin="40px 0 15px 0" justifyContent="center">
      <NavigationLink
        borderRadius="5px 0 0 5px"
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/data/charts/temperature"
      >
        Temperature
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/data/charts/humidity"
      >
        Humidity
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/data/charts/precipitation"
      >
        Precipitation
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/data/charts/pressure"
      >
        Pressure

      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/data/charts/epa_index"
      >
        EPA Index
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/data/charts/particulate_matter_10"
      >
        PM10
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/data/charts/particulate_matter_25"
      >
        PM25
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/data/charts/pollutant_co"
      >
        CO
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/data/charts/pollutant_no2"
      >
        NO2
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/data/charts/pollutant_o3"
      >
        O3
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/data/charts/pollutant_so2"
      >
        SO2
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/data/charts/pollen_grass"
      >
        Grass
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/data/charts/pollen_tree"
      >
        Trees
      </NavigationLink>
      <NavigationLink
        borderRadius="0 5px 5px 0"
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/data/charts/pollen_weed"
      >
        Weeds
      </NavigationLink>
    </SubNavigation>
  );
}
