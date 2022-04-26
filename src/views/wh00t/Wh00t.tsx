import React from 'react';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { Wh00tConnect } from '@/views/wh00t/components/Wh00tConnect/Wh00tConnect';
import { ElementSize } from '@/views/wh00t/types/wh00tTypes';
import { Wh00tChatInput } from './components/Wh00tChatInput/Wh00tChatInput';
import { Wh00tMessages } from './components/Wh00tMessages/Wh00tMessages';
import { Wh00tBackground, Wh00tContainer } from './styles/wh00tStyles';
import { Wh00tChatHeader } from './components/Wh00tChatHeader/Wh00tChatHeader';

export function Wh00t() {
  const { state } = useWh00tWebsocket();
  if (state.wh00tWebSocket.wh00tIsConnected) {
    return (
      <Wh00tContainer>
        <Wh00tChatHeader
          headerSize={ElementSize.LARGE}
          headerButtons={{
            maximize: false,
            minimize: false,
            disconnect: true,
          }}
        />
        <Wh00tMessages showBackgroundImage />
        <Wh00tChatInput />
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
