import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { NonListHoverable, Section } from '@/views/styles/appStyles';
import { device } from '@/styles/responsive';
import { Input } from '@/components/Input/Input';
import { InputTextArea } from '@/components/Input/InputTextArea';
import { TagGroupSectionProps } from '@/views/search/arcadia/types/arcadiaTypes';

export const ArcadiaContainer = styled.div`
  width: 90%;
  margin: auto;

  @media ${device.laptopL} {
    width: 99%;
  }
`;

export const ColoredHeader = styled.h1`
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.alphabetHeaderColor};
`;

export const AlphabetHeader = styled(ColoredHeader)`
  margin-left: 0;
`;

export const SubTagHeader = styled(NonListHoverable)`
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.subTitleColor};
  background-color: ${(props: GlobalThemeType) => props.theme.core.section.backgroundColor};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.06) ,0 2px 2px rgba(0,0,0,0.04) ,0 4px 4px rgba(0,0,0,0.05) ,0 6px 6px rgba(0,0,0,0.06);

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
  //clip-path: polygon(20px 0%,calc(100% - 0px) 0%,100% 20px,100% calc(100% - 20px),calc(100% - 20px) 100%,0px 100%,0% calc(100% - 20px),0% 20px);
  box-shadow: 0 0 0 1px rgba(0,0,0,0.06) ,0 2px 2px rgba(0,0,0,0.04) ,0 4px 4px rgba(0,0,0,0.05) ,0 6px 6px rgba(0,0,0,0.06);
  
  a:link {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const TagsSection = styled(ArcResultContainer)<TagGroupSectionProps>`
  flex-direction: column;
  padding: 10px;
  font-size: 16px;
  border: ${(props: TagGroupSectionProps) => (
    props.isHighLight ? '3px' : '0px')} solid ${(props: TagGroupSectionProps) => (props.isHighLight ? props.theme.core.mainThemeColor : props.theme.air.weatherSubcategory.borderColor)};
`;

export const ArcImageContainer = styled.div`
  margin: 10px 0 0 0;
  display: inherit;
  
  @media ${device.tablet} {
    display: none;
  }
`;

export const ArcEditFieldContainer = styled.div``;

export const ArcResultTextContainer = styled.div`
  width: 100%;
`;

export const ArcResultFirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media ${device.laptop} {
    flex-direction: column;
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

export const ArcInitialDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  column-gap: 20px;

  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`;

export const ArcadiaSearchHomeContainer = styled.div`
  font-size: 17px;
  margin: 0 30px;
  color: ${(props:GlobalThemeType) => props.theme.lexicon.textColor};
`;
