import React from 'react';
import { ErrorView } from '@/components/Error/ErrorView';
import { ErrorReason } from '@/styles/errorViewStyle';

type ErrorViewDefaultProps = {
  errorMessage: string
}

export function ErrorViewDefault(props: ErrorViewDefaultProps) {
  const { errorMessage } = props;
  return (
    <ErrorView title="Data Error">
      <span>
        What is the error?
      </span>
      <ErrorReason>
        {errorMessage}
      </ErrorReason>
    </ErrorView>
  );
}
