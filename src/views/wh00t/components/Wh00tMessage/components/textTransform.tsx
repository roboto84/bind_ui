import { noneTokenTextTransform } from '@/views/wh00t/utils/utils';
import { randomUuid } from '@/utils/utils';
import {
  BoldText,
  CodeBlock,
  ItalicText, TextMessage,
} from '@/views/wh00t/components/Wh00tMessage/styles/wh00tMessageStyle';
import React from 'react';

const tokenTransforms: { [key: string]: Function } = {
  '`': (text: string): JSX.Element => (<code key={randomUuid()}>{text}</code>),
  '*': (text: string): JSX.Element => (<BoldText key={randomUuid()}>{text}</BoldText>),
  '_': (text: string): JSX.Element => (<ItalicText key={randomUuid()}>{text}</ItalicText>),
  '```': (text: string): JSX.Element => (<CodeBlock key={randomUuid()}>{text}</CodeBlock>),
};

export function noneTokenTextSpanElement(htmlText: string): JSX.Element {
  return (<TextMessage key={randomUuid()} dangerouslySetInnerHTML={{ __html: htmlText }} />);
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
    } else if ((transformTokens.indexOf(singleCharToken) > -1)
      || transformTokens.indexOf(triCharToken) > -1) {
      if (transformTokens.indexOf(triCharToken) > -1) {
        transformedTextArr.push(noneTokenTextSpanElement(
          noneTokenTextTransform(noneTokenText),
        ));
        noneTokenText = '';
        currentToken = triCharToken;
        i += 2;
        currentIndex = i;
      } else if ((i > 0 && text.charAt(i - 1) === ' ') || (i === 0)) {
        transformedTextArr.push(noneTokenTextSpanElement(
          noneTokenTextTransform(noneTokenText),
        ));
        noneTokenText = '';
        currentToken = singleCharToken;
        currentIndex = i;
      } else {
        noneTokenText = noneTokenText.concat(text.charAt(i));
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
