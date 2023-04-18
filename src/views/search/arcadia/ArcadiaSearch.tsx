import React from 'react';
import { NavigateFunction, useNavigate, useSearchParams } from 'react-router-dom';
import { useArcadiaWordSearch } from '@/dataSource/reactQueryHooks';
import Loader from '@/components/Misc/Loader';
import { ErrorViewDefault } from '@/components/Error/ErrorViewDefault';
import camelcaseKeys from 'camelcase-keys';
import { GeneralSection } from '@/views/search/styles/searchStyles';
import { ArcResult } from '@/views/search/arcadia/ArcResult/ArcResult';
import { SimilarTags } from '@/views/search/arcadia/SimilarTags';
import {
  ArcadiaSearchProps,
  ArcSearchResults,
  ArcSearchResultsNode,
} from '@/views/search/arcadia/types/arcadiaTypes';
import { LexiconCard } from '@/views/search/lexicon/components/lexiconCard/LexiconCard';
import { ArcResultSubNode } from '@/views/search/arcadia/ArcResultSubNode';
import { organizeNodes } from '@/views/search/arcadia/utils';
import { ArcSearchPageInnerLinks } from '@/views/search/arcadia/components/ArcSearchPageInnerLinks';
import { ArcSearchPageHeader } from '@/views/search/arcadia/components/ArcSearchPageHeader';
import { ArcadiaContainer, ArcInitialSearchResultsContainer } from './styles/arcadiaStyles';

export function ArcadiaSearch(props: ArcadiaSearchProps) {
  const { setContext } = props;
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

  const onSubTagClick = (term: string) => {
    setContext(term);
    navigate(`/search/system/arcadia/data?word=${term}`);
  };

  const { searchResults, similarTags } = camelcaseKeys<ArcSearchResults>(data, { deep: true });
  const { urlCache, tagCache } = organizeNodes(searchResults);

  const innerLinks: JSX.Element = tagCache.length > 1
    ? (<ArcSearchPageInnerLinks tags={tagCache} />)
    : <div />;

  const mainNode: JSX.Element|JSX.Element[] = searchResults.mainNode
    ? searchResults.mainNode.urls.map((url: any) => (
      <ArcResult
        key={'arcResultItem'.concat(url.id.toString())}
        arcResultPackage={url}
        onSubTagClick={onSubTagClick}
      />
    ))
    : <div />;

  const subNodes: JSX.Element|JSX.Element[] = searchResults.subNode.map(
    (element: ArcSearchResultsNode) => (
      <ArcResultSubNode
        key={'subNodeSubject'.concat(element.subject)}
        node={element}
        onTagClick={onSubTagClick}
      />
    ),
  );

  return (
    <ArcadiaContainer>
      <ArcInitialSearchResultsContainer>
        <LexiconCard searchTerm={searchResults.subject} />
        <SimilarTags similarTags={similarTags} onTagClick={onSubTagClick} />
      </ArcInitialSearchResultsContainer>
      <GeneralSection>
        <div>
          <ArcSearchPageHeader
            urlLength={urlCache.length}
            tagsLength={tagCache.length}
            subject={searchResults.subject}
          />
          {innerLinks}
        </div>
        <div>{mainNode}</div>
        <div>{subNodes}</div>
      </GeneralSection>
    </ArcadiaContainer>
  );
}
