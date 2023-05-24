import {
  AlphabetHeader,
  ArcadiaStatsContainer,
  ArcadiaStatsDataContainer,
  ArcadiaStatsLabel,
  ArcadiaStatsCircle,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import React from 'react';
import { ArcadiaGraphCoherenceProps } from '@/views/search/arcadia/types/arcadiaTypes';

export function ArcadiaGraphCoherence(props: ArcadiaGraphCoherenceProps) {
  const { numberOfSubjects, numberOfUrlRecords } = props;
  const graphCoherence: string = (numberOfUrlRecords / numberOfSubjects).toFixed(2);
  return (
    <ArcadiaStatsContainer>
      <AlphabetHeader>Graph Coherence</AlphabetHeader>
      <ArcadiaStatsDataContainer>
        <ArcadiaStatsCircle>
          {graphCoherence}
        </ArcadiaStatsCircle>
        <ArcadiaStatsLabel>
          {numberOfUrlRecords} Links / {numberOfSubjects} Tags
        </ArcadiaStatsLabel>
      </ArcadiaStatsDataContainer>
    </ArcadiaStatsContainer>
  );
}
