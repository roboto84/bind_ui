import React from 'react';
import { Wh00tMessageProps } from '@/views/wh00t/types/wh00tTypes';
import { isImageLink, linkify } from '@/views/wh00t/utils';
import { Wh00tBaseUserImage } from '@/views/wh00t/components/Wh00tMessage/components/Wh00tBaseUserImage';
import { simpleDateTimeFormat } from '@/utils/formatting';
import {
  Wh00tImage,
  Wh00tMessageBody,
  Wh00tMessageText, Wh00tMessageTime, Wh00tMessageTitle, Wh00tMessageUsername,
  Wh00tMessageWrapper,
} from './styles/wh00tMessageStyle';

function imageGenerator(imageLink: string): JSX.Element {
  return <Wh00tImage alt="chat" width="400" src={imageLink} />;
}

export function Wh00tMessage(props: Wh00tMessageProps) {
  const { currentClientId, messagePackage } = props;

  if (messagePackage) {
    const usernameColor: string = currentClientId === messagePackage.username
      ? 'wh00tUsernameColor' : 'wh00tOtherUsernamesColor';
    const messageTimeParts: string[] = messagePackage.time.split(' ');
    const messageTime: string = messageTimeParts[0] === simpleDateTimeFormat()
      ? messageTimeParts[1]
      : messagePackage.time;
    let messageTextView: string;
    let messageImage: JSX.Element = null;
    if (isImageLink(messagePackage.message)) {
      messageTextView = `${linkify(messagePackage.message)}&#10;`;
      messageImage = imageGenerator(messagePackage.message);
    } else {
      messageTextView = linkify(messagePackage.message);
    }

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
          <Wh00tMessageText dangerouslySetInnerHTML={{ __html: messageTextView }} />
          <div>{messageImage}</div>
        </Wh00tMessageBody>
      </Wh00tMessageWrapper>
    );
  }

  return (<div />);
}
