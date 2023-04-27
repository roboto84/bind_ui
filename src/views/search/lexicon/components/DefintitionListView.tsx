import React from 'react';
import { WordDefinitionsProps } from '@/views/search/lexicon/types/lexiconTypes';

function DefinitionListView(props: WordDefinitionsProps) {
  const { definitions, numOfDefs } = props;
  const definitionsToShow: string[] = numOfDefs === null
    ? definitions
    : definitions.slice(0, numOfDefs);

  return (
    <>
      {definitionsToShow.filter((def: string) => def !== 'n/a').map((def:string) => (
        <li key={'wordDef-'.concat(def.substring(0, 30))}>
          { def }
        </li>
      ))}
    </>
  );
}

DefinitionListView.defaultProps = {
  numOfDefs: null,
};

export default DefinitionListView;
