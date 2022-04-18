import React from 'react';
import Header from '@/views/components/Header/Header';
import { ErrorView } from '@/components/ErrorView';
import { MainContainer } from '@/views/styles/appStyles';

export function Error404() {
  const homeTitle: string = 'Error';
  const homeSubtitle: string = 'have you tried turning off and on again?';

  return (
    <>
      <Header title={homeTitle} subtitle={homeSubtitle} />
      <MainContainer>
        <ErrorView title="404">
          <div>
            The Page You Requested Does Not Exist
          </div>
        </ErrorView>
      </MainContainer>
    </>
  );
}
