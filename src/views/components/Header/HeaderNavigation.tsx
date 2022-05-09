import React, { useContext } from 'react';
import { BsGithub, BsBug, BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { GlobalContext } from '@/context/globalContext';
import { GlobalActionsEnum, ThemeModeEnum } from '@/context/types/enums';
import NavigationLink from '@/components/NavigationLink';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { NavLinksContainer, NavContainer, NavigationOptional } from './styles/headerStyles';

export default function HeaderNavigation() {
  const { state, dispatch } = useContext(GlobalContext);
  const wh00tState = useWh00tWebsocket().state;
  const githubUrl: string = 'https://github.com/roboto84';
  const iconPadding: string = '4px 8px';
  const iconFontSize: string = '23px';
  const borderRadius: string = '3px';

  return (
    <NavLinksContainer>
      <NavContainer>
        <NavigationLink borderRadius={borderRadius} linkTo="/">/</NavigationLink>
        <NavigationLink borderRadius={borderRadius} linkTo="/air">Air</NavigationLink>
        <NavigationLink borderRadius={borderRadius} linkTo="/lexicon">Lexicon</NavigationLink>
        <NavigationLink
          borderRadius={borderRadius}
          alert={wh00tState.wh00tInternalAlert}
          linkTo="/wh00t"
        >
          wh00t
        </NavigationLink>
        <NavigationOptional>
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
        </NavigationOptional>
      </NavContainer>
    </NavLinksContainer>
  );
}
