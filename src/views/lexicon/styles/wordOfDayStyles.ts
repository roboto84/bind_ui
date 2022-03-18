import styled from 'styled-components';

const generalStyle: string = 'margin: 0 8px; color: #606060;';
const generalDefinitionStyle: string = 'margin: 0 5px;';

export const WordOfDayContainer = styled.div`
  margin: 0 75px;
`;

export const DayWord = styled.span`
  font-weight: bold;
`;

export const DayWordDate = styled.span`
  ${generalStyle}
`;

export const DayWordPartOfSpeech = styled.span`
  ${generalStyle}
`;

export const DayWordBreak = styled.span`
  ${generalStyle}
`;

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
