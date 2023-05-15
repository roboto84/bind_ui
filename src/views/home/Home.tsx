import React from 'react';
import {
  AppLogoContainer,
  HomeBottomRight,
  HomeContainer,
  HomeRightContainer,
} from '@/views/home/styles/homeStyles';
import appLogo from '@/assets/images/app_logo.webp';
import { AppDescriptions } from './components/AppDescriptions/AppDescriptions';

export function Home() {
  return (
    <HomeContainer className="side-flexed">
      <AppDescriptions />
      <HomeRightContainer>
        <AppLogoContainer>
          <img src={appLogo} alt="Bind logo" />
        </AppLogoContainer>
        <HomeBottomRight>
          ... more in development 😅
        </HomeBottomRight>
      </HomeRightContainer>
    </HomeContainer>

  );
}
