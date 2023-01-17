import React from 'react';
import { WordDefinitionsProps } from '@/views/search/lexicon/types/lexiconTypes';

export function DefinitionListView(props: WordDefinitionsProps) {
  const { definitions } = props;

  return (
    <>
      {definitions.filter((def: string) => def !== 'n/a').map((def:string) => (
        <li key={'wordDef-'.concat(def.substring(0, 30))}>
          { def }
        </li>
      ))}
    </>
  );
}
