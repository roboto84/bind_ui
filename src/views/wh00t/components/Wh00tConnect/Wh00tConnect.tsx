import React from 'react';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { getLocalStorage } from '@/utils/localStorage';
import { LocalStorageEnum } from '@/context/types/enums';
import {
  ChatConnectButton, Wh00tConnectContainer,
  Wh00tConnectInput, Wh00tConnectSection,
  Wh00tConnectTitle, Wh00tConnectTitleDescription,
} from './styles/wh00tConnectStyle';

export function Wh00tConnect() {
  const { state } = useWh00tWebsocket();
  const clientIdInputRef: React.MutableRefObject<any> = React.useRef();
  const getSavedUsername = () => {
    const username: string = getLocalStorage(LocalStorageEnum.USERNAME);
    if (username) {
      return username;
    }
    return '';
  };

  const connectToWh00t = () => {
    state.wh00tWebSocket.connectWebSocket(clientIdInputRef.current.value);
  };

  const clientIdInputKeys = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      connectToWh00t();
    }
  };

  return (
    <Wh00tConnectContainer>
      <Wh00tConnectSection>
        <Wh00tConnectTitle>
          <span>
            Username
          </span>
          <Wh00tConnectTitleDescription>
            (optional)
          </Wh00tConnectTitleDescription>
        </Wh00tConnectTitle>
        <Wh00tConnectInput
          type="text"
          placeholder="Username"
          ref={clientIdInputRef}
          onKeyUp={clientIdInputKeys}
          defaultValue={getSavedUsername()}
          autoFocus
        />
        <ChatConnectButton onClick={connectToWh00t}>
          Connect
        </ChatConnectButton>
      </Wh00tConnectSection>
    </Wh00tConnectContainer>
  );
}
