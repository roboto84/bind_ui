import {
  AlphabetHeader,
  SimilarResultsSection,
  SubTagHeader,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import { GeneralSection, LatestTagsListContainer } from '@/views/search/styles/searchStyles';
import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export function SimilarTags(props: { similarTags: string[] }) {
  const navigate: NavigateFunction = useNavigate();
  const { similarTags } = props;
  return (
    <GeneralSection>
      <AlphabetHeader>Similar Tags</AlphabetHeader>
      <SimilarResultsSection>
        <LatestTagsListContainer>
          {
            similarTags.map((tag: string) => (
              <SubTagHeader
                key={'tagListItem'.concat(tag)}
                onClick={() => navigate(`/search/system/arcadia/data?word=${tag}`)}
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
