import React from 'react';
import { WordOfDay } from '@/views/search/lexicon/components/WordOfDay';
import { WordDefinition } from '@/views/search/lexicon/types/lexiconTypes';
import { BindDescriptionContainer } from './appDescriptionsStyles';

export default function BindDescription() {
  const bindDefinition: WordDefinition = {
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
      'A platform which provides a flexible interface for data that supports curiosity and learning.',
      'A web platform that helps organize internet data streams using chat bots and custom UIs.',
      'A web platform that allows for the quick development of tools which organize specific'
      + ' data streams of interest.',
    ],
    example: 'n/a',
    source: 'local',
  };

  return (
    <BindDescriptionContainer>
      <WordOfDay wordDefinition={bindDefinition} />
    </BindDescriptionContainer>
  );
}
