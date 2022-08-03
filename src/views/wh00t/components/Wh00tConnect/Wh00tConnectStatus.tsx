import React, { useState } from 'react';
import { Size } from '@/types';
import {
  Wh00tConnectContainer,
  Wh00tConnectStatusSection,
  Wh00tConnectTitle, Wh00tStatusContainer, Wh00tStatusTimer,
} from '@/views/wh00t/components/Wh00tConnect/styles/wh00tConnectStyle';
import Wh00tIcon from '@/components/Images/Wh00tIcon';
import Loader from '@/components/Misc/Loader';

type Wh00tConnectionStatusProps = {
  connectionStatus: string,
  size ?: Size
  titleFontSize ?: string
  titleMargin ?: string
  timer ?: number
}

function Wh00tConnectionStatus(props: Wh00tConnectionStatusProps) {
  const { connectionStatus, size, titleFontSize, titleMargin, timer } = props;
  const [timerValue, setTimerValue] = useState<number>(timer);
  if (timerValue > 0) {
    setTimeout(() => {
      setTimerValue(timerValue - 1);
    }, 1000);
  }
  const progressView: JSX.Element = timer
    ? <Wh00tStatusTimer>{timerValue}</Wh00tStatusTimer>
    : <Loader size={Size.small} />;

  return (
    <Wh00tConnectContainer>
      <Wh00tConnectStatusSection size={size}>
        <Wh00tIcon fontSize="70px" opacity="0.7" margin="20px 0 0 0" />
        <Wh00tStatusContainer>
          {progressView}
          <Wh00tConnectTitle fontSize={titleFontSize} margin={titleMargin}>
            {connectionStatus}
          </Wh00tConnectTitle>
        </Wh00tStatusContainer>
      </Wh00tConnectStatusSection>
    </Wh00tConnectContainer>
  );
}

Wh00tConnectionStatus.defaultProps = {
  size: Size.large,
  titleFontSize: '30px',
  titleMargin: '20px 10px',
  timer: 0,
};

export default Wh00tConnectionStatus;
