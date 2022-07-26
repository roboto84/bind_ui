import React, { ReactNode } from 'react';
import { WordSearchDefinitionProps } from '@/views/lexicon/types/lexiconTypes';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { DefinitionListView } from '@/views/lexicon/components/WordDefinitions';
import {
  pronunciationView,
  wordEtymologyView,
  wordExampleView,
  wordParamBasicView,
} from '../../utils';
import {
  WordDefinitionIntroduction,
  Word,
  WordAudio,
  WordBreak,
  PartOfSpeech,
  Pronunciation,
  DateFirstUsed,
  WordDefStems,
  WordDefEtymology,
  WordExamples,
  WordDefinitionList,
  WordDefinition,
  Stem,
} from './styles/wordSearchDefinitionStyle';

export function LexiconSearchDefinition(props: WordSearchDefinitionProps) {
  const { wordDefinition } = props;
  const navigate: NavigateFunction = useNavigate();
  let wordAudioComponent: JSX.Element = <span />;
  const wordStemsView: {}[] = wordDefinition.stems.map(
    (wordStem:string, index:number, array:string[]) => {
      const stem: ReactNode = (
        <Stem
          key={'wordStem-'.concat(wordStem)}
          onClick={() => navigate(`/lexicon/search?word=${wordStem}`)}
        >
          {wordStem}
        </Stem>
      );
      if (index === array.length - 1) {
        return stem;
      }
      return (
        <>
          {stem}
          <li key={'wordStemComma-'.concat(wordStem)}>,</li>
        </>
      );
    },
  );

  if (wordDefinition.audio && wordDefinition.audio !== 'n/a' && wordDefinition.audio !== 'unk') {
    wordAudioComponent = (
      <WordAudio>
        <audio preload="auto" controls>
          <source src={wordDefinition.audio} type="audio/mpeg" />
          Your browser does not support the audio format.
        </audio>
      </WordAudio>
    );
  }

  return (
    <WordDefinition>
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
