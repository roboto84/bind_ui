import React from 'react';
import { ErrorContainer, ErrorTitle } from '@/styles/errorViewStyle';
import RobotImg from '@/components/Images/RobotImg';
import { GenericErrorContainer } from '@/views/404/styles/404Style';

type ErrorProps = {
 title: string,
 children: React.ReactNode
}

export function ErrorView(props: ErrorProps) {
  const { title, children } = props;
  return (
    <GenericErrorContainer className="side-flexed">
      <ErrorContainer>
        <ErrorTitle>
          {title}
        </ErrorTitle>
        <div>
          {children}
        </div>
      </ErrorContainer>
      <RobotImg fontSize="445px" opacity="0.7" robotType="SiProbot" />
    </GenericErrorContainer>
  );
}