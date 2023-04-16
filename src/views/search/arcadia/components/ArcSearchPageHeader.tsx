import { InlineHeader } from '@/views/search/arcadia/styles/arcadiaStyles';
import React from 'react';
import { ArcSearchPageHeaderProps } from '@/views/search/arcadia/types/arcadiaTypes';

export function ArcSearchPageHeader(props: ArcSearchPageHeaderProps) {
  const { urlLength, tagsLength, subject } = props;

  return (
    <h1 style={{ marginLeft: '0' }}>
      <InlineHeader>{urlLength} </InlineHeader>
      result{urlLength > 1 ? 's' : ''} for
      <InlineHeader> {subject} </InlineHeader>
      { tagsLength > 1 ? 'in the following tags ...' : '...'}
    </h1>
  );
}
