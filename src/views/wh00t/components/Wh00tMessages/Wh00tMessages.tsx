import React, { useEffect, useRef } from 'react';
import { Wh00tMessage } from '@/views/wh00t/components/Wh00tMessage/Wh00tMessage';
import { Wh00tMessagePackage } from '@/context/types/wh00tContextTypes';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { Wh00tMessagesContainer } from './styles/wh00tMessagesStyle';

export function Wh00tMessages() {
  const { state } = useWh00tWebsocket();
  const { currentChatMessage, historicalChatMessages } = state;
  const { clientId } = state.wh00tWebSocket;
  const endOfMessages: React.MutableRefObject<any> = useRef(null);
  const scrollToBottom = () => {
    setTimeout(() => {
      endOfMessages.current?.scrollIntoView();
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
    if (document.hasFocus()) {
      state.wh00tNotifier.stopDocumentTitleNotification();
    }
  }, [currentChatMessage]);

  return (
    <Wh00tMessagesContainer>
      {
        historicalChatMessages.map((
          historicalMessage: Wh00tMessagePackage,
          index: number,
        ) => (
          <Wh00tMessage
            key={'wh00tMessage'.concat(String(index))}
            currentClientId={clientId}
            messagePackage={historicalMessage}
          />
        ))
      }
      <Wh00tMessage
        currentClientId={clientId}
        messagePackage={currentChatMessage}
      />
      <div ref={endOfMessages} />
    </Wh00tMessagesContainer>
  );
}
