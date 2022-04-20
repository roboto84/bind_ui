import { Wh00tBaseUserImageProps } from '@/views/wh00t/types/wh00tTypes';
import React from 'react';
import RobotImg from '@/views/components/RobotImg';
import { Wh00tBaseUserImageContainer, Wh00tChatImageWrapper } from '../styles/wh00tMessageStyle';

export function Wh00tBaseUserImage(props: Wh00tBaseUserImageProps) {
  const { currentClientId, username } = props;
  const botImage: JSX.Element = <RobotImg margin="5px 0 0 -3px" robotType="GiRobotAntennas" />;
  const usernameFirstInitial: string = username.substring(0, 1);
  const backgroundColor: string = currentClientId === username
    ? 'UsernameBaseImageBackgroundColor'
    : 'OtherUsernamesBaseImageBackgroundColor';

  const image: string|JSX.Element = username.includes('bot') ? botImage : usernameFirstInitial;
  return (
    <Wh00tBaseUserImageContainer className={backgroundColor}>
      <Wh00tChatImageWrapper>
        {image}
      </Wh00tChatImageWrapper>
    </Wh00tBaseUserImageContainer>
  );
}
