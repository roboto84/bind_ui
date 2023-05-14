import React, { useContext } from 'react';
import { BsGithub, BsBug, BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { GlobalContext } from '@/context/globalContext';
import { GlobalActionsEnum, ThemeModeEnum } from '@/context/types/enums';
import NavigationLink from '@/components/Nav/NavigationLink';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { NavigationOptional } from '@/views/components/Header/styles/headerStyles';

export default function HeaderLinks() {
  const { state, dispatch } = useContext(GlobalContext);
  const wh00tState = useWh00tWebsocket().state;
  const githubUrl: string = 'https://github.com/roboto84';
  const iconPadding: string = '4px 8px';
  const iconFontSize: string = '21px';
  const borderRadius: string = '3px';

  return (
    <>
      <NavigationOptional>
        <NavigationLink title="home" borderRadius={borderRadius} linkTo="/">/</NavigationLink>
      </NavigationOptional>
      <NavigationLink title="Air Weather" borderRadius={borderRadius} linkTo="/air">Air</NavigationLink>
      <NavigationLink title="Arcadia Search" borderRadius={borderRadius} linkTo="/search">Search</NavigationLink>
      <NavigationLink
        title="Wh00t Chat App"
        borderRadius={borderRadius}
        alert={wh00tState.wh00tInternalAlert}
        linkTo="/chat"
      >
        Chat
      </NavigationLink>
      {/* <NavigationLink
        title="Roboto Debug View"
        borderRadius={borderRadius}
        padding={iconPadding}
        fontSize={iconFontSize}
        linkTo="/debug"
      >
        <BsBug />
      </NavigationLink> */}
      <NavigationLink
        title={state.theme === ThemeModeEnum.LIGHT ? 'Dark Theme' : 'Light Theme'}
        borderRadius={borderRadius}
        padding={iconPadding}
        fontSize={iconFontSize}
        callBack={() => dispatch({ type: GlobalActionsEnum.TOGGLE_THEME })}
      >
        {state.theme === ThemeModeEnum.LIGHT ? <BsMoonFill /> : <BsFillSunFill />}
      </NavigationLink>
      <NavigationLink
        title="Project Github"
        borderRadius={borderRadius}
        padding={iconPadding}
        fontSize={iconFontSize}
        callBack={() => window.open(githubUrl, '_blank')}
      >
        <BsGithub />
      </NavigationLink>
    </>
  );
}
