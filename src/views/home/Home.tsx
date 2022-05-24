import React from 'react';
import { HomeContainer, ImageContainer } from '@/views/home/styles/homeStyles';
import RobotImg from '../../components/Images/RobotImg';
import AppDescriptions from './components/AppDescriptions';

export function Home() {
  return (
    <HomeContainer className="side-flexed">
      <ImageContainer>
        <RobotImg fontSize="445px" opacity="0.7" />
      </ImageContainer>
    </HomeContainer>

  );
}
