import React from 'react';
import { WordDefinitionsProps } from '@/views/lexicon/types/lexiconTypes';

export function DefinitionListView(props: WordDefinitionsProps) {
  const { definitions } = props;

  return (
    <>
      {definitions.filter((def: string) => def !== 'n/a').map((def:string) => (
        <li key={'wordDef-'.concat(def.substring(0, 20))}>
          { def }
        </li>
      ))}
    </>
  );
}
