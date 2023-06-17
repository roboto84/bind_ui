import React from 'react';
import { Link } from 'react-router-dom';
import { Word } from '@/views/search/lexicon/styles/wordListStyles';
import { LatestWordListContainer } from '../styles/lexiconHomeStyles';
import { LatestWordListProps } from '../types/lexiconTypes';

export function LatestWordList(props: LatestWordListProps) {
  const { wordList } = props;
  const navLocation: string = '/search/system/lexicon/definition?word=';

  return (
    <LatestWordListContainer>
      { wordList.map((word: string) => (
        <Link to={navLocation.concat(word)}>
          <Word key={'wordListItem'.concat(word)}>
            {word.toLowerCase()}
          </Word>
        </Link>
      )) }
    </LatestWordListContainer>
  );
}
