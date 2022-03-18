import React, { KeyboardEventHandler, MouseEventHandler, useRef } from 'react';
import { MdOutlineTagFaces } from 'react-icons/md';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import {
  ChatInputButton,
  Wh00tChatForm,
  Wh00tChatInputContainer,
  Wh00tInputTextArea,
} from './styles/wh00tChatInputStyle';

export function Wh00tChatInput() {
  const { state } = useWh00tWebsocket();
  const textAreaRef = useRef(null);
  const keyLog: any = {};
  const iconPadding: string = '11px 7px 0px 7px';
  const iconFontSize: string = '25px';

  const sendWebSocketMessage = (message: string) => {
    if (message !== '') {
      state.wh00tWebSocket.sendMessage(message);
      textAreaRef.current.value = '';
      textAreaRef.current.focus();
    }
  };

  const sendMessage: MouseEventHandler = (event) => {
    sendWebSocketMessage(textAreaRef.current.value);
    event.preventDefault();
  };

  const keyHandler: KeyboardEventHandler = (event) => {
    keyLog[event.key] = (event.type === 'keydown');
    if (event.type === 'keydown') {
      if ((!keyLog.Shift || keyLog.Shift === false) && keyLog.Enter === true) {
        sendWebSocketMessage(textAreaRef.current.value);
        event.preventDefault();
      }
    }
  };

  return (
    <Wh00tChatInputContainer>
      <Wh00tChatForm>
        <Wh00tInputTextArea
          rows={1}
          ref={textAreaRef}
          className="messageInput"
          placeholder="Message"
          id="messageText"
          onKeyDown={keyHandler}
          onKeyUp={keyHandler}
          autoComplete="off"
          autoFocus
        />
        <ChatInputButton padding={iconPadding} fontSize={iconFontSize} onClick={sendMessage}>
          <MdOutlineTagFaces />
        </ChatInputButton>
        <ChatInputButton onClick={sendMessage}>
          Send
        </ChatInputButton>
      </Wh00tChatForm>
    </Wh00tChatInputContainer>
  );
}
