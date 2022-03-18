import React from 'react';
import Header from '@/views/components/Header/Header';
import { HomeContainer } from '@/views/home/styles/homeStyles';
import { MainContainer } from '../styles/appStyles';
import RobotImg from '../components/RobotImg';
import AppLinkContainer from './components/AppLinkContainer';

export function Home() {
  const homeTitle: string = 'Roboto';
  const homeSubtitle: string = 'software worth debugging';
  document.title = homeTitle;
  return (
    <>
      <Header title={homeTitle} subtitle={homeSubtitle} />
      <MainContainer>
        <HomeContainer className="side-flexed">
          <AppLinkContainer />
          <RobotImg />
        </HomeContainer>
      </MainContainer>
    </>
  );
}
