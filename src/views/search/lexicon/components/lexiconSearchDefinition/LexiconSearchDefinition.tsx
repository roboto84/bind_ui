import React from 'react';
import { WordSearchDefinitionProps } from '@/views/search/lexicon/types/lexiconTypes';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import DefinitionListView from '@/views/search/lexicon/components/DefintitionListView';
import { Size } from '@/types';
import {
  LexiconSearchDefinitionSmallView,
} from '@/views/search/lexicon/components/lexiconSearchDefinition/components/LexiconSearchDefinitionSmallView';
import { AudioPlayer } from '@/components/Audio/AudioPlayer';
import {
  isAudioAvailable,
  pronunciationView,
  wordEtymologyView,
  wordExampleView,
  wordParamBasicView,
} from '../../utils';
import {
  DateFirstUsed,
  PartOfSpeech,
  Pronunciation,
  Stem,
  Word,
  WordAudio,
  WordBreak,
  WordDefEtymology,
  WordDefinition,
  WordDefinitionIntroduction,
  WordDefinitionList,
  WordDefStems,
  WordExamples,
} from './styles/wordSearchDefinitionStyle';

export function LexiconSearchDefinition(props: WordSearchDefinitionProps) {
  const { wordDefinition, size } = props;
  const navigate: NavigateFunction = useNavigate();
  let wordAudioComponent: JSX.Element = <span />;

  if (isAudioAvailable(wordDefinition.audio)) {
    wordAudioComponent = (
      <WordAudio>
        <AudioPlayer src={wordDefinition.audio} />
      </WordAudio>
    );
  }

  const wordStemsView: JSX.Element[]| JSX.Element = 'stems' in wordDefinition ? wordDefinition.stems.map(
    (wordStem:string) => (
      <Stem
        key={'wordStem-'.concat(wordStem)}
        onClick={() => navigate(`/search/system/lexicon/definition?word=${wordStem}`)}
      >
        {wordStem}
      </Stem>
    ),
  ) : <span />;

  if (size === Size.small) {
    return <LexiconSearchDefinitionSmallView wordDefinition={wordDefinition} />;
  }

  return (
    <WordDefinition withShadow>
      <WordDefinitionIntroduction>
        <Word>{wordDefinition.word}</Word>
        <DateFirstUsed>{wordParamBasicView(wordDefinition.dateFirstUsed)}</DateFirstUsed>
        <PartOfSpeech>{wordParamBasicView(wordDefinition.partOfSpeech.toLowerCase())}</PartOfSpeech>
        <WordBreak>{wordParamBasicView(wordDefinition.wordBreak)}</WordBreak>
        <Pronunciation>{pronunciationView(...wordDefinition.pronounce)}</Pronunciation>
        {wordAudioComponent}
      </WordDefinitionIntroduction>
      <WordDefStems>{wordStemsView}</WordDefStems>
      <WordDefEtymology>
        {wordEtymologyView(wordDefinition.etymology)}
      </WordDefEtymology>
      <WordDefinitionList>
        <DefinitionListView definitions={wordDefinition.definitions} />
      </WordDefinitionList>
      <WordExamples>
        {wordExampleView(wordDefinition.example)}
      </WordExamples>
    </WordDefinition>
  );
}
