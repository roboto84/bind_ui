import React, { KeyboardEventHandler, MouseEventHandler, useRef, useState } from 'react';
import { MdOutlineTagFaces } from 'react-icons/md';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { EmojiSelector } from '@/views/wh00t/components/Wh00tChatInput/components/EmojiSelector';
import { useClickOutside } from '@/hooks/useClickOutside';
import {
  ChatSendButton,
  ChatInputButtonContainer,
  EmojiButton,
  EmojiUnitContainer,
  Wh00tChatForm,
  Wh00tChatInputContainer,
  Wh00tInputTextArea,
} from './styles/wh00tChatInputStyle';

export function Wh00tChatInput() {
  const [localMessageHistory, setLocalMessageHistory] = useState<string[]>([]);
  const [emojiSelectorDisplay, setEmojiSelectorDisplay] = useState<boolean>(false);
  const { ref } = useClickOutside(() => {
    setEmojiSelectorDisplay(false);
  });
  const { state } = useWh00tWebsocket();
  const textAreaRef = useRef(null);
  const keyLog: any = {};
  let localMessageHistoryIterator: number = 0;
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
      const newLocalHistory = [...localMessageHistory];
      newLocalHistory.unshift(textAreaRef.current.value);
      setLocalMessageHistory(newLocalHistory);
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

      if (localMessageHistory.length > 0) {
        if (keyLog.ArrowUp === true) {
          if (keyLog.Control === true) {
            if (localMessageHistory[localMessageHistoryIterator] === textAreaRef.current.value) {
              localMessageHistoryIterator = localMessageHistoryIterator === (
                localMessageHistory.length - 1) ? 0 : localMessageHistoryIterator + 1;
            }
            textAreaRef.current.value = localMessageHistory[localMessageHistoryIterator];
            localMessageHistoryIterator = localMessageHistoryIterator === (
              localMessageHistory.length - 1) ? 0 : localMessageHistoryIterator + 1;
            event.preventDefault();
          } else if (textAreaRef.current.value === '') {
            [textAreaRef.current.value] = localMessageHistory;
            event.preventDefault();
          }
        } else if (keyLog.ArrowDown === true && keyLog.Control === true) {
          if (localMessageHistory[localMessageHistoryIterator] === textAreaRef.current.value) {
            localMessageHistoryIterator = localMessageHistoryIterator === 0
              ? (localMessageHistory.length - 1) : localMessageHistoryIterator - 1;
          }
          textAreaRef.current.value = localMessageHistory[localMessageHistoryIterator];
          localMessageHistoryIterator = localMessageHistoryIterator === 0
            ? (localMessageHistory.length - 1) : localMessageHistoryIterator - 1;
          event.preventDefault();
        }
      }

      if ('Control' in keyLog && keyLog.Control === false) {
        localMessageHistoryIterator = 0;
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
          placeholder="type a message, or '/help'"
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
            <EmojiButton
              title="Emoji Selector"
              padding={iconPadding}
              fontSize={iconFontSize}
              onClick={() => emojiMenuSwitch()}
              className={emojiSelectorDisplay && 'active'}
            >
              <MdOutlineTagFaces />
            </EmojiButton>
          </EmojiUnitContainer>
          <ChatSendButton title="Send Message" onClick={sendMessage}>
            Send
          </ChatSendButton>
        </ChatInputButtonContainer>
      </Wh00tChatForm>
    </Wh00tChatInputContainer>
  );
}
