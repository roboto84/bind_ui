import React from 'react';
import HeaderLinks from '@/views/components/Header/HeaderLinks';
import { MobileNavContainer, NavLinksContainer } from './styles/headerStyles';

type MobileHeaderNavigationProps = {
  show: boolean
}

export default function MobileHeaderNavigation(props: MobileHeaderNavigationProps) {
  const { show } = props;
  let body: JSX.Element = <span />;

  if (show) {
    body = (
      <NavLinksContainer>
        <MobileNavContainer>
          <HeaderLinks />
        </MobileNavContainer>
      </NavLinksContainer>
    );
  }
  return body;
}
