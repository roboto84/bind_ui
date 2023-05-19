import React from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import Loader from '@/components/Misc/Loader';
import camelcaseKeys from 'camelcase-keys';
import { arcadiaApiEndpoints, lexiconApiEndpoints } from '@/dataSource/restApis/bindRestApi';
import {
  ArcadiaSummaryApiResult,
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
import { searchTags } from '@/views/search/arcadia/utils';
import { ArcadiaGraphCoherence } from '@/views/search/arcadia/components/ArcadiaGraphCoherence';
import { LexiconDictionarySize } from '@/views/search/lexicon/components/LexiconDictionarySize';
import { ArcResult } from '@/views/search/arcadia/components/ArcResult/ArcResult';
import { ArcRandomRecord } from '@/views/search/arcadia/components/ArcRandomRecord';

function ArcadiaSearchHome(props: ArcadiaSearchHomeProps) {
  const { tagSearchTerm, onTagClick } = props;
  const lexiconSummary: UseQueryResult<LexiconSummaryApiResult> = useQuery<LexiconSummaryApiResult,
    Error>(lexiconApiEndpoints.summary);
  const arcadiaSummary: UseQueryResult<ArcadiaSummaryApiResult> = useQuery<ArcadiaSummaryApiResult,
    Error>(arcadiaApiEndpoints.summary);

  if (lexiconSummary.isLoading || arcadiaSummary.isLoading) {
    return <Loader />;
  }

  if (lexiconSummary.isError || arcadiaSummary.error) {
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

  const isSearch: boolean = tagSearchTerm.length > 0;
  let relevantTags: string[];
  let tagGroupTitle: string;
  let highlightTags: boolean = false;

  if (isSearch) {
    relevantTags = searchTags(tagSearchTerm, arcadiaSummaryResponse.subjects);
    tagGroupTitle = `Tag Search (${relevantTags.length})`;
    highlightTags = true;
  } else {
    relevantTags = arcadiaSummaryResponse.randomSubjectSample;
    tagGroupTitle = 'Interesting Tags';
  }

  return (
    <>
      <ArcInitialDataContainer>
        <TagGroup
          highlight={highlightTags}
          title={tagGroupTitle}
          tagList={relevantTags}
          onTagClick={onTagClick}
        />
        <LexiconCard
          title="Word of the Day"
          definition={lexiconSummaryResponse.wordOfDay}
        />
      </ArcInitialDataContainer>
      <ArcInitialDataContainer>
        <ArcadiaGraphCoherence
          numberOfSubjects={arcadiaSummaryResponse.numberOfSubjects}
          numberOfUrlRecords={arcadiaSummaryResponse.numberOfUrlRecords}
        />
        <LexiconDictionarySize size={lexiconSummaryResponse.numberOfWords} />
        <ArcRandomRecord
          record={{
            id: 3,
            timeStamp: '',
            data: 'google.com',
            tags: [],
            dataType: 'url',
            title: 'Temp',
            description: 'Doing stuff',
            image: '',
          }}
          onTagClick={onTagClick}
        />
      </ArcInitialDataContainer>
    </>
  );
}

ArcadiaSearchHome.defaultProps = {
  tagSearchTerm: '',
};

export default ArcadiaSearchHome;
