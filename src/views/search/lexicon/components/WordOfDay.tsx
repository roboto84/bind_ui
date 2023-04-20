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
  DayWordPronounce, ShowMoreButtonContainer,
  WordOfDayContainer,
} from '@/views/search/lexicon/styles/wordOfDayStyles';
import DefinitionListView from '@/views/search/lexicon/components/DefintitionListView';
import { AudioPlayer } from '@/components/Audio/AudioPlayer';
import { Size } from '@/types';
import { Button } from '@/components/Nav/Button';
import { isAudioAvailable, pronunciationView, wordExampleView, wordParamBasicView } from '../utils';
import { WordOfDayProps } from '../types/lexiconTypes';

export function WordOfDay(props: WordOfDayProps) {
  const { wordDefinition } = props;
  const definitionsToShow: number = 4;
  const navigate: NavigateFunction = useNavigate();

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
    const navigateToWord: CallableFunction = () => {
      navigate(`/search/system/lexicon/definition?word=${wordDefinition.word}`);
    };

    const showMoreDefButton: JSX.Element = wordDefinition.definitions.length > definitionsToShow
      ? (
        <Button
          fontSize="14px"
          padding="8px"
          borderRadius="5px"
          onClick={() => navigateToWord()}
          title="Show More"
        >
          Show More
        </Button>
      )
      : <div />;

    const wordAudioComponent: JSX.Element = isAudioAvailable(wordDefinition.audio)
      ? <AudioPlayer size={Size.small} src={wordDefinition.audio} />
      : <span />;

    view = (
      <WordOfDayContainer>
        <DayWordInfo>
          <DayWord
            onClick={() => navigateToWord()}
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
          <DefinitionListView
            definitionsToShow={definitionsToShow}
            definitions={wordDefinition.definitions}
          />
        </DayWordDefinitionsList>

        <DayWordExample>
          {wordExampleView(wordDefinition.example)}
        </DayWordExample>
        <ShowMoreButtonContainer>
          {showMoreDefButton}
        </ShowMoreButtonContainer>
      </WordOfDayContainer>
    );
  }

  return view;
}
