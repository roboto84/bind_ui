import {
  AlphabetHeader,
  TagsSection,
  SubTagHeader,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import {
  LatestTagsListContainer,
  TagGroupSection,
} from '@/views/search/styles/searchStyles';
import React from 'react';
import { TagGroupProps } from '@/views/search/arcadia/types/arcadiaTypes';

function TagGroup(props: TagGroupProps) {
  const { title, tagList, onTagClick, highlight } = props;
  let viewBody: JSX.Element;
  if (tagList && tagList.length > 0) {
    viewBody = (
      <>
        {
        tagList.map((tag: string) => (
          <SubTagHeader
            key={'tagListItem'.concat(tag)}
            onClick={() => onTagClick(tag)}
            style={{
              minWidth: 'auto',
              width: 'auto',
              boxShadow: 'none',
            }}
          >
            {tag}
          </SubTagHeader>
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
