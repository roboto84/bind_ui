import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { Section } from '@/views/styles/appStyles';

export const ArcadiaContainer = styled.div``;

export const AlphabetHeader = styled.h1`
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.alphabetHeaderColor};
`;

export const SubTagHeader = styled.h2`
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.subTitleColor};
  padding: 25px 0 0 40px;
`;

export const InlineHeader = styled.span`
  font-size: 25px;
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.alphabetHeaderColor};
`;

export const ArcResultContainer = styled(Section)`
  display: flex;
  flex-direction: row;
  border: 0;
  margin: 20px 0;
  font-size: 20px;
`;

export const SimilarResultsSection = styled(ArcResultContainer)`
  font-size: 16px;
`;

export const ArcResultTitle = styled.span`
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.subTitleColor};
  font-size: 20px;
`;

export const ArcResultDescription = styled.span`
  font-size: 15px;
`;

export const ArcResultTimeStamp = styled.span`
  font-size: 16px;
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.timeColor};
`;
