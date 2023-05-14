import React from 'react';
import { TagIndexProps } from '@/views/search/arcadia/types/arcadiaTypes';
import { GeneralDictionarySection } from '@/views/search/lexicon/styles/lexiconCardStyles';
import {
  Tag,
  TagIndexListContainer,
  TagsSection,
} from '@/views/search/styles/searchStyles';
import { AlphabetHeader, ColoredHeader } from '@/views/search/arcadia/styles/arcadiaStyles';

const getTagsCount = (arcadiaTags: [string, string[]][]) => arcadiaTags.reduce(
  (previousCount: number, currentValue: [string, string[]]) => (
    previousCount + currentValue[1].length
  ),
  0,
);

export function TagIndexDefault(props: TagIndexProps) {
  const { arcadiaTags, onTagClick } = props;
  const tagsCount: number = getTagsCount(arcadiaTags);

  let viewBody: JSX.Element = (
    <TagsSection withShadow>
      <h1>No Matching Tags Found</h1>
    </TagsSection>
  );

  if (tagsCount > 0) {
    viewBody = (
      <GeneralDictionarySection>
        <ColoredHeader>Tags Index ({tagsCount})</ColoredHeader>
        <div>
          {
            arcadiaTags.map(([key, tags]: [string, string[]]) => {
              if (tags.length > 0) {
                return (
                  <TagsSection withShadow key={'section'.concat(key)}>
                    <AlphabetHeader>{key.toUpperCase()} ({tags.length})</AlphabetHeader>
                    <TagIndexListContainer>
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
                    </TagIndexListContainer>
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

  return viewBody;
}
