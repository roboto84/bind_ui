import React from 'react';
import NavigationLinks from '@/views/components/Header/NavigationLinks';
import { HeaderContainer } from './styles/headerStyles';
import HeaderTitle from './HeaderTitle';
import { HeaderProps } from './types/headerTypes';

export default function Header(props: HeaderProps) {
  const { title, subtitle } = props;

  return (
    <HeaderContainer>
      <HeaderTitle title={title} subtitle={subtitle} />
      <NavigationLinks />
    </HeaderContainer>
  );
}
