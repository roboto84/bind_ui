import React from 'react';
import { WordOfDay } from '@/views/lexicon/components/WordOfDay';
import { LatestWordList } from '@/views/lexicon/components/LatestWordList';
import { useQuery, UseQueryResult } from 'react-query';
import { Loader } from '@/components/Loader';
import { SearchBar } from '@/views/lexicon/components/SearchBar';
import camelcaseKeys from 'camelcase-keys';
import { ErrorView } from '@/components/ErrorView';
import { lexiconApiEndpoints } from '@/dataSource/restApis/robotoRestApi';
import { LatestWordListApiResult } from '@/dataSource/types/apiTypes';
import { WordDefinition } from './types/lexiconTypes';
import { WordListSection, WordListContainer, WordOfDaySection } from './styles/lexiconHomeStyles';
import { LexiconContainer } from './styles/lexiconStyles';

export function Lexicon() {
  const latestWordsHook: UseQueryResult<LatestWordListApiResult> = useQuery<LatestWordListApiResult,
    Error>(lexiconApiEndpoints.latestWords);
  const wordOfDayHook: UseQueryResult<WordDefinition> = useQuery<WordDefinition,
    Error>(lexiconApiEndpoints.wordOfDay);

  if (latestWordsHook.isLoading || wordOfDayHook.isLoading) {
    return <Loader />;
  }

  if (latestWordsHook.isError || wordOfDayHook.isError) {
    return (
      <LexiconContainer>
        <SearchBar />
        <ErrorView title="Data Error">
          <div>Is it for latest words? {latestWordsHook.isError}</div>
          <div>What is the error?</div>
          <div>{latestWordsHook.error}</div>
          <div>Is it for word of the day? {wordOfDayHook.isError}</div>
          <div>What is the error?</div>
          <div>{wordOfDayHook.error}</div>
        </ErrorView>
      </LexiconContainer>
    );
  }

  const wordOfDayResponse: WordDefinition = camelcaseKeys<WordDefinition>(
    wordOfDayHook.data,
    { deep: true },
  );
  const wordListResult: LatestWordListApiResult = camelcaseKeys<LatestWordListApiResult>(
    latestWordsHook.data,
  );

  return (
    <LexiconContainer>
      <SearchBar />
      <WordOfDaySection>
        <h2>Word of Day</h2>
        <WordOfDay wordDefinition={wordOfDayResponse} />
      </WordOfDaySection>
      <WordListSection>
        <WordListContainer>
          <h2>Latest 30 Words Searched</h2>
          <LatestWordList wordList={wordListResult.lexiconWords} />
        </WordListContainer>
      </WordListSection>
    </LexiconContainer>
  );
}
