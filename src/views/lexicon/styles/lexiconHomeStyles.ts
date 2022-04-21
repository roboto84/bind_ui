import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export const Section = styled.div`
  background-color: ${(props: GlobalThemeType) => props.theme.lexicon.containerBackgroundColor};
  padding: 20px;
  margin: 30px 5vw 20px 5vw;
  border-radius: 10px;
`;

export const WordOfDaySection = styled(Section)``;
export const WordListSection = styled.div``;
export const WordListContainer = styled(Section)``;
export const LatestWordListContainer = styled.div`{
  margin: 0 50px;
  display: flex;
  flex-wrap: wrap;
}`;
