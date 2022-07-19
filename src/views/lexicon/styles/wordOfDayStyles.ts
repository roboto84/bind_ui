import styled from 'styled-components';
import { Hoverable } from '@/views/styles/appStyles';
import { device } from '@/styles/responsive';
import { GlobalThemeType } from '@/types';

const generalDefinitionStyle: string = 'margin: 0 5px;';

const GeneralStyle = styled.span`
  margin: 0 8px; 
  color: ${(props: GlobalThemeType) => props.theme.lexicon.secondaryTextColor};
`;

export const WordOfDayContainer = styled.div`
  margin: 0 20px;

  @media ${device.tabletS} {
    margin: 0 10px;
    font-size: 16px;
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

export const DayWordPronounce = styled.span`
  margin: 0 5px;
  font-style: italic;
  color: ${(props: GlobalThemeType) => props.theme.lexicon.ternaryTextColor};
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
