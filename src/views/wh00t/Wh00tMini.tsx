import React from 'react';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import Wh00tConnect from '@/views/wh00t/components/Wh00tConnect/Wh00tConnect';
import { useLocation } from 'react-router-dom';
import { Wh00tActionsEnum, Wh00tMessageTypeEnum } from '@/context/types/enums';
import { BsFillChatTextFill } from 'react-icons/bs';
import { ElementSize } from '@/views/wh00t/types/wh00tTypes';
import { Size } from '@/types';
import Wh00tConnectionStatus from '@/views/wh00t/components/Wh00tConnect/Wh00tConnectStatus';
import { Wh00tChatInput } from './components/Wh00tChatInput/Wh00tChatInput';
import { Wh00tMessages } from './components/Wh00tMessages/Wh00tMessages';
import {
  MinimizedWh00tButton,
  MinimizedWh00tIconContainer,
  Wh00tMiniContainer,
} from './styles/wh00tMiniStyle';
import { Wh00tChatHeader } from './components/Wh00tChatHeader/Wh00tChatHeader';

export function Wh00tMini() {
  const { pathname } = useLocation();
  const { state, dispatch } = useWh00tWebsocket();
  const isLargeWh00t: boolean = (pathname.includes('chat'));
  const wh00tMinimizeSwitch = () => {
    dispatch({
      source: Wh00tMessageTypeEnum.LOCAL,
      type: Wh00tActionsEnum.MINIMIZED_SWITCH,
    });
  };
  const miniChatHeader: JSX.Element = (
    <Wh00tChatHeader
      headerSize={ElementSize.SMALL}
      headerButtons={{
        maximize: true,
        minimize: true,
        disconnect: true,
      }}
      minimizeSwitch={wh00tMinimizeSwitch}
    />
  );

  if (isLargeWh00t) {
    return (<div />);
  }

  if (state.wh00tMinimizedSwitch) {
    return (
      <MinimizedWh00tButton title="Wh00t Mini Chat" onClick={wh00tMinimizeSwitch}>
        <MinimizedWh00tIconContainer>
          <BsFillChatTextFill />
        </MinimizedWh00tIconContainer>
      </MinimizedWh00tButton>
    );
  }

  if (state.wh00tIsConnected) {
    return (
      <Wh00tMiniContainer>
        {miniChatHeader}
        <Wh00tMessages showBackgroundImage={false} />
        <Wh00tChatInput />
      </Wh00tMiniContainer>
    );
  } if (state.wh00tIsConnecting || state.wh00tConnectionError) {
    return (
      <Wh00tMiniContainer>
        {miniChatHeader}
        <Wh00tConnectionStatus size={Size.small} connectionStatus="Connecting" />
      </Wh00tMiniContainer>
    );
  }

  return (
    <Wh00tMiniContainer>
      {miniChatHeader}
      <Wh00tConnect size={Size.small} />
    </Wh00tMiniContainer>
  );
}
