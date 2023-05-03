import {
  ArcResultOuterContainer,
  SubTagHeader,
  SubTagHeaderContainer,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import { ArcResult } from '@/views/search/arcadia/components/ArcResult/ArcResult';
import React from 'react';
import { ArcResultSubNodeProps } from '@/views/search/arcadia/types/arcadiaTypes';

export function ArcResultSubNode(props: ArcResultSubNodeProps) {
  const { node, onTagClick } = props;
  return (
    <div>
      <SubTagHeaderContainer>
        <SubTagHeader
          id={'SubTagHeader-'.concat(node.subject)}
          onClick={() => onTagClick(node.subject)}
        >
          {node.subject}
        </SubTagHeader>
      </SubTagHeaderContainer>
      <ArcResultOuterContainer>
        {
          node.urls.map((url: any) => (
            <ArcResult
              key={'arcResultItem'.concat(url.id.toString())}
              arcResultPackage={url}
              onSubTagClick={onTagClick}
            />
          ))
        }
      </ArcResultOuterContainer>
    </div>
  );
}
