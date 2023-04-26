import React from 'react';
import { LatestWordList } from '@/views/search/lexicon/components/LatestWordList';
import { useQuery, UseQueryResult } from 'react-query';
import Loader from '@/components/Misc/Loader';
import camelcaseKeys from 'camelcase-keys';
import { lexiconApiEndpoints } from '@/dataSource/restApis/robotoRestApi';
import { ArcadiaTags, LatestWordListApiResult } from '@/dataSource/types/apiTypes';
import ErrorViewDefault from '@/components/Error/ErrorViewDefault';
import {
  AlphabetHeader,
  ArcadiaSearchHomeContainer,
  ArcInitialDataContainer,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import {
  ArcadiaSearchHomeProps,
} from '@/views/search/arcadia/types/arcadiaTypes';
import { LexiconCard } from '@/views/search/lexicon/components/lexiconCard/LexiconCard';
import TagGroup from '@/views/search/arcadia/components/TagGroup';
import { randomIntFromInterval } from '@/utils/utils';
import { GeneralSection } from '@/views/search/styles/searchStyles';
import { LexiconCardContainer } from '@/views/search/lexicon/styles/lexiconCardStyles';
import { WordDefinition } from '../../lexicon/types/lexiconTypes';

const searchTags = (tagSearchTerm: string, arcadiaTags: ArcadiaTags): string[] => {
  const arcadiaTagsArrayRepresentation: [string, string[]][] = Object.entries(arcadiaTags);
  return arcadiaTagsArrayRepresentation.map(
    ([key, tags]: [string, string[]]) => (
      tags.filter((value: string) => value.indexOf(tagSearchTerm) > -1)
    ),
  ).reduce(
    (previousValue:string[], currentValue: string[]) => ([...previousValue, ...currentValue]),
  );
};

const generateRandomTags = (arcadiaTags: ArcadiaTags): string[] => {
  const arcadiaTagsArrayRepresentation: [string, string[]][] = Object.entries(arcadiaTags);
  return arcadiaTagsArrayRepresentation.map(
    ([key, tags]: [string, string[]]) => (tags[randomIntFromInterval(0, tags.length - 1)]),
  ).filter((value: string) => value.length > 0);
};

function ArcadiaSearchHome(props: ArcadiaSearchHomeProps) {
  const { tagSearchTerm, arcadiaTags, onTagClick } = props;
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
      <ArcadiaSearchHomeContainer>
        <ErrorViewDefault errorMessage={errorMessage} />
      </ArcadiaSearchHomeContainer>
    );
  }

  const wordOfDayResponse: WordDefinition = camelcaseKeys<WordDefinition>(
    wordOfDayHook.data,
    { deep: true },
  );
  const wordListResult: LatestWordListApiResult = camelcaseKeys<LatestWordListApiResult>(
    latestWordsHook.data,
  );

  const isSearch: boolean = tagSearchTerm.length > 0;
  let relevantTags: string[];
  let tagGroupTitle: string;
  let highlightTags: boolean = false;

  if (isSearch) {
    relevantTags = searchTags(tagSearchTerm, arcadiaTags);
    tagGroupTitle = 'Tag Search';
    highlightTags = true;
  } else {
    relevantTags = generateRandomTags(arcadiaTags);
    tagGroupTitle = 'Interesting Tags';
  }

  return (
    <>
      <ArcInitialDataContainer>
        <LexiconCard
          title="Word of the Day"
          searchTerm={wordOfDayResponse.word}
        />
        <TagGroup
          highlight={highlightTags}
          title={tagGroupTitle}
          tagList={relevantTags}
          onTagClick={onTagClick}
        />
      </ArcInitialDataContainer>
      <GeneralSection>
        <AlphabetHeader>Latest {wordListResult.lexiconWords.length} Words Added</AlphabetHeader>
        <LexiconCardContainer>
          <LatestWordList wordList={wordListResult.lexiconWords} />
        </LexiconCardContainer>
      </GeneralSection>
    </>
  );
}

ArcadiaSearchHome.defaultProps = {
  tagSearchTerm: '',
};

export default ArcadiaSearchHome;
