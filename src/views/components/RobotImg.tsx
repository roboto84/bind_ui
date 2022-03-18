import { RobotImgContainer } from '@/views/home/styles/homeStyles';
import { FaRobot } from 'react-icons/fa';
import { SiProbot } from 'react-icons/si';
import { GiRobotAntennas } from 'react-icons/gi';
import React from 'react';
import { randomIntFromInterval } from '@/utils/utils';

export type RobotImgProps = {
  robotType?: string
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
  const { robotType } = props;
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
    <RobotImgContainer>
      {robotPicker(robotType)}
    </RobotImgContainer>
  );
}

RobotImg.defaultProps = {
  robotType: '',
};

export default RobotImg;
