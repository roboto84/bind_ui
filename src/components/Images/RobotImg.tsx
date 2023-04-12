import { RobotImgContainer } from '@/styles/robotImageStyle';
import { SiProbot } from 'react-icons/si';
import { GiRobotAntennas, GiSpiderWeb } from 'react-icons/gi';
import React from 'react';

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
        return <GiSpiderWeb />;
      case 'SiProbot':
        return <SiProbot />;
      case 'GiRobotAntennas':
        return <GiRobotAntennas />;
      default:
        return <GiSpiderWeb />;
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
