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
    description: 'A location specific weather and air quality tracking system.',
    link: '/air',
    icon: <TiWeatherStormy />,
  },
  Search: {
    description: 'A search system for a personal graph based collection/library.',
    link: '/search',
    icon: <GiBookmarklet />,
  },
  Chat: {
    description: 'A chat system with no external dependencies.',
    link: '/wh00t',
    icon: <BsFillChatTextFill />,
  },
  Debug: {
    description: 'Bind\'s own debugging zone.',
    link: '/debug',
    icon: <BsBug />,
  },
};
