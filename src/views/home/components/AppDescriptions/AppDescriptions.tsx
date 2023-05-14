import { AppDescriptionContainer, ChildAppDescriptionContainer } from '@/views/home/styles/homeStyles';
import React from 'react';
import BindDescription from '@/views/home/components/AppDescriptions/BindDescription';
import { appDescriptionsConfig } from '@/views/home/components/AppDescriptions/appDescriptionsConfig';
import AppDescription from '@/views/home/components/AppDescriptions/AppDescription';

export function AppDescriptions() {
  return (
    <AppDescriptionContainer>
      <BindDescription />
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
