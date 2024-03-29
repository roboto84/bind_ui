import React, { useEffect, useRef } from 'react';
import { Wh00tMessage } from '@/views/wh00t/components/Wh00tMessage/Wh00tMessage';
import {
  Wh00tExtendedMessagePackage,
} from '@/context/types/wh00tContextTypes';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { Wh00tMessagesProps } from '@/views/wh00t/types/wh00tTypes';
import { Wh00tActionsEnum, Wh00tMessageTypeEnum } from '@/context/types/enums';
import { Wh00tMessagesContainer } from './styles/wh00tMessagesStyle';

export function Wh00tMessages(props: Wh00tMessagesProps) {
  const { showBackgroundImage } = props;
  const { state, dispatch } = useWh00tWebsocket();
  const { currentChatMessage, historicalChatMessages } = state;
  const { clientId } = state.wh00tWebSocket;
  const endOfMessages: React.MutableRefObject<any> = useRef(null);
  const internalWh00tAlertOff = () => {
    dispatch({
      source: Wh00tMessageTypeEnum.LOCAL,
      type: Wh00tActionsEnum.INTERNAL_ALERT_OFF,
    });
  };
  const scrollToBottom = () => {
    Promise.all(Array.from(document.images).filter((img) => !img.complete).map(
      (img) => new Promise(
        // eslint-disable-next-line no-multi-assign,no-param-reassign
        (resolve) => { img.onload = img.onerror = resolve; },
      ),
    )).then(() => {
      setTimeout(() => {
        endOfMessages.current?.scrollIntoView();
      }, 200);
    });
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
        historicalChatMessages.map((
          historicalMessage: Wh00tExtendedMessagePackage,
          index: number,
        ) => (
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
