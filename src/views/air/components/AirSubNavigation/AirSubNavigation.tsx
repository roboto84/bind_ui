import { SubNavigation } from '@/views/air/styles/airHomeStyles';
import NavigationLink from '@/views/components/NavigationLink';
import React from 'react';
import { AiOutlineLineChart } from 'react-icons/ai';
import { TiWeatherStormy } from 'react-icons/ti';
import { BsTable } from 'react-icons/bs';
import {
  NavigationLinkActivationType,
  NavigationLinkType,
} from '@/views/components/Header/types/headerTypes';

export function AirSubNavigation() {
  const iconPadding: string = '5px 15px 0px 15px';
  const iconFontSize: string = '25px';

  return (
    <SubNavigation margin="0 40px 0 0" justifyContent="right">
      <NavigationLink
        activationType={NavigationLinkActivationType.local}
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air"
        fontSize={iconFontSize}
        padding={iconPadding}
        borderRadius="5px 0 0 5px"
      >
        <TiWeatherStormy />
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/data/charts/temperature"
        fontSize={iconFontSize}
        padding={iconPadding}
      >
        <AiOutlineLineChart />
      </NavigationLink>
      <NavigationLink
        navigationLinkType={NavigationLinkType.sub}
        linkTo="/air/data/tables/weather"
        fontSize={iconFontSize}
        padding={iconPadding}
        borderRadius="0 5px 5px 0"
      >
        <BsTable />
      </NavigationLink>
    </SubNavigation>
  );
}
