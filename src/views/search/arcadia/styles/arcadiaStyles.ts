import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export const ArcadiaContainer = styled.div``;

export const AlphabetHeader = styled.h1`
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.alphabetHeaderColor};
`;

export const SubTagHeader = styled.h2`
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.subTitleColor};
  padding: 25px 0 0 40px;
`;

export const ArcResultTimeStamp = styled.span`
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.timeColor};
`;
