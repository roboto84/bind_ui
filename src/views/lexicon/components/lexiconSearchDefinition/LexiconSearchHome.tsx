import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLexiconWordSearch } from '@/dataSource/reactQueryHooks';
import { SearchBar } from '@/views/lexicon/components/SearchBar';
import {
  LexiconSpellingIssue,
} from '@/views/lexicon/components/lexiconSpellingIssue/LexiconSpellingIssue';
import {
  LexiconSearchDefinition,
} from '@/views/lexicon/components/lexiconSearchDefinition/LexiconSearchDefinition';
import { Loader } from '@/components/Loader';
import { WordDefinition } from '@/views/lexicon/types/lexiconTypes';
import camelcaseKeys from 'camelcase-keys';
import { ErrorView } from '@/components/ErrorView';
import { LexiconContainer } from '../../styles/lexiconStyles';

export function LexiconSearchHome() {
  const [searchParams] = useSearchParams();
  const searchWord: string = searchParams.get('word');
  const { data, error, isLoading, isError } = useLexiconWordSearch(searchWord);

  if (isLoading) {
    return (
      <LexiconContainer>
        <Loader />
      </LexiconContainer>
    );
  }
  if (isError) {
    const errorMessage: string = error && error.message ? error.message : 'An error has occurred';
    return (
      <LexiconContainer>
        <ErrorView title="Error">
          <div>
            {errorMessage}
          </div>
        </ErrorView>
      </LexiconContainer>
    );
  }

  const wordSearchResponse: WordDefinition = camelcaseKeys<WordDefinition>(
    data,
    { deep: true },
  );

  if (!wordSearchResponse.definitionIsAcceptable) {
    return (
      <LexiconContainer>
        <SearchBar />
        <LexiconSpellingIssue wordDefinition={wordSearchResponse} />
      </LexiconContainer>
    );
  }

  return (
    <LexiconContainer>
      <SearchBar />
      <LexiconSearchDefinition wordDefinition={wordSearchResponse} />
    </LexiconContainer>
  );
}
