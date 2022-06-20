import React from 'react';
import { HomeBottomRight, HomeContainer, HomeRightContainer } from '@/views/home/styles/homeStyles';
import RobotImg from '../../components/Images/RobotImg';
import { AppDescriptions } from './components/AppDescriptions/AppDescriptions';

export function Home() {
  return (
    <HomeContainer className="side-flexed">
      <AppDescriptions />
      <HomeRightContainer>
        <RobotImg fontSize="445px" opacity="0.7" />
        <HomeBottomRight>
          ... more in development 😅
        </HomeBottomRight>
      </HomeRightContainer>
    </HomeContainer>

  );
}
