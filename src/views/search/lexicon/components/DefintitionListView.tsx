import React from 'react';
import { WordDefinitionsProps } from '@/views/search/lexicon/types/lexiconTypes';

function DefinitionListView(props: WordDefinitionsProps) {
  const { definitions, definitionsToShow } = props;

  return (
    <>
      {definitions.filter((def: string) => def !== 'n/a').map((def:string) => (
        <li key={'wordDef-'.concat(def.substring(0, 30))}>
          { def }
        </li>
      )).slice(0, definitionsToShow - 1)}
    </>
  );
}

DefinitionListView.defaultProps = {
  definitionsToShow: null,
};

export default DefinitionListView;
