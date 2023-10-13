import {
  AlphabetHeader,
  TagsSection,
  SubTagHeader, SubTagCount,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import {
  LatestTagsListContainer,
  TagGroupSection,
} from '@/views/search/styles/searchStyles';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TagGroupProps } from '@/views/search/arcadia/types/arcadiaTypes';
import { SearchContext } from '@/context/searchContext';
import { TagWithCount } from '@/dataSource/types/apiTypes';

// TODO: Extract the context and feed in as a prop, also find a way to supply this data straight
//  from the DB to reduce formatting processing in the UI

function TagGroup(props: TagGroupProps) {
  const { title, tagList, navigate, highlight } = props;
  const tagsCountHashMap: Map<string, number> = useContext(SearchContext).state.tagsHashMap;
  const tagsWithCount: TagWithCount[] = tagList.map((tag: string) => ({
    tag,
    count: tagsCountHashMap.get(tag),
  })).slice(0, 18);

  tagsWithCount.sort((a, b) => (a.count < b.count ? 1 : -1));

  let viewBody: JSX.Element;
  if (tagList && tagList.length > 0) {
    viewBody = (
      <>
        {
          tagsWithCount.map((tagWithCount: TagWithCount) => (
            <Link key={'tagListItem'.concat(tagWithCount.tag)} to={navigate.concat(tagWithCount.tag)}>
              <SubTagHeader
                style={{
                  minWidth: 'auto',
                  width: 'auto',
                  boxShadow: 'none',
                }}
              >
                <span>{tagWithCount.tag}</span>
                <SubTagCount> {tagWithCount.count}</SubTagCount>
              </SubTagHeader>
            </Link>
          ))
        }
      </>
    );
  } else {
    viewBody = <h1>No Matching Tags Found</h1>;
  }

  return (
    <TagGroupSection>
      <AlphabetHeader>{title}</AlphabetHeader>
      <TagsSection isHighLight={highlight}>
        <LatestTagsListContainer>
          {viewBody}
        </LatestTagsListContainer>
      </TagsSection>
    </TagGroupSection>
  );
}

TagGroup.defaultProps = {
  highlight: false,
};

export default TagGroup;
