import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import {
  DayWord, DayWordInfo, DayWordBreak,
  DayWordDate, DayWordDefinitionsList, DayWordExample,
  DayWordPartOfSpeech, DayWordPronounce, WordOfDayContainer,
} from '@/views/lexicon/styles/wordOfDayStyles';
import { DefinitionListView } from '@/views/lexicon/components/WordDefinitions';
import { pronunciationView, wordExampleView, wordParamBasicView } from '../utils';
import { WordOfDayProps } from '../types/lexiconTypes';

export function WordOfDay(props: WordOfDayProps) {
  const { wordDefinition } = props;
  const navigate: NavigateFunction = useNavigate();

  return (
    <WordOfDayContainer>
      <DayWordInfo>
        <DayWord
          onClick={() => navigate(`/lexicon/search?word=${wordDefinition.word}`)}
        >
          {wordDefinition.word}
        </DayWord>
        <DayWordDate>{wordParamBasicView(wordDefinition.dateFirstUsed)}</DayWordDate>
        <DayWordPartOfSpeech>{wordParamBasicView(wordDefinition.partOfSpeech)}</DayWordPartOfSpeech>
        <DayWordBreak>{wordParamBasicView(wordDefinition.wordBreak)}</DayWordBreak>
        <DayWordPronounce>{pronunciationView(...wordDefinition.pronounce)}</DayWordPronounce>
      </DayWordInfo>

      <DayWordDefinitionsList>
        <DefinitionListView definitions={wordDefinition.definitions} />
      </DayWordDefinitionsList>

      <DayWordExample>
        {wordExampleView(wordDefinition.example)}
      </DayWordExample>
    </WordOfDayContainer>
  );
}
