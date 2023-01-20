import React from 'react';
import { NavigateFunction, useNavigate, useSearchParams } from 'react-router-dom';
import { useArcadiaWordSearch } from '@/dataSource/reactQueryHooks';
import Loader from '@/components/Misc/Loader';
import { ErrorViewDefault } from '@/components/Error/ErrorViewDefault';
import camelcaseKeys from 'camelcase-keys';
import { HomeSection, LatestTagsListContainer, Tag } from '@/views/search/styles/searchStyles';
import {
  AlphabetHeader,
  ArcadiaContainer,
  ArcResultTimeStamp,
  SubTagHeader,
} from './styles/arcadiaStyles';

export function ArcadiaSearch() {
  const navigate: NavigateFunction = useNavigate();
  const [searchParams] = useSearchParams();
  const searchWord: string = searchParams.get('word');
  const { data, error, isLoading, isError } = useArcadiaWordSearch(searchWord);

  if (isLoading) {
    return (<Loader />);
  }
  if (isError) {
    return (<ErrorViewDefault errorMessage={error.message} />);
  }

  const wordSearchResponse: any = camelcaseKeys<any>(
    data,
    { deep: true },
  );

  const { searchResults } = wordSearchResponse;
  const { similarTags } = wordSearchResponse;

  const tagComparison = similarTags && similarTags.length > 0
    ? (
      <HomeSection withShadow>
        <AlphabetHeader>Similar Tags</AlphabetHeader>
        <LatestTagsListContainer>
          {
            similarTags.map((tag: string) => (
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
    )
    : <div />;

  const mainNode = searchResults.mainNode
    ? searchResults.mainNode.urls.map(
      (url: any) => (
        <div
          style={{ color: 'rgb(145, 184, 16)', padding: '0' }}
          key={'mainNodeUrl'.concat(url.timeStamp)}
        >
          <ArcResultTimeStamp>{url.timeStamp} </ArcResultTimeStamp>
          <span>
            <a href={url.data} rel="noreferrer" target="_blank">{url.data}</a>
          </span>
        </div>
      ),
    )
    : <div />;

  const subNodes = searchResults.subNode.map(
    (element: any) => (
      <div key={'subNodeSubject'.concat(element.subject)}>
        <SubTagHeader>{element.subject}</SubTagHeader>
        <div style={{ paddingLeft: '100px' }}>
          {
            element.urls.map((url: any) => (
              <div
                style={{ color: 'rgb(145, 184, 16)', padding: '0' }}
                key={'subNodeUrl'.concat(url.timeStamp)}
              >
                <ArcResultTimeStamp>{url.timeStamp} </ArcResultTimeStamp>
                <span>
                  <a href={url.data} rel="noreferrer" target="_blank">{url.data}</a>
                </span>
              </div>
            ))
          }
        </div>
      </div>
    ),
  );

  return (
    <ArcadiaContainer>
      {tagComparison}
      <HomeSection>
        <h1 style={{ marginBottom: '15px' }}>{searchResults.subject}</h1>
        <div style={{ marginLeft: '50px' }}>
          {mainNode}
        </div>
        {subNodes}
      </HomeSection>
    </ArcadiaContainer>
  );
}
