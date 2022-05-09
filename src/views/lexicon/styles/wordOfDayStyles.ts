import styled from 'styled-components';
import { Hoverable } from '@/views/styles/appStyles';
import { device } from '@/styles/responsive';

const generalDefinitionStyle: string = 'margin: 0 5px;';

const GeneralStyle = styled.span`
  margin: 0 8px; 
  color: #606060;
`;

export const WordOfDayContainer = styled.div`
  margin: 0 75px;

  @media ${device.tabletS} {
    margin: 0 25px;
  }
`;

export const DayWord = styled(Hoverable)`
  display: inline-block;
  min-width: 0;
  font-weight: bold;
`;

export const DayWordDate = styled(GeneralStyle)`
  margin: 0 8px 0 0;
`;

export const DayWordPartOfSpeech = styled(GeneralStyle)``;
export const DayWordBreak = styled(GeneralStyle)``;

export const DayWordPronounce = styled.span`
  margin: 0 5px;
  font-style: italic;
  color: #9d9d9d;
`;

export const DayWordDefinitions = styled.div`
  ${generalDefinitionStyle}
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
