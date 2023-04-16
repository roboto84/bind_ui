import React from 'react';
import { useLexiconWordSearch } from '@/dataSource/reactQueryHooks';
import Loader from '@/components/Misc/Loader';
import { ErrorViewDefault } from '@/components/Error/ErrorViewDefault';
import { LexiconCardViewProps, WordDefinition } from '@/views/search/lexicon/types/lexiconTypes';
import camelcaseKeys from 'camelcase-keys';
import {
  LexiconSpellingIssue,
} from '@/views/search/lexicon/components/lexiconSpellingIssue/LexiconSpellingIssue';
import {
  LexiconSearchDefinition,
} from '@/views/search/lexicon/components/lexiconSearchDefinition/LexiconSearchDefinition';
import { Size } from '@/types';

export function LexiconCardView(props: LexiconCardViewProps) {
  const { searchTerm } = props;
  const { data, error, isLoading, isError } = useLexiconWordSearch(searchTerm);

  if (isLoading) {
    return (<Loader size={Size.small} />);
  }
  if (isError) {
    return (<ErrorViewDefault errorMessage={error.message} />);
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
