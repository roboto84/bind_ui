import { Wh00tMessageTextProps } from '@/views/wh00t/types/wh00tTypes';
import { isImageLink } from '@/views/wh00t/utils/utils';
import {
  TextMessageContainer,
  Wh00tImage,
  Wh00tMessageTextContainer,
} from '@/views/wh00t/components/Wh00tMessage/styles/wh00tMessageStyle';
import React from 'react';
import { isSecretMessage } from '@/views/wh00t/utils/chatFlags';
import { noneTokenTextSpanElement, textTransform } from '@/views/wh00t/components/Wh00tMessage/components/textTransform';

function imageGenerator(imageLink: string): JSX.Element {
  return (
    <a href={imageLink} target="_blank" rel="noreferrer">
      <Wh00tImage alt="chat" src={imageLink} />
    </a>
  );
}

export function Wh00tMessageText(props: Wh00tMessageTextProps) {
  const { messageText } = props;
  let messageImage: JSX.Element = null;
  let messageTextView: JSX.Element[];
  let messageIsSecret: boolean = false;
  if (isImageLink(messageText)) {
    messageTextView = [noneTokenTextSpanElement('')];
    messageImage = imageGenerator(messageText);
  } else {
    messageIsSecret = isSecretMessage(messageText);
    messageTextView = textTransform(messageText);
  }

  return (
    <Wh00tMessageTextContainer>
      <TextMessageContainer filterBlur={messageIsSecret}>{messageTextView}</TextMessageContainer>
      <div>{messageImage}</div>
    </Wh00tMessageTextContainer>
  );
}
