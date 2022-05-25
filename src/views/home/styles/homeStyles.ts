import styled from 'styled-components';
import { device } from '@/styles/responsive';
import { Section } from '@/views/styles/appStyles';

export const HomeContainer = styled.div`
  padding-top: calc(8vh);

  &.side-flexed {
    display: flex;
    justify-content: space-evenly;
  }

  @media ${device.tabletS} {
    padding-top: calc(6vh);
  }

  @media ${device.tabletS} {
    padding-top: 10px;
  }
`;

export const AppDescriptionContainer = styled.div`
  width: 600px;

  @media ${device.tabletS} {
    width: 800px;
  }
`;

export const ChildAppDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 10px;
`;

export const AppDescription = styled.div`
  min-height: calc(40vh + 100px);
  height: calc(100% + 20px);
  margin: 20px 8vw 0 0;
  font-family: verdana,serif;
  font-size: 16px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    margin: 0;
  }

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

export const ImageContainer = styled.div`
  @media ${device.laptop} {
    display: none
  }
`;
