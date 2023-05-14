import React from 'react';
import { ErrorView } from '@/components/Error/ErrorView';
import { ErrorReason } from '@/styles/errorViewStyle';
import { Size } from '@/types';
import { ErrorSmall } from '@/components/Error/ErrorSmall';

type ErrorViewDefaultProps = {
  errorMessage: string,
  title ? : string,
  size ?: Size
}

function ErrorViewDefault(props: ErrorViewDefaultProps) {
  const { errorMessage, size, title } = props;

  switch (size) {
    case Size.small:
      return (<ErrorSmall message={errorMessage} />
      );
    case Size.medium:
    case Size.large:
    default:
      return (
        <ErrorView title={title}>
          <span>
            What is the error?
          </span>
          <ErrorReason>
            {errorMessage}
          </ErrorReason>
        </ErrorView>
      );
  }
}

ErrorViewDefault.defaultProps = {
  size: Size.large,
  title: 'Data Error',
};

export default ErrorViewDefault;
