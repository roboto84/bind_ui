import {
  ArcResultOuterContainer,
  SubTagHeader,
  SubTagHeaderContainer,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import { ArcResult } from '@/views/search/arcadia/components/ArcResult/ArcResult';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArcResultSubNodeProps } from '@/views/search/arcadia/types/arcadiaTypes';

export function ArcResultSubNode(props: ArcResultSubNodeProps) {
  const { node, navigate } = props;
  return (
    <div>
      <SubTagHeaderContainer>
        <Link to={navigate.concat(node.subject)}>
          <SubTagHeader
            id={'SubTagHeader-'.concat(node.subject)}
          >
            {node.subject}
          </SubTagHeader>
        </Link>
      </SubTagHeaderContainer>
      <ArcResultOuterContainer>
        {
          node.urls.map((url: any) => (
            <ArcResult
              key={'arcResultItem'.concat(url.id.toString())}
              arcResultPackage={url}
              navigate={navigate}
            />
          ))
        }
      </ArcResultOuterContainer>
    </div>
  );
}
