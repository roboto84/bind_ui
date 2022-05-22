import {
  AppDescriptionContainer,
} from '@/views/home/styles/homeStyles';
import React from 'react';
import { SubNavigation } from '@/components/Nav/SubNavigation';
import { NavigationItemConfig } from '@/components/Nav/NavigationLink';
import { NavigationLinkType } from '@/views/components/Header/types/headerTypes';
import { RouterItemConfig } from '@/types';
import { RoutesGenerator } from '@/components/Nav/RoutesGenerator';
import AppSummary from '@/views/home/components/AppSummary';
import { AppSummaryType } from '@/views/home/types/homeTypes';
import { Error404 } from '@/views/404/404';

export default function AppDescriptions() {
  const navConfig: NavigationItemConfig[] = [
    { borderRadius: '5px 0 0 5px', linkTo: '/', navTitle: 'Roboto' },
    { linkTo: '/description/air_app', navTitle: 'Air' },
    { linkTo: '/description/lexicon_app', navTitle: 'Lexicon' },
    { linkTo: '/description/wh00t_app', navTitle: 'wh00t' },
    { borderRadius: '0 5px 5px 0', linkTo: '/description/debug_app', navTitle: 'Debug' },
  ];
  const routerConfig: RouterItemConfig[] = [
    { index: true, element: <AppSummary summaryType={AppSummaryType.roboto} /> },
    { path: 'air_app', element: <AppSummary summaryType={AppSummaryType.air} /> },
    { path: 'lexicon_app', element: <AppSummary summaryType={AppSummaryType.lexicon} /> },
    { path: 'wh00t_app', element: <AppSummary summaryType={AppSummaryType.wh00t} /> },
    { path: 'debug_app', element: <AppSummary summaryType={AppSummaryType.debug} /> },
    { path: '*', element: <Error404 /> },
  ];

  return (
    <AppDescriptionContainer>
      <SubNavigation
        navKey="homeSubNav"
        margin="10px 0 25px 0"
        justifyContent="center"
        navConfig={navConfig}
        navLinkType={NavigationLinkType.sub}
      />
      <RoutesGenerator routerRoutesConfig={routerConfig} />
    </AppDescriptionContainer>
  );
}
