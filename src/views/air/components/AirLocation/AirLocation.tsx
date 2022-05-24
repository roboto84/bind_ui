import React from 'react';
import { AirLocationContainer } from './airLocationStyles';

type AirLocationProps = {
  contents: string
}

export function AirLocation(props: AirLocationProps) {
  const { contents } = props;
  return (
    <AirLocationContainer margin="0 0 0 20px" borderRadius="5px">
      {contents}
    </AirLocationContainer>
  );
}
