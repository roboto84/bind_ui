import React from 'react';
import { HomeContainer, ImageContainer } from '@/views/home/styles/homeStyles';
import RobotImg from '../components/RobotImg';
import AppLinkContainer from './components/AppLinkContainer';

export function Home() {
  return (
    <HomeContainer className="side-flexed">
      <AppLinkContainer />
      <ImageContainer>
        <RobotImg fontSize="445px" opacity="0.7" />
      </ImageContainer>
    </HomeContainer>

  );
}
