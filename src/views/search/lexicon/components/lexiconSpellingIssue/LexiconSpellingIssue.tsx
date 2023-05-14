import React from 'react';
import {
  SpellingErrorDisplay,
  SpellingErrorMessage,
  SpellingSuggestion,
  SpellingSuggestions,
} from '@/views/search/lexicon/components/lexiconSpellingIssue/styles/LexiconSpellingIssuesStyle';
import { WordSearchDefinitionProps } from '@/views/search/lexicon/types/lexiconTypes';
import {
  LatestWordListContainer,
  LexiconSection,
} from '@/views/search/lexicon/styles/lexiconHomeStyles';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Size } from '@/types';
import { ArcadiaSearchHomeContainer } from '@/views/search/arcadia/styles/arcadiaStyles';

export function LexiconSpellingIssue(props: WordSearchDefinitionProps) {
  const { wordDefinition, size } = props;
  const navigate: NavigateFunction = useNavigate();

  const mainBody: JSX.Element = (
    <>
      <SpellingErrorDisplay size={size}>Word Not Found</SpellingErrorDisplay>
      <SpellingErrorMessage size={size}>
        perhaps &quot;{wordDefinition.word}&quot; was misspelled, here are some suggestions:
      </SpellingErrorMessage>
      <SpellingSuggestions size={size}>
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
    </>
  );

  if (size === Size.small) {
    return (
      <ArcadiaSearchHomeContainer>
        {mainBody}
      </ArcadiaSearchHomeContainer>
    );
  }

  return (
    <ArcadiaSearchHomeContainer>
      <LexiconSection withShadow>
        {mainBody}
      </LexiconSection>
    </ArcadiaSearchHomeContainer>
  );
}
