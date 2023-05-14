import React from 'react';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { VscChromeMaximize, VscChromeMinimize, VscDiffRenamed } from 'react-icons/vsc';
import { BsFillChatTextFill } from 'react-icons/bs';
import {
  Wh00tWindowStateEnum,
} from '@/context/types/enums';
import {
  Wh00tChannelTitle, Wh00tChatHeaderButtonsContainer,
  Wh00tChatHeaderButton, Wh00tChatHeaderContainer,
  Wh00tChatHeaderTitleContainer, Wh00tChatHeaderTitleIcon,
} from './styles/wh00tChatHeaderStyle';
import { ElementSize, Wh00tChatHeaderProps } from '../../types/wh00tTypes';

export function Wh00tChatHeader(props: Wh00tChatHeaderProps) {
  const { headerSize, headerButtons, windowSwitch } = props;
  const { state } = useWh00tWebsocket();
  let headerMargin: string = '0';
  let headerBorderRadius: string = '3px';

  const wh00tDisconnect = () => {
    state.wh00tWebSocket.disconnectWebSocket();
  };

  const wh00tWindowSwitch = (newWindowState: Wh00tWindowStateEnum) => {
    windowSwitch(newWindowState);
  };

  const connectedTitle: JSX.Element = (
    <>
      <Wh00tChannelTitle>
        <Wh00tChatHeaderTitleIcon title="Chat Room">
          <BsFillChatTextFill />
        </Wh00tChatHeaderTitleIcon>
        /general
      </Wh00tChannelTitle>
      <li>as</li>
      <Wh00tChannelTitle>
        {state.wh00tWebSocket.clientId}
      </Wh00tChannelTitle>
    </>
  );

  const headerTitle: JSX.Element = state.wh00tIsConnected
    ? connectedTitle : <span>Disconnected</span>;

  if (headerSize === ElementSize.LARGE) {
    headerMargin = '0 5px';
  } else if (headerSize === ElementSize.MED) {
    headerMargin = '0';
    headerBorderRadius = '0';
  }

  const minimizeButton: JSX.Element = headerButtons.minimize ? (
    <Wh00tChatHeaderButton
      title="Minimize Chat"
      onClick={() => wh00tWindowSwitch(Wh00tWindowStateEnum.MIN)}
    >
      <VscChromeMinimize />
    </Wh00tChatHeaderButton>
  ) : undefined;

  const maximizeButton: JSX.Element = headerButtons.maximize ? (
    <Wh00tChatHeaderButton
      title="Maximize Chat"
      onClick={() => wh00tWindowSwitch(Wh00tWindowStateEnum.MAX)}
    >
      <VscChromeMaximize />
    </Wh00tChatHeaderButton>
  ) : undefined;

  const disconnectButton: JSX.Element = headerButtons.disconnect ? (
    <Wh00tChatHeaderButton title="Logout of Chat" onClick={wh00tDisconnect}>
      <VscDiffRenamed />
    </Wh00tChatHeaderButton>
  ) : undefined;

  return (
    <Wh00tChatHeaderContainer margin={headerMargin} borderRadius={headerBorderRadius}>
      <Wh00tChatHeaderTitleContainer>
        {headerTitle}
      </Wh00tChatHeaderTitleContainer>

      <Wh00tChatHeaderButtonsContainer>
        {minimizeButton}
        {maximizeButton}
        {disconnectButton}
      </Wh00tChatHeaderButtonsContainer>
    </Wh00tChatHeaderContainer>
  );
}
