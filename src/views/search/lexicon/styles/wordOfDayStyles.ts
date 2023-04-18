import styled from 'styled-components';
import { Hoverable } from '@/views/styles/appStyles';
import { device } from '@/styles/responsive';
import { GlobalThemeType } from '@/types';

const generalDefinitionStyle: string = 'margin: 0 10px;';

const GeneralStyle = styled.li`
  margin: 0 8px; 
  color: ${(props: GlobalThemeType) => props.theme.lexicon.secondaryTextColor};
`;

export const WordOfDayOuterContainer = styled.div`
  padding: 0 20px;

  @media ${device.tabletS} {
    padding: 0 10px;
  }
`;

export const WordOfDayContainer = styled.div`
  @media ${device.tabletS} {
    font-size: 16px;
  }
`;

export const DayWordInfo = styled.ul`
  all: unset;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
  li {
    list-style: none;
  }
`;

export const DayWord = styled(Hoverable)`
  display: inline-block;
  min-width: 0;
  font-weight: bold;

  @media ${device.tabletS} {
    font-size: 20px;
    display: block;
  }
`;

export const DayWordDate = styled(GeneralStyle)`
  margin: 0 8px 0 0;
`;

export const DayWordPartOfSpeech = styled(GeneralStyle)``;
export const DayWordBreak = styled(GeneralStyle)``;

export const DayWordPronounce = styled.li`
  margin: 0 5px;
  font-style: italic;
  color: ${(props: GlobalThemeType) => props.theme.lexicon.ternaryTextColor};
`;

export const DayWordDefinitionsList = styled.ol`
  ${generalDefinitionStyle}

  li {
    margin: 10px 0;
  }

  li::first-letter{
    text-transform: uppercase;
  }
`;

export const DayWordExample = styled.div`{
  margin-top: 15px;
}`;
