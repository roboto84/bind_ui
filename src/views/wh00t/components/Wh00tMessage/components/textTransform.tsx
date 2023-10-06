import { noneTokenTextTransform } from '@/views/wh00t/utils/utils';
import { randomUuid } from '@/utils/utils';
import {
  BoldText,
  CodeBlock,
  ItalicText, TextMessage,
} from '@/views/wh00t/components/Wh00tMessage/styles/wh00tMessageStyle';
import React from 'react';
import { BaseObjectOfFunctions } from '@/dataSource/types/apiTypes';

const tokenTransforms: BaseObjectOfFunctions = {
  '`': (text: string): JSX.Element => (<code key={randomUuid()}>{text}</code>),
  '*': (text: string): JSX.Element => (<BoldText key={randomUuid()}>{text}</BoldText>),
  '_': (text: string): JSX.Element => (<ItalicText key={randomUuid()}>{text}</ItalicText>),
  '```': (text: string): JSX.Element => (<CodeBlock key={randomUuid()}>{text}</CodeBlock>),
};

export function noneTokenTextSpanElement(htmlText: string): JSX.Element {
  return (<TextMessage key={randomUuid()} dangerouslySetInnerHTML={{ __html: htmlText }} />);
}

export function textTransform(text: string): JSX.Element[] {
  const transformTokens: string[] = Object.keys(tokenTransforms);
  const transformedTextArr: JSX.Element[] = [];
  let noneTokenText: string = '';
  let currentToken: string = null;
  let currentIndex: number = -1;

  for (let i = 0; i < text.length; i += 1) {
    const singleCharToken: string = text.charAt(i);
    const triCharToken:string = i < (text.length - 2) ? text.substring(i, i + 3) : '';

    if (currentToken !== null) {
      if (currentToken === singleCharToken || currentToken === triCharToken) {
        transformedTextArr.push(tokenTransforms[currentToken](text.substring(currentIndex + 1, i)));
        i = currentToken === triCharToken ? i + 2 : i;
        currentToken = null;
        currentIndex = -1;
      } else if (i === (text.length - 1)) {
        transformedTextArr.push(noneTokenTextSpanElement(
          currentToken.concat(text.substring(currentIndex + 1, i + 1)),
        ));
      }
    } else if ((transformTokens.indexOf(singleCharToken) > -1)
      || transformTokens.indexOf(triCharToken) > -1) {
      if ((i > 0 && (text.charAt(i - 1) === ' ' || text.charAt(i - 1) === '\n')) || (i === 0)) {
        transformedTextArr.push(noneTokenTextSpanElement(noneTokenTextTransform(noneTokenText)));
        currentToken = transformTokens.indexOf(triCharToken) > -1 ? triCharToken : singleCharToken;
        i = transformTokens.indexOf(triCharToken) > -1 ? i + 2 : i;
        currentIndex = i;
        noneTokenText = '';
      } else {
        noneTokenText = noneTokenText.concat(text.charAt(i));
      }
    } else {
      noneTokenText = noneTokenText.concat(text.charAt(i));
    }
  }
  transformedTextArr.push(noneTokenTextSpanElement(noneTokenTextTransform(noneTokenText)));
  return transformedTextArr;
}
