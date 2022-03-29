import React from 'react';
import {
  EmojiContainer,
  EmojiSelectorContainer,
} from '@/views/wh00t/components/Wh00tChatInput/styles/wh00tChatInputStyle';
import { CssDisplay, EmojiSelectorProps } from '@/views/wh00t/types/wh00tTypes';
import { EmojiOptions } from '@/views/wh00t/utils/emojis';

export function EmojiSelector(props: EmojiSelectorProps) {
  const { display, addTextCallback } = props;
  const EmojiKeys: string[] = Object.keys(EmojiOptions);

  return (
    <EmojiSelectorContainer display={display ? CssDisplay.flex : CssDisplay.none}>
      {EmojiKeys.map((EmojiKey:string, index:number) => (
        <EmojiContainer
          key={'emojiOption'.concat(String(index))}
          title={EmojiKey}
          onClick={() => (addTextCallback(EmojiOptions[EmojiKey]))}
        >
          {EmojiOptions[EmojiKey]}
        </EmojiContainer>
      ))}
    </EmojiSelectorContainer>
  );
}
