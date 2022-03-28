import { Wh00tMessageTextProps } from '@/views/wh00t/types/wh00tTypes';
import { isImageLink, noneTokenTextTransform } from '@/views/wh00t/utils';
import {
  Wh00tImage,
  Wh00tMessageTextContainer,
} from '@/views/wh00t/components/Wh00tMessage/styles/wh00tMessageStyle';
import React from 'react';

const tokenTransforms: { [key: string]: Function } = {
  '`': (text: string): JSX.Element => (<code>{text}</code>),
  '*': (text: string): JSX.Element => (<span className="bold">{text}</span>),
  '_': (text: string): JSX.Element => (<span className="italic">{text}</span>),
  '```': (text: string): JSX.Element => (<div className="codeBlock">{text}</div>),
};

function imageGenerator(imageLink: string): JSX.Element {
  return <Wh00tImage alt="chat" width="400" src={imageLink} />;
}

function noneTokenTextSpanElement(htmlText: string): JSX.Element {
  return (<span dangerouslySetInnerHTML={{ __html: htmlText }} />);
}

export function textTransform(text: string): JSX.Element[] {
  const transformTokens = Object.keys(tokenTransforms);
  const transformedTextArr: JSX.Element[] = [];
  let noneTokenText: string = '';
  let currentToken: string = null;
  let currentIndex: number = -1;

  for (let i = 0; i < text.length; i += 1) {
    const singleCharToken: string = text.charAt(i);
    const triCharToken:string = i < (text.length - 2)
      ? ''.concat(text[i], text[i + 1], text[i + 2])
      : '';

    if (currentToken !== null) {
      let textSubstring: string;
      if (currentToken === singleCharToken || currentToken === triCharToken) {
        if (currentToken === triCharToken) {
          textSubstring = text.substring(currentIndex + 1, i);
          i += 2;
        } else if (currentToken === singleCharToken) {
          textSubstring = text.substring(currentIndex + 1, i);
        }
        transformedTextArr.push(tokenTransforms[currentToken](textSubstring));
        currentToken = null;
        currentIndex = -1;
      } else if (i === (text.length - 1)) {
        transformedTextArr.push(noneTokenTextSpanElement(
          currentToken.concat(text.substring(currentIndex + 1, i + 1)),
        ));
      }
    } else if (transformTokens.indexOf(singleCharToken) > -1
      || transformTokens.indexOf(triCharToken) > -1) {
      transformedTextArr.push(noneTokenTextSpanElement(
        noneTokenTextTransform(noneTokenText),
      ));
      noneTokenText = '';

      if (transformTokens.indexOf(triCharToken) > -1) {
        currentToken = triCharToken;
        i += 2;
        currentIndex = i;
      } else if (transformTokens.indexOf(singleCharToken) > -1) {
        currentToken = singleCharToken;
        currentIndex = i;
      }
    } else if (i === (text.length - 1)) {
      transformedTextArr.push(noneTokenTextSpanElement(
        noneTokenTextTransform(noneTokenText.concat(text.charAt(i))),
      ));
    } else {
      noneTokenText = noneTokenText.concat(text.charAt(i));
    }
  }
  return transformedTextArr;
}

export function Wh00tMessageText(props: Wh00tMessageTextProps) {
  const { messageText } = props;
  let messageImage: JSX.Element = null;
  let messageTextView: JSX.Element[];
  if (isImageLink(messageText)) {
    messageTextView = [<span>${noneTokenTextTransform(messageText)}&#10;</span>];
    messageImage = imageGenerator(messageText);
  } else {
    messageTextView = textTransform(messageText);
  }

  return (
    <Wh00tMessageTextContainer>
      <div>{messageTextView}</div>
      <div>{messageImage}</div>
    </Wh00tMessageTextContainer>
  );
}
