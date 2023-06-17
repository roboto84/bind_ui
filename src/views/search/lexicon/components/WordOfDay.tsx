import React from 'react';
import { Link } from 'react-router-dom';
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
import DefinitionListView from '@/views/search/lexicon/components/DefintitionListView';
import { AudioPlayer } from '@/components/Audio/AudioPlayer';
import { isAudioAvailable, pronunciationView, wordExampleView, wordParamBasicView } from '../utils';
import { WordOfDayProps } from '../types/lexiconTypes';

export function WordOfDay(props: WordOfDayProps) {
  const { wordDefinition } = props;
  const navLocation: string = '/search/system/lexicon/definition?word=';

  let view: JSX.Element = (
    <WordOfDayContainer>
      <DayWordInfo>
        <DayWord>
          No Words Available
        </DayWord>
      </DayWordInfo>
    </WordOfDayContainer>
  );

  if (wordDefinition && wordDefinition.word) {
    const wordAudioComponent: JSX.Element = isAudioAvailable(wordDefinition.audio)
      ? <AudioPlayer src={wordDefinition.audio} />
      : <span />;

    view = (
      <WordOfDayContainer>
        <DayWordInfo>
          <Link to={navLocation.concat(wordDefinition.word)}>
            <DayWord>
              {wordDefinition.word}
            </DayWord>
          </Link>
          <DayWordDate>{wordParamBasicView(wordDefinition.dateFirstUsed)}</DayWordDate>
          <DayWordPartOfSpeech>
            {wordParamBasicView(wordDefinition.partOfSpeech)}
          </DayWordPartOfSpeech>
          <DayWordBreak>{wordParamBasicView(wordDefinition.wordBreak)}</DayWordBreak>
          <DayWordPronounce>{pronunciationView(...wordDefinition.pronounce)}</DayWordPronounce>
          <li style={{ marginLeft: '5px' }}>{wordAudioComponent}</li>
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
