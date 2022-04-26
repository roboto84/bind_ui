import React, { useContext } from 'react';
import { BsGithub, BsBug, BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { GlobalContext } from '@/context/globalContext';
import { GlobalActionsEnum, ThemeModeEnum } from '@/context/types/enums';
import { NavLinksContainer, NavContainer } from './styles/headerStyles';
import NavigationLink from '@/components/NavigationLink';

export default function HeaderNavigation() {
  const { state, dispatch } = useContext(GlobalContext);
  const githubUrl: string = 'https://github.com/roboto84';
  const iconPadding: string = '5px 10px';
  const iconFontSize: string = '25px';
  const borderRadius: string = '3px';

  return (
    <NavLinksContainer>
      <NavContainer>
        <NavigationLink borderRadius={borderRadius} linkTo="/">/</NavigationLink>
        <NavigationLink borderRadius={borderRadius} linkTo="/air">Air</NavigationLink>
        <NavigationLink borderRadius={borderRadius} linkTo="/lexicon">Lexicon</NavigationLink>
        <NavigationLink borderRadius={borderRadius} linkTo="/wh00t">wh00t</NavigationLink>
        <NavigationLink
          borderRadius={borderRadius}
          padding={iconPadding}
          fontSize={iconFontSize}
          linkTo="/debug"
        >
          <BsBug />
        </NavigationLink>
        <NavigationLink
          borderRadius={borderRadius}
          padding={iconPadding}
          fontSize={iconFontSize}
          callBack={() => dispatch({ type: GlobalActionsEnum.TOGGLE_THEME })}
        >
          {state.theme === ThemeModeEnum.LIGHT ? <BsMoonFill /> : <BsFillSunFill />}
        </NavigationLink>
        <NavigationLink
          borderRadius={borderRadius}
          padding={iconPadding}
          fontSize={iconFontSize}
          callBack={() => window.open(githubUrl, '_blank')}
        >
          <BsGithub />
        </NavigationLink>
      </NavContainer>
    </NavLinksContainer>
  );
}