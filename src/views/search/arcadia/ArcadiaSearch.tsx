import React from 'react';
import { NavigateFunction, useNavigate, useSearchParams } from 'react-router-dom';
import { useArcadiaWordSearch } from '@/dataSource/reactQueryHooks';
import Loader from '@/components/Misc/Loader';
import { ErrorViewDefault } from '@/components/Error/ErrorViewDefault';
import camelcaseKeys from 'camelcase-keys';
import { GeneralSection } from '@/views/search/styles/searchStyles';
import { ArcResult } from '@/views/search/arcadia/ArcResult';
import { SimilarTags } from '@/views/search/arcadia/SimilarTags';
import {
  ArcResultPackage,
  ArcSearchResults, ArcSearchResultsNode,
} from '@/views/search/arcadia/types/arcadiaTypes';
import {
  ArcadiaContainer,
  InlineHeader, InnerLinks,
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

  const wordSearchResponse: ArcSearchResults = camelcaseKeys<ArcSearchResults>(
    data,
    { deep: true },
  );

  const { searchResults } = wordSearchResponse;
  const { similarTags } = wordSearchResponse;
  const urlCache: string[] = [];
  const tagCache: string[] = [];

  if (searchResults.mainNode) {
    searchResults.mainNode.urls.forEach((url:ArcResultPackage) => {
      urlCache.push(url.data);
    });
  }

  let i = 0;
  while (i < searchResults.subNode.length) {
    let j = 0;
    while (j < searchResults.subNode[i].urls.length) {
      if (urlCache.indexOf(searchResults.subNode[i].urls[j].data) > -1) {
        searchResults.subNode[i].urls.splice(j, 1);
      } else {
        urlCache.push(searchResults.subNode[i].urls[j].data);
        j += 1;
      }
    }
    if (searchResults.subNode[i].urls.length === 0) {
      searchResults.subNode.splice(i, 1);
    } else {
      tagCache.push(searchResults.subNode[i].subject);
      i += 1;
    }
  }

  tagCache.sort((a: string, b: string) => a.localeCompare(b));
  if (searchResults.subNode.length > 1) {
    searchResults.subNode.sort(
      (a: ArcSearchResultsNode, b: ArcSearchResultsNode) => a.subject.localeCompare(b.subject),
    );
  }

  const tagComparison: JSX.Element = similarTags && similarTags.length > 0
    ? (<SimilarTags similarTags={similarTags} />)
    : <div />;

  const innerLinks: JSX.Element = tagCache.length > 1
    ? (
      <InnerLinks style={{ marginBottom: '38px' }}>
        {
        tagCache.map((tag: string) => (
          <SubTagHeader
            key={'tagInnerLink'.concat(tag)}
            style={{ minWidth: 'auto', width: 'auto', fontSize: '16px' }}
          >
            <a href={'#SubTagHeader-'.concat(tag)}>
              {tag}
            </a>
          </SubTagHeader>
        ))
      }
      </InnerLinks>
    )
    : <div />;

  const mainNode: JSX.Element|JSX.Element[] = searchResults.mainNode
    ? searchResults.mainNode.urls.map((url: any) => (
      <ArcResult key={'arcResultItem'.concat(url.id.toString())} arcResultPackage={url} />))
    : <div />;

  const subNodes: JSX.Element|JSX.Element[] = searchResults.subNode.map(
    (element: any) => (
      <div key={'subNodeSubject'.concat(element.subject)}>
        <div style={{ padding: '25px 0 0' }}>
          <SubTagHeader
            id={'SubTagHeader-'.concat(element.subject)}
            onClick={() => navigate(`/search/system/arcadia/data?word=${element.subject}`)}
          >
            {element.subject}
          </SubTagHeader>
        </div>
        <div style={{ paddingLeft: '25px' }}>
          {
            element.urls.map((url: any) => (
              <ArcResult key={'arcResultItem'.concat(url.id.toString())} arcResultPackage={url} />
            ))
          }
        </div>
      </div>
    ),
  );

  return (
    <ArcadiaContainer>
      {tagComparison}
      <GeneralSection>
        <div>
          <h1 style={{ marginLeft: '0' }}>
            <InlineHeader>{urlCache.length} </InlineHeader>
            result{urlCache.length > 1 ? 's' : ''} for
            <InlineHeader> {searchResults.subject} </InlineHeader>
            { tagCache.length > 1 ? 'in the following tags ...' : '...'}
          </h1>
          {innerLinks}
        </div>
        <div>
          {mainNode}
        </div>
        <div>
          {subNodes}
        </div>
      </GeneralSection>
    </ArcadiaContainer>
  );
}
