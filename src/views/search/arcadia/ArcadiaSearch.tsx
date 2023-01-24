import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useArcadiaWordSearch } from '@/dataSource/reactQueryHooks';
import Loader from '@/components/Misc/Loader';
import { ErrorViewDefault } from '@/components/Error/ErrorViewDefault';
import camelcaseKeys from 'camelcase-keys';
import { GeneralSection } from '@/views/search/styles/searchStyles';
import { ArcResult } from '@/views/search/arcadia/ArcResult';
import { SimilarTags } from '@/views/search/arcadia/SimilarTags';
import {
  ArcadiaContainer,
  InlineHeader,
  SubTagHeader,
} from './styles/arcadiaStyles';

export function ArcadiaSearch() {
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
    ? (<SimilarTags similarTags={similarTags} />)
    : <div />;

  const mainNode = searchResults.mainNode
    ? searchResults.mainNode.urls.map((url: any) => (
      <ArcResult key={'arcResultItem'.concat(url.id.toString())} arcResultPackage={url} />))
    : <div />;

  const subNodes = searchResults.subNode.map(
    (element: any) => (
      <div key={'subNodeSubject'.concat(element.subject)}>
        <SubTagHeader>{element.subject}</SubTagHeader>
        <div style={{ paddingLeft: '100px' }}>
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
