import styled from 'styled-components';
import { Section } from '@/views/styles/appStyles';
import { device } from '@/styles/responsive';

export const LexiconSection = styled(Section)`
  @media ${device.tabletS} {
    padding: 5px;
    margin: 0 5px 15px 5px;
  }
`;

export const LatestWordListContainer = styled.ul`{
  all: unset;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  column-gap: 15px;
  
  li {
    list-style: none
  }
}`;
