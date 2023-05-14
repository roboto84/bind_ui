import React, { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { Button } from '@/components/Nav/Button';

type AudioPlayerProps = {
  src: string
}

export function AudioPlayer(props: AudioPlayerProps) {
  const { src } = props;
  const [audio] = useState<HTMLAudioElement>(new Audio(src));
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const controlAudio = () => {
    if (!audio.paused && !audio.ended) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  audio.addEventListener('ended', () => {
    setIsPlaying(false);
  });

  return (
    <Button
      title="Play Audio"
      borderRadius="100%"
      padding="9px 11px 8px 12px"
      fontSize="15px"
      onClick={controlAudio}
    >
      {isPlaying ? <FaPause /> : <FaPlay />}
    </Button>
  );
}
