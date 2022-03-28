import React from 'react';
import { Wh00tMessageProps } from '@/views/wh00t/types/wh00tTypes';
import { Wh00tBaseUserImage } from '@/views/wh00t/components/Wh00tMessage/components/Wh00tBaseUserImage';
import { simpleDateTimeFormat } from '@/utils/formatting';
import {
  Wh00tMessageText,
} from '@/views/wh00t/components/Wh00tMessage/components/Wh00tMessageText';
import {
  Wh00tMessageBody,
  Wh00tMessageTime,
  Wh00tMessageTitle,
  Wh00tMessageUsername,
  Wh00tMessageWrapper,
} from './styles/wh00tMessageStyle';

export function Wh00tMessage(props: Wh00tMessageProps) {
  const { currentClientId, messagePackage } = props;

  if (messagePackage) {
    const usernameColor: string = currentClientId === messagePackage.username
      ? 'wh00tUsernameColor' : 'wh00tOtherUsernamesColor';
    const messageTimeParts: string[] = messagePackage.time.split(' ');
    const messageTime: string = messageTimeParts[0] === simpleDateTimeFormat()
      ? messageTimeParts[1]
      : messagePackage.time;

    return (
      <Wh00tMessageWrapper>
        <Wh00tBaseUserImage
          currentClientId={currentClientId}
          username={messagePackage.username}
        />
        <Wh00tMessageBody>
          <Wh00tMessageTitle>
            <Wh00tMessageUsername className={usernameColor}>
              {`${messagePackage.username} `}
            </Wh00tMessageUsername>
            <Wh00tMessageTime>
              {`${messageTime}`}
            </Wh00tMessageTime>
          </Wh00tMessageTitle>
          <Wh00tMessageText messageText={messagePackage.message} />
        </Wh00tMessageBody>
      </Wh00tMessageWrapper>
    );
  }

  return (<div />);
}
