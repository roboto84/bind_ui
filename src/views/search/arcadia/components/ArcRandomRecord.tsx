import { ArcRandomRecordProps } from '@/views/search/arcadia/types/arcadiaTypes';
import { ArcResult } from '@/views/search/arcadia/components/ArcResult/ArcResult';
import React from 'react';
import { AlphabetHeader } from '@/views/search/arcadia/styles/arcadiaStyles';

export function ArcRandomRecord(props: ArcRandomRecordProps) {
  const { record, onTagClick } = props;
  return (
    <div style={{ flexGrow: 2 }}>
      <AlphabetHeader>Interesting Record</AlphabetHeader>
      <ArcResult
        arcResultPackage={record}
        onSubTagClick={onTagClick}
      />
    </div>
  );
}
