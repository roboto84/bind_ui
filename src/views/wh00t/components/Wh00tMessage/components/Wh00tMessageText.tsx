import { Wh00tMessageTextProps } from '@/views/wh00t/types/wh00tTypes';
import { isImageLink, userIsBot } from '@/views/wh00t/utils/utils';
import {
  TextMessageContainer,
  Wh00tImage,
  Wh00tMessageTextContainer,
} from '@/views/wh00t/components/Wh00tMessage/styles/wh00tMessageStyle';
import React from 'react';
import { isSecretMessage } from '@/views/wh00t/utils/chatFlags';
import {
  noneTokenTextSpanElement,
  textTransform,
} from '@/views/wh00t/components/Wh00tMessage/components/textTransform';
import { Wh00tMessageTypeEnum } from '@/context/types/enums';

function imageGenerator(imageLink: string): JSX.Element {
  return (
    <a href={imageLink} target="_blank" rel="noreferrer">
      <Wh00tImage title={imageLink} alt="Chat_Image" src={imageLink} />
    </a>
  );
}

export function Wh00tMessageText(props: Wh00tMessageTextProps) {
  const { username, messageText, messageSource } = props;
  const messageIsHighlighted: boolean = (messageSource === Wh00tMessageTypeEnum.LOCAL)
    || userIsBot(username);
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
      <TextMessageContainer
        filterBlur={messageIsSecret}
        highlightMessage={messageIsHighlighted}
      >
        {messageTextView}
      </TextMessageContainer>
      {messageImage}
    </Wh00tMessageTextContainer>
  );
}
