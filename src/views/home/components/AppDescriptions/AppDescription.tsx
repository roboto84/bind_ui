import React from 'react';
import styled from 'styled-components';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { AppDescriptionCoreContainer } from './appDescriptionsStyles';

type AppDescriptionProps = {
  appName: string,
  summary: string,
  linkTo: string,
}

export default function AppDescription(props: AppDescriptionProps) {
  const { appName, summary, linkTo } = props;
  const navigate: NavigateFunction = useNavigate();

  return (
    <AppDescriptionCoreContainer onClick={() => navigate(linkTo)}>
      <h2>
        {appName}
      </h2>
      <p>
        {summary}
      </p>
    </AppDescriptionCoreContainer>
  );
}
