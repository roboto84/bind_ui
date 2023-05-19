import { AlphabetHeader } from '@/views/search/arcadia/styles/arcadiaStyles';
import React from 'react';
import { LexiconDictionarySizeProps } from '@/views/search/lexicon/types/lexiconTypes';
import {
  LexiconDictionarySizeContainer, LexiconDictionarySizeValueContainer,
} from '@/views/search/lexicon/styles/lexiconCardStyles';

export function LexiconDictionarySize(props: LexiconDictionarySizeProps) {
  const { size } = props;
  return (
    <LexiconDictionarySizeContainer>
      <AlphabetHeader>Dictionary Word Size</AlphabetHeader>
      <LexiconDictionarySizeValueContainer>
        {size} Words
      </LexiconDictionarySizeValueContainer>
    </LexiconDictionarySizeContainer>
  );
}
