import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLexiconWordSearch } from '@/dataSource/reactQueryHooks';
import {
  LexiconSpellingIssue,
} from '@/views/search/lexicon/components/lexiconSpellingIssue/LexiconSpellingIssue';
import {
  LexiconSearchDefinition,
} from '@/views/search/lexicon/components/lexiconSearchDefinition/LexiconSearchDefinition';
import Loader from '@/components/Misc/Loader';
import { WordDefinition } from '@/views/search/lexicon/types/lexiconTypes';
import camelcaseKeys from 'camelcase-keys';
import { ErrorViewDefault } from '@/components/Error/ErrorViewDefault';
import { Size } from '@/types';
import { LexiconContainer } from '../../styles/lexiconStyles';

export function LexiconSearchHome() {
  const [searchParams] = useSearchParams();
  const searchWord: string = searchParams.get('word');
  const { data, error, isLoading, isError } = useLexiconWordSearch(searchWord);

  if (isLoading) {
    return (<Loader />);
  }
  if (isError) {
    return (<ErrorViewDefault errorMessage={error.message} />);
  }

  const wordSearchResponse: WordDefinition = camelcaseKeys<WordDefinition>(
    data,
    { deep: true },
  );

  if (!wordSearchResponse.definitionIsAcceptable) {
    return (
      <LexiconContainer>
        <LexiconSpellingIssue wordDefinition={wordSearchResponse} />
      </LexiconContainer>
    );
  }

  return (
    <LexiconContainer>
      <LexiconSearchDefinition wordDefinition={wordSearchResponse} />
    </LexiconContainer>
  );
}
