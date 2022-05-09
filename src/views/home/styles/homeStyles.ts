import styled from 'styled-components';
import { device } from '@/styles/responsive';

export const HomeContainer = styled.div`
  padding-top: calc(15vh);

  &.side-flexed {
    display: flex;
    justify-content: space-evenly;
  }

  @media ${device.tabletS} {
    padding-top: calc(8vh);
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

export const ImageContainer = styled.div`
  @media ${device.laptop} {
    display: none;
  }
`;
