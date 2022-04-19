import styled from 'styled-components';
import { LexiconHoverable } from '@/views/lexicon/styles/lexiconStyles';

const generalDefinitionStyle: string = 'margin: 0 5px;';

const generalStyle = styled.span`
  margin: 0 8px; 
  color: #606060;
`;

export const WordOfDayContainer = styled.div`
  margin: 0 75px;
`;

export const DayWord = styled(LexiconHoverable)`
  display: inline-block;
  min-width: 0;
  font-weight: bold;
`;

export const DayWordDate = styled(generalStyle)`
  margin: 0 8px 0 0;
`;

export const DayWordPartOfSpeech = styled(generalStyle)``;
export const DayWordBreak = styled(generalStyle)``;

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
