import React, { useState } from 'react';
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
import {
  LexiconConfirmSearch,
} from '@/views/search/lexicon/components/lexiconCard/LexiconConfirmSearch';
import UnderConstruction from '@/components/UnderConstruction/UnderConstruction';

export function LexiconCard(props: LexiconCardProps) {
  const { searchTerm } = props;
  const [shouldSearchDefinition, setShouldSearchDefinition] = useState<boolean>(false);
  const searchDictionary = shouldDictionarySearch(searchTerm);

  // TODO: Under construction due to Oxford API update
  // <LexiconCardView searchTerm={searchTerm} />
  const mainBody: JSX.Element = shouldSearchDefinition && searchDictionary
    ? <LexiconCardView searchTerm={searchTerm} />
    : <LexiconConfirmSearch shouldSearch={setShouldSearchDefinition} />;

  if (searchDictionary) {
    return (
      <SearchAddRecordContainer>
        <GeneralDictionarySection>
          <AlphabetHeader>Dictionary</AlphabetHeader>
          <LexiconCardContainer>
            <IconContainer>
              <GiSpellBook />
            </IconContainer>
            <LexiconOverviewContainer>
              {mainBody}
            </LexiconOverviewContainer>
          </LexiconCardContainer>
        </GeneralDictionarySection>
      </SearchAddRecordContainer>
    );
  }
  return <div />;
}
