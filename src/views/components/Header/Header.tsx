import React from 'react';
import NavigationLinks from '@/views/components/Header/NavigationLinks';
import { HeaderContainer } from './styles/headerStyles';
import HeaderTitle from './HeaderTitle';
import { HeaderProps } from './types/headerTypes';

export default function Header(props: HeaderProps) {
  const { title, secondaryTitle, subtitle } = props;

  return (
    <HeaderContainer>
      <HeaderTitle title={title} secondaryTitle={secondaryTitle} subtitle={subtitle} />
      <NavigationLinks />
    </HeaderContainer>
  );
}
