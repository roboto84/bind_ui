import React from 'react';
import { HomeBottomRight, HomeContainer, HomeRightContainer } from '@/views/home/styles/homeStyles';
import Icon from '../../components/Images/Icon';
import { AppDescriptions } from './components/AppDescriptions/AppDescriptions';

export function Home() {
  return (
    <HomeContainer className="side-flexed">
      <AppDescriptions />
      <HomeRightContainer>
        <Icon fontSize="395px" opacity="0.7" />
        <HomeBottomRight>
          ... more in development 😅
        </HomeBottomRight>
      </HomeRightContainer>
    </HomeContainer>

  );
}
