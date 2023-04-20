import { ErrorSmallContainer } from '@/styles/errorViewStyle';
import React from 'react';

type ErrorSmallProps = {
  message: string,
}

export function ErrorSmall(props: ErrorSmallProps) {
  const { message } = props;

  return (
    <ErrorSmallContainer>
      <h1>
        An Error Occurred
      </h1>
      <p style={{ marginLeft: '15px' }}>
        {message}
      </p>
    </ErrorSmallContainer>
  );
}
