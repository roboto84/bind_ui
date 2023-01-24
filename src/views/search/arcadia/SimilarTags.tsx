import { AlphabetHeader, SimilarResultsSection } from '@/views/search/arcadia/styles/arcadiaStyles';
import { GeneralSection, LatestTagsListContainer, Tag } from '@/views/search/styles/searchStyles';
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
              <Tag
                onClick={() => navigate(`/search/system/arcadia/data?word=${tag}`)}
                key={'tagListItem'.concat(tag)}
              >
                {tag}
              </Tag>
            ))
          }
        </LatestTagsListContainer>
      </SimilarResultsSection>
    </GeneralSection>
  );
}
