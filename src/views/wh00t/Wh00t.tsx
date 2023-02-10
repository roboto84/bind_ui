import React from 'react';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import Wh00tConnect from '@/views/wh00t/components/Wh00tConnect/Wh00tConnect';
import { ElementSize, Wh00tProps } from '@/views/wh00t/types/wh00tTypes';
import Wh00tConnectionStatus from '@/views/wh00t/components/Wh00tConnect/Wh00tConnectStatus';
import {
  Wh00tActionsEnum,
  Wh00tMessageTypeEnum,
  Wh00tWindowStateEnum,
} from '@/context/types/enums';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Wh00tChatInput } from './components/Wh00tChatInput/Wh00tChatInput';
import { Wh00tMessages } from './components/Wh00tMessages/Wh00tMessages';
import { Wh00tBackground, Wh00tContainer } from './styles/wh00tStyles';
import { Wh00tChatHeader } from './components/Wh00tChatHeader/Wh00tChatHeader';

export function Wh00t(props: Wh00tProps) {
  const navigate: NavigateFunction = useNavigate();
  const { state, dispatch } = useWh00tWebsocket();
  const { windowControls } = props;
  const wh00tWindowSwitch = (newWindowState: Wh00tWindowStateEnum) => {
    if (newWindowState === Wh00tWindowStateEnum.MAX) {
      navigate('/chat');
    } else {
      dispatch({
        source: Wh00tMessageTypeEnum.LOCAL,
        type: Wh00tActionsEnum.WINDOW_MIN,
      });
    }
  };

  if (state.wh00tIsConnected) {
    return (
      <Wh00tContainer>
        <Wh00tChatHeader
          headerSize={ElementSize.LARGE}
          headerButtons={{
            maximize: windowControls,
            minimize: windowControls,
            disconnect: windowControls,
          }}
          windowSwitch={wh00tWindowSwitch}
        />
        <Wh00tMessages showBackgroundImage />
        <Wh00tChatInput />
      </Wh00tContainer>
    );
  } if (state.wh00tIsConnecting || state.wh00tConnectionError) {
    return (
      <Wh00tContainer>
        <Wh00tConnectionStatus connectionStatus="Connecting" />
      </Wh00tContainer>
    );
  }

  return (
    <Wh00tContainer>
      <Wh00tConnect />
      <Wh00tBackground />
    </Wh00tContainer>
  );
}
