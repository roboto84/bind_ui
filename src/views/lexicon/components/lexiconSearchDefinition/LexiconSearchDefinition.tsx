import React, { ReactNode } from 'react';
import { WordSearchDefinitionProps } from '@/views/lexicon/types/lexiconTypes';
import { pronunciationView } from '@/utils/formatting';
import { NavigateFunction, useNavigate } from 'react-router-dom';
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
          key={'wordStem-'.concat(String(index))}
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
        <span key={'wordStemContainer-'.concat(String(index))}>
          {stem}
          <span key={'wordStemComma-'.concat(String(index))}>,</span>
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
        <DateFirstUsed>{wordDefinition.dateFirstUsed}</DateFirstUsed>
        <PartOfSpeech>{wordDefinition.partOfSpeech.toLowerCase()}</PartOfSpeech>
        <WordBreak>{wordDefinition.wordBreak}</WordBreak>
        <Pronunciation>{pronunciationView(...wordDefinition.pronounce)}</Pronunciation>
        {wordAudioComponent}
      </WordDefinitionIntroduction>
      <WordDefStems>{wordStemsView}</WordDefStems>
      <WordDefEtymology>◦ etymology: {wordDefinition.etymology}</WordDefEtymology>
      <WordDefinitions>
        <WordDefinitionList>
          {wordDefinition.definitions.map((definition:string, index:number) => (
            <li key={'wordDef-'.concat(String(index))}>
              { definition }
            </li>
          ))}
        </WordDefinitionList>
      </WordDefinitions>
      <WordExamples>( e.g. {wordDefinition.example} )</WordExamples>
    </WordDefinition>
  );
}
