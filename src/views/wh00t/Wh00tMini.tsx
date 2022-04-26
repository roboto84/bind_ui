import React from 'react';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { Wh00tConnect } from '@/views/wh00t/components/Wh00tConnect/Wh00tConnect';
import { useLocation } from 'react-router-dom';
import { Wh00tActionsEnum } from '@/context/types/enums';
import { BsFillChatTextFill } from 'react-icons/bs';
import { ElementSize } from '@/views/wh00t/types/wh00tTypes';
import { Wh00tChatInput } from './components/Wh00tChatInput/Wh00tChatInput';
import { Wh00tMessages } from './components/Wh00tMessages/Wh00tMessages';
import {
  MinimizedWh00tButton,
  Wh00tMiniContainer,
  MinimizedWh00tIconContainer,
} from './styles/wh00tMiniStyle';
import { Wh00tChatHeader } from './components/Wh00tChatHeader/Wh00tChatHeader';

export function Wh00tMini() {
  const { pathname } = useLocation();
  const { state, dispatch } = useWh00tWebsocket();
  const isLargeWh00t: boolean = (pathname.includes('wh00t'));

  const wh00tMinimizeSwitch = () => {
    dispatch({
      type: Wh00tActionsEnum.MINIMIZED_SWITCH,
    });
  };

  if (isLargeWh00t) {
    return (<div />);
  }

  if (state.wh00tMinimizedSwitch) {
    return (
      <MinimizedWh00tButton onClick={wh00tMinimizeSwitch}>
        <MinimizedWh00tIconContainer>
          <BsFillChatTextFill />
        </MinimizedWh00tIconContainer>
      </MinimizedWh00tButton>
    );
  }

  if (state.wh00tWebSocket.wh00tIsConnected) {
    return (
      <Wh00tMiniContainer>
        <Wh00tChatHeader
          headerSize={ElementSize.SMALL}
          headerButtons={{
            maximize: true,
            minimize: true,
            disconnect: true,
          }}
          minimizeSwitch={wh00tMinimizeSwitch}
        />
        <Wh00tMessages showBackgroundImage={false} />
        <Wh00tChatInput />
      </Wh00tMiniContainer>
    );
  }
  return (
    <Wh00tMiniContainer>
      <Wh00tChatHeader
        headerSize={ElementSize.SMALL}
        headerButtons={{
          maximize: true,
          minimize: true,
          disconnect: false,
        }}
        minimizeSwitch={wh00tMinimizeSwitch}
      />
      <Wh00tConnect />
    </Wh00tMiniContainer>
  );
}
