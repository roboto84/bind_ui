import { Wh00tBaseUserImageProps } from '@/views/wh00t/types/wh00tTypes';
import React from 'react';
import RobotImg from '@/components/Images/RobotImg';
import Wh00tIcon from '@/components/Images/Wh00tIcon';
import { Wh00tBaseUserImageContainer, Wh00tChatImageWrapper } from '../styles/wh00tMessageStyle';

export function Wh00tBaseUserImage(props: Wh00tBaseUserImageProps) {
  const { currentClientId, username } = props;
  const botImage: JSX.Element = <RobotImg margin="5px 0 0 -1px" />;
  const wh00tImage: JSX.Element = <Wh00tIcon margin="5px 0 0 -1px" />;
  const usernameFirstInitial: string = username.substring(0, 1);
  const userIsBot: boolean = username.includes('bot');
  const userIsWh00t: boolean = username === 'wh00t';
  let backgroundColor: string = 'OtherUsernamesBaseImageBackgroundColor';
  let image: string|JSX.Element = usernameFirstInitial;

  if (userIsWh00t) {
    image = wh00tImage;
    backgroundColor = 'BotBaseImageBackgroundColor';
  } else if (userIsBot) {
    image = botImage;
    backgroundColor = 'BotBaseImageBackgroundColor';
  } else if (currentClientId === username) {
    backgroundColor = 'UsernameBaseImageBackgroundColor';
  }

  return (
    <Wh00tBaseUserImageContainer className={backgroundColor}>
      <Wh00tChatImageWrapper>
        {image}
      </Wh00tChatImageWrapper>
    </Wh00tBaseUserImageContainer>
  );
}
