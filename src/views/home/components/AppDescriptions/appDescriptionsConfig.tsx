import React from 'react';
import { TiWeatherStormy } from 'react-icons/ti';
import { BsBug, BsFillChatTextFill } from 'react-icons/bs';
import { GiBookmarklet } from 'react-icons/gi';

export type AppDescriptionType = {
  description: string,
  link: string,
  icon: JSX.Element
}

export const appDescriptionsConfig: {[key:string] : AppDescriptionType} = {
  Air: {
    description: 'A location specific weather, and air quality tracking system.',
    link: '/air',
    icon: <TiWeatherStormy />,
  },
  Lexicon: {
    description: 'A personalized dictionary made up of the words you curate.',
    link: '/lexicon',
    icon: <GiBookmarklet />,
  },
  wh00t: {
    description: 'A chat system with no external dependencies.',
    link: '/wh00t',
    icon: <BsFillChatTextFill />,
  },
  Debug: {
    description: 'Roboto\'s own debugging zone.',
    link: '/debug',
    icon: <BsBug />,
  },
};
