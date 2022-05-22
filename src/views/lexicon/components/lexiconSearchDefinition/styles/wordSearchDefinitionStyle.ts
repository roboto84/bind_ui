import styled from 'styled-components';
import { LexiconSection } from '@/views/lexicon/styles/lexiconHomeStyles';
import { Hoverable } from '@/views/styles/appStyles';
import { device } from '@/styles/responsive';

const wordInfo = styled.div`
  display: inline-block;
  margin-top: 30px;
  margin-left: 19px;
  color: #606060;
  letter-spacing: 2px;

  @media ${device.tabletS} {
    margin-left: 5px;
    margin-top: 5px;
  }
`;

export const PartOfSpeech = styled(wordInfo)``;
export const WordBreak = styled(wordInfo)``;
export const WordDefinition = styled(LexiconSection)`
  margin-top: 30px;

  @media ${device.tabletS} {
    font-size: 16px;
    margin-top: 0px;
  }
`;

export const WordDefinitionIntroduction = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px;

  @media ${device.tabletS} {
    display: block;
  }
`;

export const Word = styled.div`
  font-size: 50px;
  letter-spacing: 3px;
  margin-top: -3px;

  @media ${device.tabletS} {
    font-size: 25px;
  }
`;

export const Stem = styled(Hoverable)`
  min-width: 0;
  display: inline-block;
`;

export const DateFirstUsed = styled(wordInfo)`
  margin-left: 35px;

  @media ${device.tabletS} {
    margin-left: 5px;
  }
`;

export const Pronunciation = styled(wordInfo)`
  font-style: italic;
  color: #9d9d9d;
  letter-spacing: 3px;
`;

export const WordAudio = styled.div`
  margin-left: 100px;
  margin-top: 15px;
  font-style: italic;
  letter-spacing: 3px;
  border-radius: 5px;

  @media ${device.tabletS} {
    margin: 5px;
    text-align: center;
  }
`;

export const WordDefStems = styled.div`
  margin: 5px 90px;
  letter-spacing: 3px;
  line-height: 40px;

  @media ${device.tabletS} {
    margin: 5px;
    line-height: 20px;
  }
`;

export const WordDefEtymology = styled.div`
  margin: 40px 50px;
  letter-spacing: 3px;
  font-style: italic;
  color: #606060;

  @media ${device.tabletS} {
    margin: 10px 20px;
  }
`;

export const WordDefinitions = styled.div`
  margin: 40px 50px;

  @media ${device.tabletS} {
    margin: 10px 20px;
  }
`;

export const WordDefinitionList = styled.ol`
  li {
    margin: 10px 0;
  }

  li::first-letter{
    text-transform: uppercase;
  }
`;

export const WordExamples = styled.div`
  margin: 40px 50px 10px 50px;
  letter-spacing: 3px;
  font-style: italic;

  @media ${device.tabletS} {
    margin: 10px 20px;
  }
`;
