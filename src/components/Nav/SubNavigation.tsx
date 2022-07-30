import { SubNavigationContainer } from '@/views/air/styles/airHomeStyles';
import NavigationLink, { NavigationItemConfig } from '@/components/Nav/NavigationLink';
import React from 'react';
import { NavigationLinkType } from '@/views/components/Header/types/headerTypes';

type SubNavigationProps = {
  navKey: string,
  navLinkType: NavigationLinkType,
  padding: string,
  margin: string,
  justifyContent: string,
  navConfig: NavigationItemConfig[]
}

export function SubNavigation(props: SubNavigationProps) {
  const { navKey, navConfig, navLinkType, padding, margin, justifyContent } = props;
  return (
    <SubNavigationContainer margin={margin} justifyContent={justifyContent}>
      {
        navConfig.map((navItem: NavigationItemConfig) => (
          <NavigationLink
            title={navItem.htmlTitle ? navItem.htmlTitle : `${navItem.navTitle}`}
            key={`${navKey}-${navItem.linkTo}`}
            padding={padding}
            borderRadius={navItem.borderRadius || 'inherit'}
            navigationLinkType={navLinkType}
            linkTo={`${navItem.linkTo}`}
          >
            {navItem.navTitle}
          </NavigationLink>
        ))
      }
    </SubNavigationContainer>
  );
}
