import {
  AlphabetHeader,
  ArcadiaGraphCoherenceContainer,
  ArcadiaGraphCoherenceDataContainer,
  ArcadiaGraphCoherenceFormulaContainer,
  ArcadiaGraphCoherenceMainNumber,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import React from 'react';
import { ArcadiaGraphCoherenceProps } from '@/views/search/arcadia/types/arcadiaTypes';

export function ArcadiaGraphCoherence(props: ArcadiaGraphCoherenceProps) {
  const { numberOfSubjects, numberOfUrlRecords } = props;
  const graphCoherence: string = (numberOfUrlRecords / numberOfSubjects).toFixed(2);
  return (
    <ArcadiaGraphCoherenceContainer>
      <AlphabetHeader>Graph Coherence</AlphabetHeader>
      <ArcadiaGraphCoherenceDataContainer>
        <ArcadiaGraphCoherenceMainNumber>
          {graphCoherence}
        </ArcadiaGraphCoherenceMainNumber>
        <ArcadiaGraphCoherenceFormulaContainer>
          <span>
            {numberOfUrlRecords} Links
          </span>
          <span> / </span>
          <span>
            {numberOfSubjects} Tags
          </span>
        </ArcadiaGraphCoherenceFormulaContainer>
      </ArcadiaGraphCoherenceDataContainer>
    </ArcadiaGraphCoherenceContainer>
  );
}
