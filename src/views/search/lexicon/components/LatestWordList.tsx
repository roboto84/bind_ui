import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Word } from '@/views/search/lexicon/styles/wordListStyles';
import { LatestWordListContainer } from '../styles/lexiconHomeStyles';
import { LatestWordListProps } from '../types/lexiconTypes';

export function LatestWordList(props: LatestWordListProps) {
  const { wordList } = props;
  const navigate: NavigateFunction = useNavigate();

  return (
    <LatestWordListContainer>
      { wordList.map((word: string) => (
        <Word
          onClick={() => navigate(`/search/system/lexicon/definition?word=${word.toLowerCase()}`)}
          key={'wordListItem'.concat(word)}
        >
          {word.toLowerCase()}
        </Word>
      )) }
    </LatestWordListContainer>
  );
}
