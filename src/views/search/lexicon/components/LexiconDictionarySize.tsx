import {
  AlphabetHeader,
  ArcadiaStatsContainer,
  ArcadiaStatsDataContainer,
  ArcadiaStatsLabel,
  ArcadiaStatsCircle,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import React from 'react';
import { LexiconDictionarySizeProps } from '@/views/search/lexicon/types/lexiconTypes';

export function LexiconDictionarySize(props: LexiconDictionarySizeProps) {
  const { size } = props;
  return (
    <ArcadiaStatsContainer>
      <AlphabetHeader>Dictionary Size</AlphabetHeader>
      <ArcadiaStatsDataContainer>
        <ArcadiaStatsCircle>{size}</ArcadiaStatsCircle>
        <ArcadiaStatsLabel>Words</ArcadiaStatsLabel>
      </ArcadiaStatsDataContainer>
    </ArcadiaStatsContainer>
  );
}
