import React, { useState } from 'react';
import HeaderNavigation from '@/views/components/Header/HeaderNavigation';
import MobileHeaderNavigation from '@/views/components/Header/MobileHeaderNavigation';
import { CgMenu } from 'react-icons/cg';
import { VscClose } from 'react-icons/vsc';
import NavigationLink from '@/components/Nav/NavigationLink';
import { HeaderContainer, MobileNavigationMenuContainer } from './styles/headerStyles';
import HeaderTitle from './HeaderTitle';
import { HeaderProps } from './types/headerTypes';

export default function Header(props: HeaderProps) {
  const { title, secondaryTitle, subtitle } = props;
  const [menu, setMenu] = useState(false);
  const iconPadding: string = '4px 8px';
  const iconFontSize: string = '23px';
  const borderRadius: string = '3px';
  return (
    <>
      <HeaderContainer>
        <HeaderTitle title={title} secondaryTitle={secondaryTitle} subtitle={subtitle} />
        <HeaderNavigation />
        <MobileNavigationMenuContainer>
          <NavigationLink
            title={menu ? 'Close Menu' : 'Show Menu'}
            callBack={() => setMenu(!menu)}
            borderRadius={borderRadius}
            padding={iconPadding}
            fontSize={iconFontSize}
          >
            {menu ? <VscClose /> : <CgMenu />}
          </NavigationLink>
        </MobileNavigationMenuContainer>
      </HeaderContainer>
      <MobileHeaderNavigation show={menu} />
    </>
  );
}
