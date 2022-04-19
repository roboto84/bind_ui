import React, { ReactNode } from 'react';
import { WordSearchDefinitionProps } from '@/views/lexicon/types/lexiconTypes';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import {
  pronunciationView,
  wordEtymologyView,
  wordExampleView,
  wordParamBasicView
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
  WordDefinitions,
  WordDefinitionList,
  WordDefinition,
  Stem,
} from './styles/wordSearchDefinition';

export function LexiconSearchDefinition(props: WordSearchDefinitionProps) {
  const { wordDefinition } = props;
  const navigate: NavigateFunction = useNavigate();
  let wordAudioComponent: JSX.Element = <span />;
  const wordStemsView: {}[] = wordDefinition.stems.map(
    (wordStem:string, index:number, array:string[]) => {
      const stem: ReactNode = (
        <Stem
          key={'wordStem-'.concat(wordStem)}
          className="word_list_item"
          onClick={() => navigate(`/lexicon/search?word=${wordStem}`)}
        >
          {wordStem}
        </Stem>
      );
      if (index === array.length - 1) {
        return stem;
      }
      return (
        <span key={'wordStemContainer-'.concat(wordStem)}>
          {stem}
          <span key={'wordStemComma-'.concat(wordStem)}>,</span>
        </span>
      );
    },
  );

  if (wordDefinition.audio && wordDefinition.audio !== 'n/a' && wordDefinition.audio !== 'unk') {
    wordAudioComponent = (
      <WordAudio>
        <audio id="audio" controls>
          <source id="audioSource" src={wordDefinition.audio} />
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
      <WordDefinitions>
        <WordDefinitionList>
          {wordDefinition.definitions.map((definition:string) => (
            <li key={'wordDef-'.concat(definition.substring(0, 20))}>
              { definition }
            </li>
          ))}
        </WordDefinitionList>
      </WordDefinitions>
      <WordExamples>
        {wordExampleView(wordDefinition.example)}
      </WordExamples>
    </WordDefinition>
  );
}
