import React from 'react';
import { WordOfDay } from '@/views/lexicon/components/WordOfDay';
import { WordDefinition } from '@/views/lexicon/types/lexiconTypes';
import { RobotoDescriptionContainer } from './appDescriptionsStyles';

export default function RobotoDescription() {
  const robotoDefinition: WordDefinition = {
    word: 'roboto',
    definitionIsAcceptable: true,
    spellingSuggestions: [],
    stems: [],
    dateFirstUsed: '1984',
    partOfSpeech: 'noun',
    wordBreak: 'ro*bot*o',
    pronounce: ['ˈrō-ˌbätˌō', ''],
    audio: 'n/a',
    etymology: 'from a song',
    definitions: [
      'a web platform that helps organize internet data streams using chat bots and custom UIs.',
      'a web platform that allows for the quick development of tools which organize specific data streams of interest.',
      'a web application, without advertisements and web crud, which presents the data you care about in a clean way.',
    ],
    example: 'n/a',
    source: 'local',
  };

  return (
    <RobotoDescriptionContainer>
      <WordOfDay wordDefinition={robotoDefinition} />
    </RobotoDescriptionContainer>
  );
}
