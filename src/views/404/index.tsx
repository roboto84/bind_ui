import React from 'react';
import Header from '@/views/components/Header/Header';
import { ErrorView } from '@/components/ErrorView';
import RobotImg from '../components/RobotImg';
import { GenericErrorContainer } from './styles/404Style';

export function Error404() {
  const homeTitle: string = 'Error';
  const homeSubtitle: string = 'have you tried turning off and on again?';

  return (
    <>
      <Header title={homeTitle} subtitle={homeSubtitle} />
      <GenericErrorContainer className="side-flexed">
        <ErrorView title="404">
          <div>
            The Page You Requested Does Not Exist
          </div>
        </ErrorView>
        <RobotImg robotType="SiProbot" />
      </GenericErrorContainer>
    </>
  );
}
