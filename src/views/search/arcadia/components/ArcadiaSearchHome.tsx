import React, { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import Loader from '@/components/Misc/Loader';
import camelcaseKeys from 'camelcase-keys';
import { arcadiaApiEndpoints, lexiconApiEndpoints } from '@/dataSource/restApis/bindRestApi';
import {
  ArcadiaSummaryApiResult,
  ArcadiaTagsWithCounts,
  LexiconSummaryApiResult,
} from '@/dataSource/types/apiTypes';
import ErrorViewDefault from '@/components/Error/ErrorViewDefault';
import {
  ArcadiaSearchHomeContainer,
  ArcInitialDataContainer,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import { ArcadiaSearchHomeProps } from '@/views/search/arcadia/types/arcadiaTypes';
import LexiconCard from '@/views/search/lexicon/components/lexiconCard/LexiconCard';
import TagGroup from '@/views/search/arcadia/components/TagGroup';
import { ArcadiaGraphCoherence } from '@/views/search/arcadia/components/ArcadiaGraphCoherence';
import { LexiconDictionarySize } from '@/views/search/lexicon/components/LexiconDictionarySize';
import { ArcRandomRecord } from '@/views/search/arcadia/components/ArcRandomRecord';
import { SearchContext } from '@/context/searchContext';
import { SearchActionsEnum } from '@/context/types/enums';

export function ArcadiaSearchHome(props: ArcadiaSearchHomeProps) {
  const { navigate } = props;
  const { state, dispatch } = useContext(SearchContext);
  const lexiconSummary: UseQueryResult<LexiconSummaryApiResult> = useQuery<LexiconSummaryApiResult,
    Error>(lexiconApiEndpoints.summary);
  const arcadiaSummary: UseQueryResult<ArcadiaSummaryApiResult> = useQuery<ArcadiaSummaryApiResult,
    Error>(arcadiaApiEndpoints.summary);
  const arcadiaSubjectsWithCounts: UseQueryResult<ArcadiaTagsWithCounts> = useQuery<
    ArcadiaTagsWithCounts, Error>(arcadiaApiEndpoints.tagsWithCounts);

  if (lexiconSummary.isLoading || arcadiaSummary.isLoading || arcadiaSubjectsWithCounts.isLoading) {
    return <Loader />;
  }

  if (lexiconSummary.isError || arcadiaSummary.isError || arcadiaSubjectsWithCounts.isError) {
    const message = 'Error has occurred getting system summaries';
    return (
      <ArcadiaSearchHomeContainer>
        <ErrorViewDefault errorMessage={message} />
      </ArcadiaSearchHomeContainer>
    );
  }

  const lexiconSummaryResponse: LexiconSummaryApiResult = camelcaseKeys<LexiconSummaryApiResult>(
    lexiconSummary.data,
    { deep: true },
  );

  const arcadiaSummaryResponse: ArcadiaSummaryApiResult = camelcaseKeys<ArcadiaSummaryApiResult>(
    arcadiaSummary.data,
    { deep: true },
  );

  const arcadiaSubjectsResponse: ArcadiaTagsWithCounts = camelcaseKeys<ArcadiaTagsWithCounts>(
    arcadiaSubjectsWithCounts.data,
    { deep: true },
  );

  // TODO: Update this to not use a setTimeout
  if (state.tags.length !== arcadiaSubjectsResponse.numberOfSubjects) {
    setTimeout(() => {
      dispatch(
        { type: SearchActionsEnum.LOAD_TAGS, value: arcadiaSubjectsResponse.subjectsCounts },
      );
    }, 0);
  }

  const relevantTags: string[] = arcadiaSummaryResponse.randomSubjectSample;
  const tagGroupTitle: string = 'Interesting Tags';
  const highlightTags: boolean = false;

  return (
    <>
      <ArcInitialDataContainer>
        <TagGroup
          highlight={highlightTags}
          title={tagGroupTitle}
          tagList={relevantTags}
          navigate={navigate}
        />
      </ArcInitialDataContainer>
      <ArcInitialDataContainer>
        <ArcadiaGraphCoherence
          numberOfSubjects={arcadiaSummaryResponse.numberOfSubjects}
          numberOfUrlRecords={arcadiaSummaryResponse.numberOfUrlRecords}
        />
        <ArcRandomRecord
          record={arcadiaSummaryResponse.randomItemSample}
          navigate={navigate}
        />
      </ArcInitialDataContainer>
      <ArcInitialDataContainer>
        <LexiconDictionarySize size={lexiconSummaryResponse.numberOfWords} />
        <LexiconCard
          title="Word of the Day"
          definition={lexiconSummaryResponse.wordOfDay}
        />
      </ArcInitialDataContainer>
    </>
  );
}
