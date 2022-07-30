import styled from 'styled-components';
import { Section } from '@/views/styles/appStyles';
import { device } from '@/styles/responsive';

export const LexiconSection = styled(Section)`
  margin: 40px 5vw 20px 5vw;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.06) , 0 2px 2px rgba(0,0,0,0.04) , 0 4px 4px rgba(0,0,0,0.05) , 0 6px 6px rgba(0,0,0,0.06);

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
