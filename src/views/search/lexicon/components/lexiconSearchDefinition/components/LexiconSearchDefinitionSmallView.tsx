import { LexiconSearchDefinitionSmallViewProps } from '@/views/search/lexicon/types/lexiconTypes';
import React from 'react';
import { WordOfDay } from '@/views/search/lexicon/components/WordOfDay';

export function LexiconSearchDefinitionSmallView(props: LexiconSearchDefinitionSmallViewProps) {
  const { wordDefinition } = props;
  return (
    <div>
      <WordOfDay wordDefinition={wordDefinition} />
    </div>
  );
}
