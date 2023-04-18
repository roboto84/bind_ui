import {
  WordAudio,
} from '@/views/search/lexicon/components/lexiconSearchDefinition/styles/wordSearchDefinitionStyle';
import React from 'react';
import { Size } from '@/types';

type AudioPlayerProps = {
  src: string,
  size: Size
}

export function AudioPlayer(props: AudioPlayerProps) {
  const { src, size } = props;
  let audioPlayerStyle = {};

  if (size === Size.small) {
    audioPlayerStyle = {
      width: '50px',
    };
  }

  return (
    <audio style={audioPlayerStyle} preload="auto" controls key={src}>
      <source src={src} type="audio/mpeg" />
      <p>
        Your browser does not support HTML5 audio.
        Here is a <a href={src}>link to download the audio</a> instead.
      </p>
    </audio>
  );
}
