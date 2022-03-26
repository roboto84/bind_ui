import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Word } from '@/views/lexicon/styles/wordListStyles';
import { WordListContainer } from '../styles/lexiconHomeStyles';
import { LatestWordListProps } from '../types/lexiconTypes';

export function LatestWordList(props: LatestWordListProps) {
  const { wordList } = props;
  const navigate: NavigateFunction = useNavigate();

  return (
    <WordListContainer>
      { wordList.map((word: string, index:number) => (
        <Word
          className="word_list_item"
          onClick={() => navigate(`/lexicon/search?word=${word}`)}
          key={'wordListItem'.concat(String(index))}
        >
          {word}
        </Word>
      )) }
    </WordListContainer>
  );
}
