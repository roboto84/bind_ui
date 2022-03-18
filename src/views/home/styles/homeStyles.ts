import styled from 'styled-components';
import { device } from '@/styles/responsive';

export const HomeContainer = styled.div`
  padding-top: calc(15vh);

  &.side-flexed {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const LinkContainer = styled.div`
  font-family: verdana,serif;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 125px;
  justify-content: space-between;
  height: 285px;
  
  @media ${device.desktop} {
    width: 25%
  }
  
  @media ${device.laptopL} {
    width: 40%
  }
  
  @media ${device.laptop} {
    width: 55%
  }
  
  @media ${device.tablet} {
    width: 90%
  }
`;

export const RobotImgContainer = styled.div`
  opacity: 0.7;
  font-size: 445px;
  
  @media ${device.laptop} {
    display: none;
  }
`;
