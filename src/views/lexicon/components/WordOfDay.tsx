import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import {
  DayWord,
  DayWordBreak,
  DayWordDate, DayWordDefinitions, DayWordDefinitionsList, DayWordExample,
  DayWordPartOfSpeech, DayWordPronounce, WordOfDayContainer,
} from '@/views/lexicon/styles/wordOfDayStyles';
import { pronunciationView } from '@/utils/formatting';
import { WordOfDayProps } from '../types/lexiconTypes';

export function WordOfDay(props: WordOfDayProps) {
  const { wordDefinition } = props;
  const navigate: NavigateFunction = useNavigate();

  return (
    <WordOfDayContainer>
      <DayWord
        className="word_list_item"
        onClick={() => navigate(`/lexicon/search?word=${wordDefinition.word}`)}
      >
        {wordDefinition.word}
      </DayWord>
      <DayWordDate>{wordDefinition.dateFirstUsed}</DayWordDate>
      <DayWordPartOfSpeech>{wordDefinition.partOfSpeech}</DayWordPartOfSpeech>
      <DayWordBreak>{wordDefinition.wordBreak}</DayWordBreak>
      <DayWordPronounce>{pronunciationView(...wordDefinition.pronounce)}</DayWordPronounce>
      <DayWordDefinitions>
        <DayWordDefinitionsList>
          {wordDefinition.definitions.map((definition:string, index:number) => (
            <li key={'definitionItem'.concat(String(index))}>
              { definition }
            </li>
          ))}
        </DayWordDefinitionsList>
      </DayWordDefinitions>
      <DayWordExample>
        ( e.g. {wordDefinition.example} )
      </DayWordExample>
    </WordOfDayContainer>
  );
}
