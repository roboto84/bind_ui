import {
  AlphabetHeader,
  SimilarResultsSection,
  SubTagHeader,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import {
  LatestTagsListContainer,
  SimilarTagsSection
} from '@/views/search/styles/searchStyles';
import React from 'react';
import { SimilarTagsProps } from '@/views/search/arcadia/types/arcadiaTypes';

export function SimilarTags(props: SimilarTagsProps) {
  const { similarTags, onTagClick } = props;

  if (similarTags && similarTags.length > 0) {
    return (
      <SimilarTagsSection>
        <AlphabetHeader>Similar Tags</AlphabetHeader>
        <SimilarResultsSection>
          <LatestTagsListContainer>
            {
              similarTags.map((tag: string) => (
                <SubTagHeader
                  key={'tagListItem'.concat(tag)}
                  onClick={() => onTagClick(tag)}
                  style={{ minWidth: 'auto', width: 'auto', boxShadow: 'none' }}
                >
                  {tag}
                </SubTagHeader>
              ))
            }
          </LatestTagsListContainer>
        </SimilarResultsSection>
      </SimilarTagsSection>
    );
  }
  return <div />;
}
