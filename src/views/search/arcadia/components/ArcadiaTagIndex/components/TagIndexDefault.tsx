import React from 'react';
import { TagIndexProps } from '@/views/search/arcadia/types/arcadiaTypes';
import { GeneralDictionarySection } from '@/views/search/lexicon/styles/lexiconCardStyles';
import { LatestTagsListContainer, Tag, TagsSection } from '@/views/search/styles/searchStyles';
import { AlphabetHeader } from '@/views/search/arcadia/styles/arcadiaStyles';

export function TagIndexDefault(props: TagIndexProps) {
  const { arcadiaTags, onTagClick } = props;

  return (
    <GeneralDictionarySection>
      <h1>Tags Index</h1>
      <div>
        {
          arcadiaTags.map(([key, tags]: [string, string[]]) => {
            if (tags.length > 0) {
              return (
                <TagsSection withShadow key={'section'.concat(key)}>
                  <AlphabetHeader>{key.toUpperCase()}</AlphabetHeader>
                  <LatestTagsListContainer>
                    {
                      tags.map((tag: string) => (
                        <Tag
                          onClick={() => onTagClick(tag)}
                          key={'tagListItem'.concat(tag)}
                        >
                          {tag}
                        </Tag>
                      ))
                    }
                  </LatestTagsListContainer>
                </TagsSection>
              );
            }
            return (<div key={'section'.concat(key)} />);
          })
        }
      </div>
    </GeneralDictionarySection>
  );
}
