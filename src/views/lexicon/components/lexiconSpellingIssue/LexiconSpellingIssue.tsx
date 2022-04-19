import React from 'react';
import {
  ErrorDisplay, ErrorMessage, SpellingSuggestion, SpellingSuggestions,
} from '@/views/lexicon/components/lexiconSpellingIssue/styles/LexiconSpellingIssuesStyle';
import { WordSearchDefinitionProps } from '@/views/lexicon/types/lexiconTypes';
import { LatestWordListContainer } from '@/views/lexicon/styles/lexiconHomeStyles';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { LexiconContainer } from '../../styles/lexiconStyles';

export function LexiconSpellingIssue(props: WordSearchDefinitionProps) {
  const { wordDefinition } = props;
  const navigate: NavigateFunction = useNavigate();

  return (
    <LexiconContainer>
      <ErrorDisplay>Not Found</ErrorDisplay>
      <ErrorMessage>
        perhaps &quot;{wordDefinition.word}&quot; was misspelled, here are some suggestions:
      </ErrorMessage>
      <SpellingSuggestions>
        <LatestWordListContainer>
          { wordDefinition.spellingSuggestions.map((word: string) => (
            <SpellingSuggestion
              key={'spelling-suggestion-'.concat(word)}
              className="word_list_item"
              onClick={() => navigate(`/lexicon/search?word=${word}`)}
            >
              {word}
            </SpellingSuggestion>
          )) }
        </LatestWordListContainer>
      </SpellingSuggestions>
    </LexiconContainer>
  );
}
