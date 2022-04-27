import styled from 'styled-components';
import { Section } from '@/views/styles/appStyles';

export const LexiconSection = styled(Section)`
  margin: 30px 5vw 20px 5vw;
`;
export const WordOfDaySection = styled(LexiconSection)``;
export const WordListSection = styled.div``;
export const WordListContainer = styled(LexiconSection)``;
export const LatestWordListContainer = styled.div`{
  margin: 0 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 190px;
}`;
