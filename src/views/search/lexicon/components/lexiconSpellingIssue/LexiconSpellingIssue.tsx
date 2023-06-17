import React from 'react';
import { Link } from 'react-router-dom';
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
import { Size } from '@/types';
import { ArcadiaSearchHomeContainer } from '@/views/search/arcadia/styles/arcadiaStyles';

export function LexiconSpellingIssue(props: WordSearchDefinitionProps) {
  const { wordDefinition, size } = props;
  const navLocation: string = '/search/system/lexicon/definition?word=';

  const mainBody: JSX.Element = (
    <>
      <SpellingErrorDisplay size={size}>Word Not Found</SpellingErrorDisplay>
      <SpellingErrorMessage size={size}>
        perhaps &quot;{wordDefinition.word}&quot; was misspelled, here are some suggestions:
      </SpellingErrorMessage>
      <SpellingSuggestions size={size}>
        <LatestWordListContainer>
          { wordDefinition.spellingSuggestions.map((word: string) => (
            <Link to={navLocation.concat(word)}>
              <SpellingSuggestion key={'spelling-suggestion-'.concat(word)}>
                {word}
              </SpellingSuggestion>
            </Link>
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
