import { SiProbot } from 'react-icons/si';
import { GiOwl, GiRobotAntennas } from 'react-icons/gi';
import React from 'react';
import { AiOutlineExperiment } from 'react-icons/ai';
import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { FaRobot } from 'react-icons/fa';

type RobotImgProps = {
  robotType ?: string,
  opacity ?: string,
  fontSize ?: string,
  margin ?: string
}

interface RobotImageContainerProps extends GlobalThemeType {
  fontSize ?: string,
  opacity ?: string,
  margin ?: string,
}

const RobotImgContainer = styled.div<RobotImageContainerProps>`
  opacity: ${(props: RobotImageContainerProps) => (props.opacity || '1')};
  font-size: ${(props: RobotImageContainerProps) => (props.fontSize || 'inherit')};
  margin: ${(props: RobotImageContainerProps) => (props.margin || 'inherit')};
`;

function Icon(props: RobotImgProps):React.ComponentElement<any, any> {
  const { robotType, opacity, fontSize, margin } = props;
  const iconPicker = (robot: string) => {
    switch (robot) {
      case 'FaRobot':
        return <FaRobot />;
      case 'SiProbot':
        return <SiProbot />;
      case 'GiRobotAntennas':
        return <GiRobotAntennas />;
      case 'GiOwl':
        return <GiOwl />;
      default:
        return <AiOutlineExperiment />;
    }
  };

  return (
    <RobotImgContainer fontSize={fontSize} margin={margin} opacity={opacity}>
      {iconPicker(robotType)}
    </RobotImgContainer>
  );
}

Icon.defaultProps = {
  robotType: '',
  opacity: '1',
  fontSize: 'inherit',
  margin: 0,
};

export default Icon;
