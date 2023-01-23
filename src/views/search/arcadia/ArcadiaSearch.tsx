import React from 'react';
import { NavigateFunction, useNavigate, useSearchParams } from 'react-router-dom';
import { useArcadiaWordSearch } from '@/dataSource/reactQueryHooks';
import Loader from '@/components/Misc/Loader';
import { ErrorViewDefault } from '@/components/Error/ErrorViewDefault';
import camelcaseKeys from 'camelcase-keys';
import {
  GeneralSection,
  LatestTagsListContainer,
  Tag,
} from '@/views/search/styles/searchStyles';
import { substringDotted, urlArrowSplit } from '@/utils/formatting';
import {
  AlphabetHeader,
  ArcadiaContainer,
  ArcResultContainer,
  ArcResultDescription,
  ArcResultTimeStamp,
  ArcResultTitle,
  InlineHeader,
  SubTagHeader,
  SimilarResultsSection,
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
      <GeneralSection>
        <AlphabetHeader>Similar Tags</AlphabetHeader>
        <SimilarResultsSection>
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
        </SimilarResultsSection>
      </GeneralSection>
    )
    : <div />;

  const mainNode = searchResults.mainNode
    ? searchResults.mainNode.urls.map(
      (url: any, index:number) => (
        <ArcResultContainer key={'arcResultItem'.concat(url, index.toString())}>
          <div style={{ margin: 'auto 0' }}>
            <img style={{ borderRadius: '5px' }} height="75" src={url.image} alt="image" />
          </div>
          <div style={{ paddingLeft: '20px' }}>
            <div>
              <a style={{ fontSize: '18px' }} href={url.data} rel="noreferrer" target="_blank">
                {substringDotted(urlArrowSplit(url.data), 100)}
              </a>
            </div>
            <div key={'mainNodeUrl'.concat(url.timeStamp)}>
              <ArcResultTitle>{url.title}</ArcResultTitle>
              <span> | </span>
              <ArcResultTimeStamp>{url.timeStamp}</ArcResultTimeStamp>
            </div>
            <ArcResultDescription>
              <span>{url.description}...</span>
            </ArcResultDescription>
          </div>
        </ArcResultContainer>
      ),
    )
    : <div />;

  const subNodes = searchResults.subNode.map(
    (element: any) => (
      <div key={'subNodeSubject'.concat(element.subject)}>
        <SubTagHeader>{element.subject}</SubTagHeader>
        <div style={{ paddingLeft: '100px' }}>
          {
            element.urls.map((url: any, index:number) => (
              <ArcResultContainer key={'arcResultItem'.concat(url, index.toString())}>
                <div style={{ margin: 'auto 0' }}>
                  <img style={{ borderRadius: '5px' }} height="75" src={url.image} alt="image" />
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <div>
                    <a style={{ fontSize: '18px' }} href={url.data} rel="noreferrer" target="_blank">
                      {substringDotted(urlArrowSplit(url.data), 100)}
                    </a>
                  </div>
                  <div key={'mainNodeUrl'.concat(url.timeStamp)}>
                    <ArcResultTitle>{url.title} - </ArcResultTitle>
                    <span> | </span>
                    <ArcResultTimeStamp>{url.timeStamp}</ArcResultTimeStamp>
                  </div>
                  <ArcResultDescription>
                    <span>{url.description}...</span>
                  </ArcResultDescription>
                </div>
              </ArcResultContainer>
            ))
          }
        </div>
      </div>
    ),
  );

  return (
    <ArcadiaContainer>
      {tagComparison}
      <GeneralSection style={{ marginTop: '20px' }}>
        <h1 style={{ marginBottom: '15px' }}>
          <InlineHeader>Searched for: </InlineHeader>
          {searchResults.subject}
        </h1>
        <div style={{ marginLeft: '50px' }}>
          {mainNode}
        </div>
        {subNodes}
      </GeneralSection>
    </ArcadiaContainer>
  );
}
