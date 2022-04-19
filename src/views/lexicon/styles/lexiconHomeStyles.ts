import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export const WordOfDaySection = styled.div`
  background-color: ${(props: GlobalThemeType) => props.theme.lexicon.containerBackgroundColor};
  padding: 20px;
  margin: 50px 5vw 0 5vw;
  border-radius: 10px;
`;

export const WordListSection = styled.div``;

export const WordListContainer = styled(WordOfDaySection)``;

export const LatestWordListContainer = styled.div`{
  margin: 0 50px;
  display: flex;
  flex-wrap: wrap;
}`;
