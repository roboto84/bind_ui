import { SubTagHeader } from '@/views/search/arcadia/styles/arcadiaStyles';
import { ArcResult } from '@/views/search/arcadia/ArcResult/ArcResult';
import React from 'react';
import { ArcResultSubNodeProps } from '@/views/search/arcadia/types/arcadiaTypes';

export function ArcResultSubNode(props: ArcResultSubNodeProps) {
  const { node, onTagClick } = props;
  return (
    <div>
      <div style={{ padding: '25px 0 0' }}>
        <SubTagHeader
          id={'SubTagHeader-'.concat(node.subject)}
          onClick={() => onTagClick(node.subject)}
        >
          {node.subject}
        </SubTagHeader>
      </div>
      <div style={{ paddingLeft: '25px' }}>
        {
          node.urls.map((url: any) => (
            <ArcResult
              key={'arcResultItem'.concat(url.id.toString())}
              arcResultPackage={url}
              onSubTagClick={onTagClick}
            />
          ))
        }
      </div>
    </div>
  );
}
