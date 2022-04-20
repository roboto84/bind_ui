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

function randomRobotPicker() {
  const randomNumber: number = randomIntFromInterval(1, 4);
  switch (randomNumber) {
    case 1:
      return <FaRobot />;
    case 2:
      return <SiProbot />;
    default:
      return <GiRobotAntennas />;
  }
}

function RobotImg(props: RobotImgProps):React.ComponentElement<any, any> {
  const { robotType, fontSize, margin } = props;
  const robotPicker = (robot: string) => {
    switch (robot) {
      case 'FaRobot':
        return <FaRobot />;
      case 'SiProbot':
        return <SiProbot />;
      case 'GiRobotAntennas':
        return <GiRobotAntennas />;
      default:
        return randomRobotPicker();
    }
  };

  return (
    <RobotImgContainer fontSize={fontSize} margin={margin}>
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
