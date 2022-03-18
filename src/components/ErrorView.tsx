import React from 'react';
import { ErrorContainer, ErrorTitle } from '@/styles/errorViewStyle';

type ErrorProps = {
 title: string,
 children: React.ReactNode
}

export function ErrorView(props: ErrorProps) {
  const { title, children } = props;
  return (
    <ErrorContainer>
      <ErrorTitle>
        {title}
      </ErrorTitle>
      <div>
        {children}
      </div>
    </ErrorContainer>
  );
}
