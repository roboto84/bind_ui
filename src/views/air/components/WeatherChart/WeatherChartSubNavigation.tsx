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
        linkTo="/air/temperature"
      >
        Temperature
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/humidity"
      >
        Humidity
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/precipitation"
      >
        Precipitation
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/pressure"
      >
        Pressure

      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/epa_index"
      >
        EPA Index
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/particulate_matter_10"
      >
        PM10
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/particulate_matter_25"
      >
        PM25
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/pollutant_co"
      >
        CO
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/pollutant_no2"
      >
        NO2
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/pollutant_o3"
      >
        O3
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/pollutant_so2"
      >
        SO2
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/pollen_grass"
      >
        Grass
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/pollen_tree"
      >
        Trees
      </NavigationLink>
      <NavigationLink
        borderRadius="0 5px 5px 0"
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/pollen_weed"
      >
        Weeds
      </NavigationLink>
    </SubNavigation>
  );
}
