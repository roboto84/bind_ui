import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import {
  DayWord,
  DayWordBreak,
  DayWordDate,
  DayWordDefinitionsList,
  DayWordExample,
  DayWordInfo,
  DayWordPartOfSpeech,
  DayWordPronounce,
  WordOfDayContainer,
} from '@/views/search/lexicon/styles/wordOfDayStyles';
import { DefinitionListView } from '@/views/search/lexicon/components/WordDefinitions';
import { AudioPlayer } from '@/components/Audio/AudioPlayer';
import { Size } from '@/types';
import { isAudioAvailable, pronunciationView, wordExampleView, wordParamBasicView } from '../utils';
import { WordOfDayProps } from '../types/lexiconTypes';

export function WordOfDay(props: WordOfDayProps) {
  const { wordDefinition } = props;
  const navigate: NavigateFunction = useNavigate();
  let wordAudioComponent: JSX.Element = <span />;
  let view: JSX.Element = (
    <WordOfDayContainer>
      <DayWordInfo>
        <DayWord>
          No Words Available
        </DayWord>
      </DayWordInfo>
    </WordOfDayContainer>
  );

  if (isAudioAvailable(wordDefinition.audio)) {
    wordAudioComponent = <AudioPlayer size={Size.small} src={wordDefinition.audio} />;
  }

  if (wordDefinition && wordDefinition.word) {
    view = (
      <WordOfDayContainer>
        <DayWordInfo>
          <DayWord
            onClick={() => navigate(`/search/system/lexicon/definition?word=${wordDefinition.word}`)}
          >
            {wordDefinition.word}
          </DayWord>
          <DayWordDate>{wordParamBasicView(wordDefinition.dateFirstUsed)}</DayWordDate>
          <DayWordPartOfSpeech>
            {wordParamBasicView(wordDefinition.partOfSpeech)}
          </DayWordPartOfSpeech>
          <DayWordBreak>{wordParamBasicView(wordDefinition.wordBreak)}</DayWordBreak>
          <DayWordPronounce>{pronunciationView(...wordDefinition.pronounce)}</DayWordPronounce>
          <li style={{ marginLeft: '15px' }}>{wordAudioComponent}</li>
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

  return view;
}
