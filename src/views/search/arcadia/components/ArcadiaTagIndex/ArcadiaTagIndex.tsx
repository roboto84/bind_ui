import { ArcadiaTagIndexProps } from '@/views/search/arcadia/types/arcadiaTypes';
import React from 'react';
import {
  TagIndexDefault,
} from '@/views/search/arcadia/components/ArcadiaTagIndex/components/TagIndexDefault';
import { useQuery, UseQueryResult } from 'react-query';
import { ArcadiaTagsApiResult } from '@/dataSource/types/apiTypes';
import { arcadiaApiEndpoints } from '@/dataSource/restApis/bindRestApi';
import Loader from '@/components/Misc/Loader';
import { ArcadiaContainer } from '@/views/search/arcadia/styles/arcadiaStyles';
import ErrorViewDefault from '@/components/Error/ErrorViewDefault';
import camelcaseKeys from 'camelcase-keys';

export function ArcadiaTagIndex(props: ArcadiaTagIndexProps) {
  const { searchTerm, navigate } = props;
  const arcadiaTagsHook: UseQueryResult<ArcadiaTagsApiResult> = useQuery<ArcadiaTagsApiResult,
    Error>(arcadiaApiEndpoints.tagsIndex);

  if (arcadiaTagsHook.isLoading) {
    return <Loader />;
  }

  if (arcadiaTagsHook.isError) {
    const { message } = arcadiaTagsHook.error as Error;

    return (
      <ArcadiaContainer>
        <ErrorViewDefault errorMessage={message} />
      </ArcadiaContainer>
    );
  }

  const arcadiaTagsResponse: ArcadiaTagsApiResult = camelcaseKeys<ArcadiaTagsApiResult>(
    arcadiaTagsHook.data,
    { deep: true },
  );

  const { subjectIndex } = arcadiaTagsResponse;

  if (searchTerm !== '') {
    for (const key of Object.keys(subjectIndex)) {
      subjectIndex[key] = subjectIndex[key].filter(
        (value: string) => (value.includes(searchTerm)),
      );
    }
  }

  const arcadiaTagsArrayRepresentation: [string, string[]][] = Object.entries(
    subjectIndex,
  );

  return (
    <TagIndexDefault
      arcadiaTags={arcadiaTagsArrayRepresentation}
      navigate={navigate}
    />
  );
}
