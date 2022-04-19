import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Word } from '@/views/lexicon/styles/wordListStyles';
import { LatestWordListContainer } from '../styles/lexiconHomeStyles';
import { LatestWordListProps } from '../types/lexiconTypes';

export function LatestWordList(props: LatestWordListProps) {
  const { wordList } = props;
  const navigate: NavigateFunction = useNavigate();

  return (
    <LatestWordListContainer>
      { wordList.map((word: string) => (
        <Word
          className="word_list_item"
          onClick={() => navigate(`/lexicon/search?word=${word}`)}
          key={'wordListItem'.concat(word)}
        >
          {word}
        </Word>
      )) }
    </LatestWordListContainer>
  );
}
