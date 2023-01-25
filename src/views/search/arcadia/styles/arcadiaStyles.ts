import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { NonListHoverable, Section } from '@/views/styles/appStyles';
import { device } from '@/styles/responsive';

export const ArcadiaContainer = styled.div`
  width: 80vw;
  margin: auto;

  @media ${device.laptopL} {
    width: 99%;
  }
`;

export const AlphabetHeader = styled.h1`
  margin-left: 0;
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.alphabetHeaderColor};
`;

export const SubTagHeader = styled(NonListHoverable)`
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.subTitleColor};
  background-color: ${(props: GlobalThemeType) => props.theme.core.section.backgroundColor};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
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

  a:link {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const SimilarResultsSection = styled(ArcResultContainer)`
  font-size: 16px;
`;

export const ArcImageContainer = styled.div`
  margin: auto 0;
  display: inherit;
  
  @media ${device.tablet} {
    display: none;
  }
`;

export const ArcResultTitle = styled.span`
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.subTitleColor};
  font-size: 20px;
`;

export const ArcResultDescription = styled.span`
  font-size: 16px;
`;

export const ArcResultTimeStamp = styled.span`
  font-size: 16px;
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.timeColor};
`;
