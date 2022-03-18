import { Wh00tBaseUserImageProps } from '@/views/wh00t/types/wh00tTypes';
import React from 'react';
import { Wh00tBaseUserImageContainer } from '../styles/wh00tMessageStyle';

export function Wh00tBaseUserImage(props: Wh00tBaseUserImageProps) {
  const { currentClientId, username, imageSrc } = props;
  const backgroundColor: string = currentClientId === username
    ? 'UsernameBaseImageBackgroundColor'
    : 'OtherUsernamesBaseImageBackgroundColor';
  return (
    <Wh00tBaseUserImageContainer className={backgroundColor}>
      {username.substring(0, 1)}
    </Wh00tBaseUserImageContainer>
  );
}
