import React from 'react';
import HeaderLinks from '@/views/components/Header/HeaderLinks';
import { NavLinksContainer, NavContainer } from './styles/headerStyles';

export default function HeaderNavigation() {
  return (
    <NavLinksContainer>
      <NavContainer>
        <HeaderLinks />
      </NavContainer>
    </NavLinksContainer>
  );
}
