import React from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { ArcadiaTags, ArcadiaTagsApiResult } from '@/dataSource/types/apiTypes';
import { arcadiaApiEndpoints } from '@/dataSource/restApis/robotoRestApi';
import Loader from '@/components/Misc/Loader';
import ErrorViewDefault from '@/components/Error/ErrorViewDefault';
import camelcaseKeys from 'camelcase-keys';
import { TagsSection } from '@/views/search/styles/searchStyles';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ArcadiaProps } from '@/views/search/types/searchTypes';
import { ArcadiaTagIndex } from '@/views/search/arcadia/components/ArcadiaTagIndex/ArcadiaTagIndex';
import ArcadiaSearchHome from '@/views/search/arcadia/components/ArcadiaSearchHome';
import { AlphabetHeader, ArcadiaContainer } from './styles/arcadiaStyles';

export function Arcadia(props: ArcadiaProps) {
  const { subTag, setContext } = props;
  const navigate: NavigateFunction = useNavigate();
  const arcadiaTagsHook: UseQueryResult<ArcadiaTagsApiResult> = useQuery<ArcadiaTagsApiResult,
    Error>(arcadiaApiEndpoints.tags);

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

  const onTagClick = (term: string) => {
    setContext(term);
    navigate(`/search/system/arcadia/data?word=${term}`);
  };
  const arcadiaTagsResponse: ArcadiaTagsApiResult = camelcaseKeys<ArcadiaTagsApiResult>(
    arcadiaTagsHook.data,
    { deep: true },
  );

  const arcadiaTags: ArcadiaTags = arcadiaTagsResponse.arcadiaSubjects;
  let tagsMatchIsEmpty = false;
  let viewBody: JSX.Element;

  if (subTag === '') {
    viewBody = <ArcadiaSearchHome arcadiaTags={arcadiaTags} onTagClick={onTagClick} />;
  } else {
    tagsMatchIsEmpty = true;
    for (const key of Object.keys(arcadiaTags)) {
      arcadiaTags[key] = arcadiaTags[key].filter((value: string) => (value.includes(subTag)));
      tagsMatchIsEmpty = tagsMatchIsEmpty && (arcadiaTags[key].length === 0);
    }

    viewBody = tagsMatchIsEmpty
      ? (
        <TagsSection withShadow>
          <AlphabetHeader>No Matching Tags Found</AlphabetHeader>
        </TagsSection>
      )
      : (
        <ArcadiaSearchHome
          tagSearchTerm={subTag}
          arcadiaTags={arcadiaTags}
          onTagClick={onTagClick}
        />
      );
  }

  return (
    <ArcadiaContainer>
      {viewBody}
    </ArcadiaContainer>
  );
}
