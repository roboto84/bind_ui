import { RobotImgContainer } from '@/styles/robotImageStyle';
import { FaRobot } from 'react-icons/fa';
import { SiProbot } from 'react-icons/si';
import { GiRobotAntennas } from 'react-icons/gi';
import React from 'react';
import { randomIntFromInterval } from '@/utils/utils';

export type RobotImgProps = {
  robotType ?: string,
  opacity ?: string,
  fontSize ?: string,
  margin ?: string
}

function RobotImg(props: RobotImgProps):React.ComponentElement<any, any> {
  const { robotType, opacity, fontSize, margin } = props;
  const robotPicker = (robot: string) => {
    switch (robot) {
      case 'FaRobot':
        return <FaRobot />;
      case 'SiProbot':
        return <SiProbot />;
      case 'GiRobotAntennas':
        return <GiRobotAntennas />;
      default:
        return <FaRobot />;
    }
  };

  return (
    <RobotImgContainer fontSize={fontSize} margin={margin} opacity={opacity}>
      {robotPicker(robotType)}
    </RobotImgContainer>
  );
}

RobotImg.defaultProps = {
  robotType: '',
  opacity: '1',
  fontSize: 'inherit',
  margin: 0,
};

export default RobotImg;
