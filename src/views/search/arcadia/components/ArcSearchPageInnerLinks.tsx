import { InnerLinks, SubTagHeader } from '@/views/search/arcadia/styles/arcadiaStyles';
import React from 'react';
import { ArcSearchPageInnerLinksProps } from '@/views/search/arcadia/types/arcadiaTypes';

export function ArcSearchPageInnerLinks(props: ArcSearchPageInnerLinksProps){
  const { tags } = props;
  return (
    <InnerLinks style={{ marginBottom: '38px' }}>
      {
        tags.map((tag: string) => (
          <SubTagHeader
            key={'tagInnerLink'.concat(tag)}
            style={{ minWidth: 'auto', width: 'auto', fontSize: '16px' }}
          >
            <a href={'#SubTagHeader-'.concat(tag)}>
              {tag}
            </a>
          </SubTagHeader>
        ))
      }
    </InnerLinks>
  );
}
