import { AppDescriptionContainer, ChildAppDescriptionContainer } from '@/views/home/styles/homeStyles';
import React from 'react';
import RobotoDescription from '@/views/home/components/AppDescriptions/RobotoDescription';
import { appDescriptions } from '@/views/home/components/AppDescriptions/appDescriptions';
import AppDescription from '@/views/home/components/AppDescriptions/AppDescription';

export function AppDescriptions() {
  return (
    <AppDescriptionContainer>
      <RobotoDescription />
      <ChildAppDescriptionContainer>
        {
          Object.keys(appDescriptions).map(
            (app:string) => (
              <AppDescription
                appName={app}
                summary={appDescriptions[app].description}
                linkTo={appDescriptions[app].location}
              />
            ),
          )
        }
      </ChildAppDescriptionContainer>
    </AppDescriptionContainer>
  );
}
