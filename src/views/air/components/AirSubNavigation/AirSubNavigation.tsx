import { SubNavigationContainer } from '@/views/air/styles/airHomeStyles';
import NavigationLink, { NavigationItemConfig } from '@/components/Nav/NavigationLink';
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
  const navConfig: NavigationItemConfig[] = [
    {
      activationType: NavigationLinkActivationType.local,
      activationKey: 'air',
      borderRadius: '5px 0 0 5px',
      linkTo: '/air',
      navTitle: <TiWeatherStormy />,
      htmlTitle: 'Weather Summary',
    },
    {
      activationKey: 'charts',
      linkTo: '/air/data/charts/pressure',
      navTitle: <AiOutlineLineChart />,
      htmlTitle: 'Weather Charts',
    },
    {
      activationKey: 'tables',
      borderRadius: '0 5px 5px 0',
      linkTo: '/air/data/tables/weather',
      navTitle: <BsTable />,
      htmlTitle: 'Weather Tables',
    },
  ];
  return (
    <SubNavigationContainer margin="0 40px 0 0" justifyContent="right">
      {
        navConfig.map((navItem: NavigationItemConfig) => (
          <NavigationLink
            title={navItem.htmlTitle}
            key={`airSubNav-${navItem.linkTo}`}
            activationKey={navItem.activationKey || navItem.linkTo}
            activationType={navItem.activationType || NavigationLinkActivationType.global}
            borderRadius={navItem.borderRadius || 'inherit'}
            navigationLinkType={NavigationLinkType.sub}
            linkTo={navItem.linkTo}
            fontSize={iconFontSize}
            padding={iconPadding}
          >
            {navItem.navTitle}
          </NavigationLink>
        ))
      }
    </SubNavigationContainer>
  );
}
