import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useArcadiaWordSearch } from '@/dataSource/reactQueryHooks';
import Loader from '@/components/Misc/Loader';
import ErrorViewDefault from '@/components/Error/ErrorViewDefault';
import camelcaseKeys from 'camelcase-keys';
import { GeneralSection } from '@/views/search/styles/searchStyles';
import { ArcResult } from '@/views/search/arcadia/components/ArcResult/ArcResult';
import TagGroup from '@/views/search/arcadia/components/TagGroup';
import {
  ArcSearchResults,
  ArcSearchResultsNode,
} from '@/views/search/arcadia/types/arcadiaTypes';
import LexiconCard from '@/views/search/lexicon/components/lexiconCard/LexiconCard';
import { ArcResultSubNode } from '@/views/search/arcadia/components/ArcResultSubNode';
import { organizeNodes } from '@/views/search/arcadia/utils';
import { ArcSearchPageInnerLinks } from '@/views/search/arcadia/components/ArcSearchPageInnerLinks';
import { ArcSearchPageHeader } from '@/views/search/arcadia/components/ArcSearchPageHeader';
import { useQuery, UseQueryResult } from 'react-query';
import { ArcadiaTagsWithCounts } from '@/dataSource/types/apiTypes';
import { arcadiaApiEndpoints } from '@/dataSource/restApis/bindRestApi';
import { SearchContext } from '@/context/searchContext';
import { SearchActionsEnum } from '@/context/types/enums';
import { ArcadiaContainer, ArcInitialDataContainer } from '../styles/arcadiaStyles';

export function ArcadiaSearch() {
  const { state, dispatch } = useContext(SearchContext);
  const [searchParams] = useSearchParams();
  const searchWord: string = searchParams.get('word');
  const navLocation: string = '/search/system/arcadia/data?word=';
  const { data, isLoading, isError } = useArcadiaWordSearch(searchWord);
  const arcadiaSubjectsWithCounts: UseQueryResult<ArcadiaTagsWithCounts> = useQuery<
    ArcadiaTagsWithCounts, Error>(arcadiaApiEndpoints.tagsWithCounts);

  if (isLoading || arcadiaSubjectsWithCounts.isLoading) {
    return (<Loader />);
  }

  if (isError || arcadiaSubjectsWithCounts.isError) {
    const message: string = 'Error has occurred getting search data or subjects';
    return (<ErrorViewDefault errorMessage={message} />);
  }

  const arcadiaSubjectsResponse: ArcadiaTagsWithCounts = camelcaseKeys<ArcadiaTagsWithCounts>(
    arcadiaSubjectsWithCounts.data,
    { deep: true },
  );

  // TODO: Update this to not use a setTimeout
  if (state.tags.length !== arcadiaSubjectsResponse.numberOfSubjects) {
    setTimeout(() => {
      dispatch(
        { type: SearchActionsEnum.LOAD_TAGS, value: arcadiaSubjectsResponse.subjectsCounts },
      );
    }, 0);
  }

  const { searchResults, similarTags } = camelcaseKeys<ArcSearchResults>(data, { deep: true });
  const { urlCache, tagCache } = organizeNodes(searchResults);

  const innerLinks: JSX.Element = tagCache.length
    ? (<ArcSearchPageInnerLinks tags={tagCache} />)
    : <div />;

  const tagView: JSX.Element = similarTags.length
    ? (<TagGroup title="Similar Tags" tagList={similarTags} navigate={navLocation} />)
    : <div />;

  const mainNode: JSX.Element|JSX.Element[] = searchResults.mainNode
    ? searchResults.mainNode.urls.map((url: any) => (
      <ArcResult
        key={'arcResultItem'.concat(url.id.toString())}
        arcResultPackage={url}
        navigate={navLocation}
      />
    ))
    : <div />;

  const subNodes: JSX.Element|JSX.Element[] = searchResults.subNode.map(
    (element: ArcSearchResultsNode) => (
      <ArcResultSubNode
        key={'subNodeSubject'.concat(element.subject)}
        node={element}
        navigate={navLocation}
      />
    ),
  );

  return (
    <ArcadiaContainer>
      <ArcInitialDataContainer>
        {tagView}
        <LexiconCard title="Dictionary" searchTerm={searchResults.subject} />
      </ArcInitialDataContainer>
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
