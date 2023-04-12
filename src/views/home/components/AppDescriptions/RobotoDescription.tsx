import React from 'react';
import { WordOfDay } from '@/views/search/lexicon/components/WordOfDay';
import { WordDefinition } from '@/views/search/lexicon/types/lexiconTypes';
import { RobotoDescriptionContainer } from './appDescriptionsStyles';

export default function RobotoDescription() {
  const robotoDefinition: WordDefinition = {
    word: 'Bind',
    definitionIsAcceptable: true,
    spellingSuggestions: [],
    stems: [],
    dateFirstUsed: '1984',
    partOfSpeech: 'noun',
    wordBreak: 'ˈbīnd',
    pronounce: ['ˈbīnd', ''],
    audio: 'n/a',
    etymology: '',
    definitions: [
      'a compendium of useful, and personal web based tools.',
      'a web platform that helps organize internet data streams using chat bots and custom UIs.',
      'a web platform that allows for the quick development of tools which organize specific data streams of interest.',
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
