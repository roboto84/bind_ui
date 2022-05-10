import React from 'react';
import { Throbber } from '@/components/Misc/Throbber';
import { LoaderContainer } from '@/styles/loaderStyle';

export function Loader() {
  return (
    <LoaderContainer>
      <Throbber />
    </LoaderContainer>
  );
}
