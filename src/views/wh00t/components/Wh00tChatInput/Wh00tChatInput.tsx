import React, { KeyboardEventHandler, MouseEventHandler, useRef, useState } from 'react';
import { MdOutlineTagFaces } from 'react-icons/md';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { EmojiSelector } from '@/views/wh00t/components/Wh00tChatInput/components/EmojiSelector';
import { useClickOutside } from '@/hooks/useClickOutside';
import {
  ChatInputButton,
  ChatInputButtonContainer,
  EmojiUnitContainer,
  Wh00tChatForm,
  Wh00tChatInputContainer,
  Wh00tInputTextArea,
} from './styles/wh00tChatInputStyle';

export function Wh00tChatInput() {
  const [lastMessage, setLastMessage] = useState<string>('');
  const [emojiSelectorDisplay, setEmojiSelectorDisplay] = useState<boolean>(false);
  const { ref } = useClickOutside(() => {
    setEmojiSelectorDisplay(false);
  });
  const { state } = useWh00tWebsocket();
  const textAreaRef = useRef(null);
  const keyLog: any = {};
  const iconPadding: string = '11px 7px 0px 7px';
  const iconFontSize: string = '25px';

  const appendToCurrentMessageText: CallableFunction = (text: string) => {
    const element = textAreaRef.current;
    element.value = element.value.substring(0, element.selectionStart)
      .concat(text, element.value.substring(element.selectionStart));
  };

  const emojiMenuSwitch: CallableFunction = () => {
    if (emojiSelectorDisplay === false) {
      setEmojiSelectorDisplay(true);
    } else {
      setEmojiSelectorDisplay(false);
    }
  };

  const sendWebSocketMessage: Function = (message: string) => {
    if (message !== '') {
      state.wh00tWebSocket.sendMessage(message);
      setLastMessage(textAreaRef.current.value);
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
      if (keyLog.ArrowUp === true) {
        if (textAreaRef.current.value === '') {
          textAreaRef.current.value = lastMessage;
          event.preventDefault();
        }
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
        <ChatInputButtonContainer>
          <EmojiUnitContainer ref={ref}>
            <EmojiSelector
              display={emojiSelectorDisplay}
              addTextCallback={appendToCurrentMessageText}
            />
            <ChatInputButton
              padding={iconPadding}
              fontSize={iconFontSize}
              onClick={() => emojiMenuSwitch()}
              className={emojiSelectorDisplay && 'active'}
            >
              <MdOutlineTagFaces />
            </ChatInputButton>
          </EmojiUnitContainer>
          <ChatInputButton onClick={sendMessage}>
            Send
          </ChatInputButton>
        </ChatInputButtonContainer>
      </Wh00tChatForm>
    </Wh00tChatInputContainer>
  );
}
