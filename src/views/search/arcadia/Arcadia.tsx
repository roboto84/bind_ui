import React from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { ArcadiaTagsApiResult } from '@/dataSource/types/apiTypes';
import { arcadiaApiEndpoints } from '@/dataSource/restApis/robotoRestApi';
import Loader from '@/components/Misc/Loader';
import ErrorViewDefault from '@/components/Error/ErrorViewDefault';
import camelcaseKeys from 'camelcase-keys';
import { LatestTagsListContainer, Tag, TagsSection } from '@/views/search/styles/searchStyles';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ArcadiaProps } from '@/views/search/types/searchTypes';
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
    <TagsSection withShadow>
      <AlphabetHeader>No Matching Tags Found</AlphabetHeader>
    </TagsSection>
  );

  if (!tagsMatchIsEmpty) {
    viewBody = (
      <div>
        {
            Object.entries(arcadiaTags).map(([key, tags]: [string, []]) => {
              if (tags.length > 0) {
                return (
                  <TagsSection withShadow key={'section'.concat(key)}>
                    <AlphabetHeader>{key.toUpperCase()}</AlphabetHeader>
                    <LatestTagsListContainer>
                      {
                        tags.map((tag: string) => (
                          <Tag
                            onClick={() => onTagClick(tag)}
                            key={'tagListItem'.concat(tag)}
                          >
                            {tag}
                          </Tag>
                        ))
                      }
                    </LatestTagsListContainer>
                  </TagsSection>
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
