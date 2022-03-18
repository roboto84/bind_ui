import styled from 'styled-components';
import { device } from '@/styles/responsive';

export const ErrorContainer = styled.div`
  font-family: verdana,serif;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  justify-content: space-between;
  height: 290px;
  
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

export const ErrorTitle = styled.div`
  font-size: 115px;
  margin: 20px 0;
`;
