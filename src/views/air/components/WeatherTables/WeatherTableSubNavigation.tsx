import { SubNavigation } from '@/views/air/styles/airHomeStyles';
import NavigationLink, { NavigationItemConfig } from '@/components/NavigationLink';
import React from 'react';
import { NavigationLinkType } from '@/views/components/Header/types/headerTypes';

export function WeatherTableSubNavigation() {
  const navConfig: NavigationItemConfig[] = [
    { borderRadius: '5px 0 0 5px', linkTo: 'weather', title: 'Weather' },
    { linkTo: 'pollution', title: 'Pollution' },
    { borderRadius: '0 5px 5px 0', linkTo: 'pollen', title: 'Pollen' },
  ];
  return (
    <SubNavigation margin="10px 0 25px 0" justifyContent="left">
      {
        navConfig.map((navItem: NavigationItemConfig) => (
          <NavigationLink
            key={`weatherTables-${navItem.linkTo}`}
            borderRadius={navItem.borderRadius || 'inherit'}
            navigationLinkType={NavigationLinkType.sub}
            linkTo={`/air/data/tables/${navItem.linkTo}`}
          >
            {navItem.title}
          </NavigationLink>
        ))
      }
    </SubNavigation>
  );
}
