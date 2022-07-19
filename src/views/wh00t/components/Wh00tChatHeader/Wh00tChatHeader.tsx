import React from 'react';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { FiLogOut, FiMaximize, FiMinimize } from 'react-icons/fi';
import { BsFillChatTextFill } from 'react-icons/bs';
import {
  Wh00tChannelTitle,
  Wh00tChatHeaderButton,
  Wh00tChatHeaderContainer,
  Wh00tChatHeaderTitleContainer, Wh00tChatHeaderTitleIcon,
} from './styles/wh00tChatHeaderStyle';
import { ElementSize, Wh00tChatHeaderProps } from '../../types/wh00tTypes';

export function Wh00tChatHeader(props: Wh00tChatHeaderProps) {
  const { headerSize, headerButtons, minimizeSwitch } = props;
  const navigate: NavigateFunction = useNavigate();
  const { state } = useWh00tWebsocket();
  let headerMargin: string = '0';
  let headerBorderRadius: string = '0';

  const wh00tDisconnect = () => {
    state.wh00tWebSocket.disconnectWebSocket();
  };

  const wh00tMinimizeSwitch = () => {
    minimizeSwitch();
  };

  const connectedTitle: JSX.Element = (
    <>
      <Wh00tChannelTitle>
        <Wh00tChatHeaderTitleIcon title="Chat Room">
          <BsFillChatTextFill />
        </Wh00tChatHeaderTitleIcon>
        /general
      </Wh00tChannelTitle>
      <span>
        {' as '}
      </span>
      <Wh00tChannelTitle>
        {state.wh00tWebSocket.clientId}
      </Wh00tChannelTitle>
    </>
  );

  const headerTitle: JSX.Element = state.wh00tIsConnected
    ? connectedTitle : <span>Disconnected</span>;

  if (headerSize === ElementSize.LARGE) {
    headerMargin = '0 5px';
    headerBorderRadius = '3px';
  }

  const minimizeButton: JSX.Element = headerButtons.minimize ? (
    <Wh00tChatHeaderButton title="Minimize Chat" onClick={wh00tMinimizeSwitch}>
      <FiMinimize />
    </Wh00tChatHeaderButton>
  ) : <span />;

  const maximizeButton: JSX.Element = headerButtons.maximize ? (
    <Wh00tChatHeaderButton title="Maximize Chat" onClick={() => navigate('/wh00t')}>
      <FiMaximize />
    </Wh00tChatHeaderButton>
  ) : <span />;

  const disconnectButton: JSX.Element = headerButtons.disconnect ? (
    <Wh00tChatHeaderButton title="Logout of Chat" onClick={wh00tDisconnect}>
      <FiLogOut />
    </Wh00tChatHeaderButton>
  ) : <span />;

  return (
    <Wh00tChatHeaderContainer margin={headerMargin} borderRadius={headerBorderRadius}>
      <Wh00tChatHeaderTitleContainer>
        {headerTitle}
      </Wh00tChatHeaderTitleContainer>
      <div>
        {minimizeButton}
        {maximizeButton}
        {disconnectButton}
      </div>
    </Wh00tChatHeaderContainer>
  );
}
