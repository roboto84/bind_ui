import React from 'react';
import { useLexiconWordSearch } from '@/dataSource/reactQueryHooks';
import Loader from '@/components/Misc/Loader';
import ErrorViewDefault from '@/components/Error/ErrorViewDefault';
import { LexiconCardViewProps, WordDefinition } from '@/views/search/lexicon/types/lexiconTypes';
import camelcaseKeys from 'camelcase-keys';
import {
  LexiconSpellingIssue,
} from '@/views/search/lexicon/components/lexiconSpellingIssue/LexiconSpellingIssue';
import {
  LexiconSearchDefinition,
} from '@/views/search/lexicon/components/lexiconSearchDefinition/LexiconSearchDefinition';
import { Size } from '@/types';
import { LexiconSearchType } from '@/dataSource/types/apiTypes';
import { LexiconThrobberContainer } from '@/views/search/lexicon/styles/lexiconCardStyles';

export function LexiconCardView(props: LexiconCardViewProps) {
  const { searchTerm } = props;
  const {
    data, error, isLoading, isError,
  } = useLexiconWordSearch(searchTerm, LexiconSearchType.GLOBAL);

  if (isLoading) {
    return (
      <LexiconThrobberContainer>
        <Loader size={Size.small} />
      </LexiconThrobberContainer>
    );
  }
  if (isError) {
    const errorMessage: string = error
      ? error.message
      : 'Sorry about that, an error has occurred getting the data.';
    return (
      <ErrorViewDefault title="Data Issue" size={Size.small} errorMessage={errorMessage} />
    );
  }

  const wordSearchResponse: WordDefinition = camelcaseKeys<WordDefinition>(
    data,
    { deep: true },
  );

  if (!wordSearchResponse.definitionIsAcceptable) {
    return (<LexiconSpellingIssue size={Size.small} wordDefinition={wordSearchResponse} />);
  }

  return (<LexiconSearchDefinition size={Size.small} wordDefinition={wordSearchResponse} />);
}
