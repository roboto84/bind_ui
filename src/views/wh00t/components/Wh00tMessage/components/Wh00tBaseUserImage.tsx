import { Wh00tBaseUserImageProps } from '@/views/wh00t/types/wh00tTypes';
import React from 'react';
import Icon from '@/components/Images/Icon';
import { userIsBot } from '@/views/wh00t/utils/utils';
import { Wh00tBaseUserImageContainer, Wh00tChatImageWrapper } from '../styles/wh00tMessageStyle';

export function Wh00tBaseUserImage(props: Wh00tBaseUserImageProps) {
  const { currentClientId, username } = props;
  const botImage: JSX.Element = <Icon robotType="FaRobot" margin="5px 0 0 -1px" />;
  const wh00tImage: JSX.Element = <Icon robotType="GiOwl" margin="5px 0 0 -1px" />;
  const usernameFirstInitial: string = username.substring(0, 1);
  const isUserBot: boolean = userIsBot(username);
  const userIsWh00t: boolean = username === 'wh00t';
  let backgroundColor: string = 'OtherUsernamesBaseImageBackgroundColor';
  let image: string|JSX.Element = usernameFirstInitial;

  if (userIsWh00t) {
    image = wh00tImage;
    backgroundColor = 'BotBaseImageBackgroundColor';
  } else if (isUserBot) {
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
