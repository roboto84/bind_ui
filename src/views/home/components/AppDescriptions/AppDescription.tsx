import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import {
  AppDescriptionCoreContainer,
  AppDescriptionHeader,
} from './appDescriptionsStyles';

type AppDescriptionProps = {
  appName: string,
  summary: string,
  linkTo: string,
  icon: JSX.Element
}

export default function AppDescription(props: AppDescriptionProps) {
  const { appName, summary, linkTo, icon } = props;
  const navigate: NavigateFunction = useNavigate();

  return (
    <AppDescriptionCoreContainer onClick={() => navigate(linkTo)}>
      <AppDescriptionHeader>
        <span className="appDescriptionHeaderTitle">
          {appName}
        </span>
        <span className="appDescriptionHeaderIcon">
          {icon}
        </span>
      </AppDescriptionHeader>
      <p>
        {summary}
      </p>
    </AppDescriptionCoreContainer>
  );
}
