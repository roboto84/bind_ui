import { RobotImgContainer } from '@/styles/robotImageStyle';
import { SiProbot } from 'react-icons/si';
import { GiRobotAntennas } from 'react-icons/gi';
import React from 'react';
import { AiOutlineExperiment } from 'react-icons/ai';

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
        return <AiOutlineExperiment />;
      case 'SiProbot':
        return <SiProbot />;
      case 'GiRobotAntennas':
        return <GiRobotAntennas />;
      default:
        return <AiOutlineExperiment />;
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
