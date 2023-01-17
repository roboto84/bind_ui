import React from 'react';
import { WordOfDay } from '@/views/search/lexicon/components/WordOfDay';
import { LatestWordList } from '@/views/search/lexicon/components/LatestWordList';
import { useQuery, UseQueryResult } from 'react-query';
import Loader from '@/components/Misc/Loader';
import camelcaseKeys from 'camelcase-keys';
import { lexiconApiEndpoints } from '@/dataSource/restApis/robotoRestApi';
import { LatestWordListApiResult } from '@/dataSource/types/apiTypes';
import { ErrorViewDefault } from '@/components/Error/ErrorViewDefault';
import { WordDefinition } from './types/lexiconTypes';
import { WordListSection, WordOfDaySection } from './styles/lexiconHomeStyles';
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
    let errorMessage: string = 'Unknown Error';
    if (latestWordsHook.isError) {
      const { message } = latestWordsHook.error as Error;
      errorMessage = message;
    } else if (wordOfDayHook.isError) {
      const { message } = wordOfDayHook.error as Error;
      errorMessage = message;
    }
    return (
      <LexiconContainer>
        <ErrorViewDefault errorMessage={errorMessage} />
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
      <WordOfDaySection withShadow>
        <h2>Word of the Day</h2>
        <WordOfDay wordDefinition={wordOfDayResponse} />
      </WordOfDaySection>
      <WordListSection withShadow>
        <h2>Latest 30 Words Searched</h2>
        <LatestWordList wordList={wordListResult.lexiconWords} />
      </WordListSection>
    </LexiconContainer>
  );
}
