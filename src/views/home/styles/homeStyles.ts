import styled from 'styled-components';
import { device } from '@/styles/responsive';
import { Section } from '@/views/styles/appStyles';

export const HomeContainer = styled.div`
  padding-top: calc(10vh);

  &.side-flexed {
    display: flex;
    justify-content: center;
  }

  @media ${device.tabletS} {
    padding-top: calc(8vh);
  }

  @media ${device.tabletS} {
    padding-top: 10px;
  }
`;

export const AppDescriptionContainer = styled(Section)`
  min-height: calc(40vh + 100px);
  height: calc(100% + 20px);
  margin: 20px 8vw 0 0;
  font-family: verdana,serif;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  
  @media ${device.desktop} {
    width: 45%
  }
  
  @media ${device.laptopL} {
    width: 45%;
    margin: 20px 5vw 0 0;
  }
  
  @media ${device.laptop} {
    width: 75%
  }
  
  @media ${device.tablet} {
    width: 90%;
    margin: 0 5px;
  }
`;

export const AppDescription = styled.div`
`;

export const ImageContainer = styled.div`
  
  @media ${device.laptop} {
    display: none;
  }
`;
