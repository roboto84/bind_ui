import { InnerLinks, SubTagHeader } from '@/views/search/arcadia/styles/arcadiaStyles';
import React from 'react';
import { ArcSearchPageInnerLinksProps } from '@/views/search/arcadia/types/arcadiaTypes';

export function ArcSearchPageInnerLinks(props: ArcSearchPageInnerLinksProps) {
  const { tags } = props;
  return (
    <InnerLinks>
      {
        tags.map((tag: string) => (
          <a key={'tagInnerLink'.concat(tag)}  href={'#SubTagHeader-'.concat(tag)}>
            <SubTagHeader
              style={{ minWidth: 'auto', width: 'auto', fontSize: '16px' }}
            >
              {tag}
            </SubTagHeader>
          </a>

        ))
      }
    </InnerLinks>
  );
}
