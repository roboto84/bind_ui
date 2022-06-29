import { AppDescriptionContainer, ChildAppDescriptionContainer } from '@/views/home/styles/homeStyles';
import React from 'react';
import RobotoDescription from '@/views/home/components/AppDescriptions/RobotoDescription';
import { appDescriptionsConfig } from '@/views/home/components/AppDescriptions/appDescriptionsConfig';
import AppDescription from '@/views/home/components/AppDescriptions/AppDescription';

export function AppDescriptions() {
  return (
    <AppDescriptionContainer>
      <RobotoDescription />
      <ChildAppDescriptionContainer>
        {
          Object.keys(appDescriptionsConfig).map(
            (app:string) => (
              <AppDescription
                key={appDescriptionsConfig[app].link}
                appName={app}
                summary={appDescriptionsConfig[app].description}
                linkTo={appDescriptionsConfig[app].link}
                icon={appDescriptionsConfig[app].icon}
              />
            ),
          )
        }
      </ChildAppDescriptionContainer>
    </AppDescriptionContainer>
  );
}
