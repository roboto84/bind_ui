import { ArcRandomRecordProps } from '@/views/search/arcadia/types/arcadiaTypes';
import { ArcResult } from '@/views/search/arcadia/components/ArcResult/ArcResult';
import React from 'react';
import { ArcRandomRecordContainer, AlphabetHeader } from '@/views/search/arcadia/styles/arcadiaStyles';

export function ArcRandomRecord(props: ArcRandomRecordProps) {
  const { record, onTagClick } = props;
  return (
    <ArcRandomRecordContainer>
      <AlphabetHeader>Entry of the Day</AlphabetHeader>
      <ArcResult
        arcResultPackage={record}
        onSubTagClick={onTagClick}
      />
    </ArcRandomRecordContainer>
  );
}
