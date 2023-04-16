import React from 'react';
import { WordSearchDefinitionProps } from '@/views/search/lexicon/types/lexiconTypes';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { DefinitionListView } from '@/views/search/lexicon/components/WordDefinitions';
import { Size } from '@/types';
import {
  LexiconSearchDefinitionSmallView,
} from '@/views/search/lexicon/components/lexiconSearchDefinition/components/LexiconSearchDefinitionSmallView';
import {
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

  const wordStemsView: JSX.Element[] = wordDefinition.stems.map(
    (wordStem:string) => (
      <Stem
        key={'wordStem-'.concat(wordStem)}
        onClick={() => navigate(`/search/system/lexicon/definition?word=${wordStem}`)}
      >
        {wordStem}
      </Stem>
    ),
  );

  if (wordDefinition.audio && wordDefinition.audio !== 'n/a' && wordDefinition.audio !== 'unk') {
    wordAudioComponent = (
      <WordAudio>
        <audio preload="auto" controls key={wordDefinition.audio}>
          <source src={wordDefinition.audio} type="audio/mpeg" />
          <p>
            Your browser does not support HTML5 audio.
            Here is a <a href={wordDefinition.audio}>link to download the audio</a> instead.
          </p>
        </audio>
      </WordAudio>
    );
  }

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
      </WordDefinitionIntroduction>
      <WordDefStems>{wordStemsView}</WordDefStems>
      {wordAudioComponent}
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
