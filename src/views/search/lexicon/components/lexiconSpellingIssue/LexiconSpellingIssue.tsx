import React from 'react';
import {
  SpellingErrorDisplay, SpellingErrorMessage, SpellingSuggestion, SpellingSuggestions,
} from '@/views/search/lexicon/components/lexiconSpellingIssue/styles/LexiconSpellingIssuesStyle';
import { WordSearchDefinitionProps } from '@/views/search/lexicon/types/lexiconTypes';
import { LatestWordListContainer, LexiconSection } from '@/views/search/lexicon/styles/lexiconHomeStyles';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { LexiconContainer } from '../../styles/lexiconStyles';

export function LexiconSpellingIssue(props: WordSearchDefinitionProps) {
  const { wordDefinition } = props;
  const navigate: NavigateFunction = useNavigate();

  return (
    <LexiconContainer>
      <LexiconSection withShadow>
        <SpellingErrorDisplay>Not Found</SpellingErrorDisplay>
        <SpellingErrorMessage>
          perhaps &quot;{wordDefinition.word}&quot; was misspelled, here are some suggestions:
        </SpellingErrorMessage>
        <SpellingSuggestions>
          <LatestWordListContainer>
            { wordDefinition.spellingSuggestions.map((word: string) => (
              <SpellingSuggestion
                key={'spelling-suggestion-'.concat(word)}
                onClick={() => navigate(`/search/system/lexicon/definition?word=${word}`)}
              >
                {word}
              </SpellingSuggestion>
            )) }
          </LatestWordListContainer>
        </SpellingSuggestions>
      </LexiconSection>
    </LexiconContainer>
  );
}
