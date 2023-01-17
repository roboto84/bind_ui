import React from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { ArcadiaTagsApiResult } from '@/dataSource/types/apiTypes';
import { arcadiaApiEndpoints } from '@/dataSource/restApis/robotoRestApi';
import Loader from '@/components/Misc/Loader';
import { ErrorViewDefault } from '@/components/Error/ErrorViewDefault';
import camelcaseKeys from 'camelcase-keys';
import { HomeSection, LatestTagsListContainer, Tag } from '@/views/search/styles/searchStyles';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ArcadiaProps } from '@/views/search/types/searchTypes';
import { AlphabetHeader, ArcadiaContainer } from './styles/arcadiaStyles';

export function Arcadia(props: ArcadiaProps) {
  const { subTag } = props;
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

  const arcadiaTagsResponse: any = camelcaseKeys<any>(
    arcadiaTagsHook.data,
    { deep: true },
  );

  const arcadiaTags: any = arcadiaTagsResponse.arcadiaSubjects;
  let tagsMatchIsEmpty = false;
  if (subTag !== '') {
    tagsMatchIsEmpty = true;
    for (const key of Object.keys(arcadiaTags)) {
      arcadiaTags[key] = arcadiaTags[key].filter((value: string) => (value.includes(subTag)));
      tagsMatchIsEmpty = tagsMatchIsEmpty && (arcadiaTags[key].length === 0);
    }
  }

  let viewBody: JSX.Element = (
    <HomeSection withShadow>
      <AlphabetHeader>No Matching Results Found</AlphabetHeader>
    </HomeSection>
  );

  if (!tagsMatchIsEmpty) {
    viewBody = (
      <div>
        {
            Object.entries(arcadiaTags).map(([key, tags]: [string, []]) => {
              if (tags.length > 0) {
                return (
                  <HomeSection withShadow key={'section'.concat(key)}>
                    <AlphabetHeader>{key.toUpperCase()}</AlphabetHeader>
                    <LatestTagsListContainer>
                      {
                        tags.map((tag: string) => (
                          <Tag
                            onClick={() => navigate(`/search/system/arcadia/data?word=${tag}`)}
                            key={'tagListItem'.concat(tag)}
                          >
                            {tag}
                          </Tag>
                        ))
                      }
                    </LatestTagsListContainer>
                  </HomeSection>
                );
              }
              return (<div key={'section'.concat(key)} />);
            })
        }
      </div>
    );
  }

  return (
    <ArcadiaContainer>
      {viewBody}
    </ArcadiaContainer>
  );
}
