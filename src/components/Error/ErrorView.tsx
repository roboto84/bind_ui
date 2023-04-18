import React from 'react';
import { ErrorContainer, ErrorTitle } from '@/styles/errorViewStyle';
import Icon from '@/components/Images/Icon';
import { GenericErrorContainer } from '@/views/404/styles/404Style';

type ErrorProps = {
 title: string,
 children: React.ReactNode
}

export function ErrorView(props: ErrorProps) {
  const { title, children } = props;
  return (
    <GenericErrorContainer className="flexed">
      <Icon fontSize="250px" opacity="0.7" robotType="SiProbot" />
      <ErrorContainer>
        <ErrorTitle>
          {title}
        </ErrorTitle>
        <div>
          {children}
        </div>
      </ErrorContainer>
    </GenericErrorContainer>
  );
}
