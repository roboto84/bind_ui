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
import { Button } from '@/components/Nav/Button';
import { ShowMoreButtonContainer } from '@/views/search/lexicon/styles/wordOfDayStyles';
import { NavigateFunction, useNavigate } from 'react-router-dom';

function TagGroup(props: TagGroupProps) {
  const { title, tagList, onTagClick, highlight } = props;
  const navigate: NavigateFunction = useNavigate();
  const navigateToTagIndex: CallableFunction = () => {
    navigate('/search/system/arcadia/index');
  };

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
        <ShowMoreButtonContainer>
          <Button
            fontSize="11px"
            padding="5px"
            borderRadius="5px"
            onClick={() => navigateToTagIndex()}
            title="Show All Tags"
            margin="0"
          >
            Show All Tags
          </Button>
        </ShowMoreButtonContainer>
      </TagsSection>
    </TagGroupSection>
  );
}

TagGroup.defaultProps = {
  highlight: false,
};

export default TagGroup;
