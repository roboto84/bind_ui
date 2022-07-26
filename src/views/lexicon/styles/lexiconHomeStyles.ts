import styled from 'styled-components';
import { Section } from '@/views/styles/appStyles';
import { device } from '@/styles/responsive';

export const LexiconSection = styled(Section)`
  margin: 40px 5vw 20px 5vw;

  @media ${device.tabletS} {
    padding: 5px;
    margin: 0 5px 15px 5px;
  }
`;
export const WordOfDaySection = styled(LexiconSection)``;
export const WordListSection = styled(LexiconSection)``;
export const LatestWordListContainer = styled.ul`{
  all: unset;
  margin: 0 50px;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  
  li {
    list-style: none
  }
}`;
