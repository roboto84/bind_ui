import React from 'react';
import { Throbber } from '@/components/Misc/Throbber';
import { LoaderContainer } from '@/styles/loaderStyle';
import { Size } from '@/types';

type LoaderProps = {
  size ?: Size
}

function Loader(props: LoaderProps) {
  const { size } = props;
  let loaderPadding: string;
  let loaderMargin: string;
  let borderThickness: string;
  let diameter: string;
  let speed: string;

  switch (size) {
    case Size.medium:
      borderThickness = '10px';
      diameter = '60px';
      speed = '1.75s';
      loaderPadding = '0';
      loaderMargin = '0';
      break;
    case Size.small:
      borderThickness = '8px';
      diameter = '30px';
      speed = '1.5s';
      loaderPadding = '0';
      loaderMargin = '20px';
      break;
    default:
      borderThickness = '16px';
      diameter = '120px';
      speed = '2s';
      loaderPadding = '15vh';
      loaderMargin = 'auto';
  }

  return (
    <LoaderContainer padding={loaderPadding} margin={loaderMargin}>
      <Throbber borderThickness={borderThickness} diameter={diameter} speed={speed} />
    </LoaderContainer>
  );
}

Loader.defaultProps = {
  size: Size.large,
};

export default Loader;
