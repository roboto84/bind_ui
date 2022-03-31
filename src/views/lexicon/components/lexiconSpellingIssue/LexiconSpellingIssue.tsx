import React from 'react';
import {
  ErrorDisplay, ErrorMessage, SpellingSuggestions,
} from '@/views/lexicon/components/lexiconSpellingIssue/styles/LexiconSpellingIssuesStyle';
import { WordSearchDefinitionProps } from '@/views/lexicon/types/lexiconTypes';
import { WordListContainer } from '@/views/lexicon/styles/lexiconHomeStyles';
import { LexiconContainer } from '../../styles/lexiconStyles';

export function LexiconSpellingIssue(props: WordSearchDefinitionProps) {
  const { wordDefinition } = props;

  return (
    <LexiconContainer>
      <ErrorDisplay>Not Found</ErrorDisplay>
      <ErrorMessage>
        perhaps &quot;{wordDefinition.word}&quot; was misspelled, here are some suggestions:
      </ErrorMessage>
      <SpellingSuggestions>
        <WordListContainer>
          { wordDefinition.spellingSuggestions.map((word: string) => (
            <div key={'spelling-suggestion-'.concat(word)} className="word_list_item">
              {word}
            </div>
          )) }
        </WordListContainer>
      </SpellingSuggestions>
    </LexiconContainer>
  );
}
