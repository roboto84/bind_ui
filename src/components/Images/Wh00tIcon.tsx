import { RobotImgContainer } from '@/styles/robotImageStyle';
import { GiOwl } from 'react-icons/gi';
import React from 'react';

export type Wh00tIconProps = {
  opacity ?: string,
  fontSize ?: string,
  margin ?: string
}

function Wh00tIcon(props: Wh00tIconProps):React.ComponentElement<any, any> {
  const { opacity, fontSize, margin } = props;
  return (
    <RobotImgContainer fontSize={fontSize} margin={margin} opacity={opacity}>
      <GiOwl />
    </RobotImgContainer>
  );
}

Wh00tIcon.defaultProps = {
  opacity: '1',
  fontSize: 'inherit',
  margin: 0,
};

export default Wh00tIcon;
