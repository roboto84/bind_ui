import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { NonListHoverable, Section } from '@/views/styles/appStyles';
import { device } from '@/styles/responsive';
import { Input } from '@/components/Input/Input';
import { InputTextArea } from '@/components/Input/InputTextArea';

export const ArcadiaContainer = styled.div`
  width: 80%;
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

  a:link {
    text-decoration: none;
    color: inherit
  }

  a:hover {
    text-decoration: none;
    color: inherit
  }
`;

export const InnerLinks = styled.div`
  margin: 20px 0;
  max-width: 80vw;
  display: flex;
  flex-wrap: wrap;
  gap: 7px 5px;
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

export const ArcEditFieldContainer = styled.div``;

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

export const ArcResultDeleteQuestionContainer = styled.div`
  height: 85px;
`;

export const ArcResultDeleteMessage = styled.div``;

export const ArcInputTitle = styled.div`
  font-size: 16px;
  margin: 2px;
`;

export const ArcInput = styled(Input)`
  font-size: 12px;
  width: 90%;
  border-radius: 5px;
  
  :focus{
    border-color: #696969;
    background-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputBackgroundColor};
    color: ${(props: GlobalThemeType) => props.theme.wh00t.miniWh00t.inputColor};
  }

  @media ${device.tabletS} {}
`;

export const ArcInputTextArea = styled(InputTextArea)`
  border-radius: 5px;
  width: 90%;
`;
