import {
  AlphabetHeader,
  SimilarResultsSection,
  SubTagHeader,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import { GeneralSection, LatestTagsListContainer } from '@/views/search/styles/searchStyles';
import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { SimilarTagsProps } from '@/views/search/arcadia/types/arcadiaTypes';

export function SimilarTags(props: SimilarTagsProps) {
  const navigate: NavigateFunction = useNavigate();
  const { similarTags, onTagClick } = props;
  return (
    <GeneralSection>
      <AlphabetHeader>Similar Tags</AlphabetHeader>
      <SimilarResultsSection>
        <LatestTagsListContainer>
          {
            similarTags.map((tag: string) => (
              <SubTagHeader
                key={'tagListItem'.concat(tag)}
                onClick={() => onTagClick(tag)}
                style={{ minWidth: 'auto', width: 'auto' }}
              >
                {tag}
              </SubTagHeader>
            ))
          }
        </LatestTagsListContainer>
      </SimilarResultsSection>
    </GeneralSection>
  );
}
