import React from 'react';
import { AlphabetHeader } from '@/views/search/arcadia/styles/arcadiaStyles';
import { GiSpellBook } from 'react-icons/gi';
import { SearchAddRecordContainer } from '@/views/search/styles/searchStyles';
import {
  GeneralDictionarySection,
  IconContainer,
  LexiconCardContainer,
  LexiconOverviewContainer,
} from '@/views/search/lexicon/styles/lexiconCardStyles';
import { LexiconCardProps } from '@/views/search/lexicon/types/lexiconTypes';
import { LexiconCardView } from '@/views/search/lexicon/components/lexiconCard/LexiconCardView';
import { shouldDictionarySearch } from '@/views/search/arcadia/utils';

export function LexiconCard(props: LexiconCardProps) {
  const { searchTerm } = props;

  if (shouldDictionarySearch(searchTerm)) {
    return (
      <SearchAddRecordContainer>
        <GeneralDictionarySection>
          <AlphabetHeader>Dictionary</AlphabetHeader>
          <LexiconCardContainer>
            <IconContainer>
              <GiSpellBook />
            </IconContainer>
            <LexiconOverviewContainer>
              <LexiconCardView searchTerm={searchTerm} />
            </LexiconOverviewContainer>
          </LexiconCardContainer>
        </GeneralDictionarySection>
      </SearchAddRecordContainer>
    );
  }
  return <div />;
}
