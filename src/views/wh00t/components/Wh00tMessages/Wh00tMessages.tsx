import React, { useEffect, useRef } from 'react';
import { Wh00tMessage } from '@/views/wh00t/components/Wh00tMessage/Wh00tMessage';
import { Wh00tMessagePackage } from '@/context/types/wh00tContextTypes';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { Wh00tMessagesProps } from '@/views/wh00t/types/wh00tTypes';
import { Wh00tActionsEnum } from '@/context/types/enums';
import { Wh00tMessagesContainer } from './styles/wh00tMessagesStyle';

export function Wh00tMessages(props: Wh00tMessagesProps) {
  const { showBackgroundImage } = props;
  const { state, dispatch } = useWh00tWebsocket();
  const { currentChatMessage, historicalChatMessages } = state;
  const { clientId } = state.wh00tWebSocket;
  const endOfMessages: React.MutableRefObject<any> = useRef(null);
  const internalWh00tAlertOff = () => {
    dispatch({ type: Wh00tActionsEnum.INTERNAL_ALERT_OFF });
  };
  const scrollToBottom = () => {
    setTimeout(() => {
      endOfMessages.current?.scrollIntoView();
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
    document.addEventListener('focus', internalWh00tAlertOff);
    if (document.hasFocus()) {
      state.wh00tNotifier.stopDocumentTitleNotification();
      internalWh00tAlertOff();
    }
    setTimeout(() => {
      internalWh00tAlertOff();
    }, 750);
    return () => {
      document.removeEventListener('focus', internalWh00tAlertOff);
    };
  }, [currentChatMessage]);

  return (
    <Wh00tMessagesContainer showBackgroundImage={showBackgroundImage}>
      {
        historicalChatMessages.map((historicalMessage: Wh00tMessagePackage, index: number) => (
          <Wh00tMessage
            key={'wh00tMessage-'.concat(String(index))}
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
