import styled from 'styled-components';
import { WordOfDaySection } from '@/views/lexicon/styles/lexiconHomeStyles';

const wordInfo = styled.span`
  margin-top: 30px;
  margin-left: 19px;
  color: #606060;
  letter-spacing: 2px;
`;

export const PartOfSpeech = styled(wordInfo)``;
export const WordBreak = styled(wordInfo)``;

export const WordDefinition = styled(WordOfDaySection)`
  margin-top: 55px;
`;

export const WordDefinitionIntroduction = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;

export const Word = styled.div`
  font-size: 50px;
  letter-spacing: 3px;
  margin-top: -3px;
`;

export const Stem = styled.span``;

export const DateFirstUsed = styled(wordInfo)`
  margin-left: 35px;
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
`;

export const WordDefStems = styled.div`
  margin: 5px 90px;
  letter-spacing: 3px;
  line-height: 40px;
`;

export const WordDefEtymology = styled.div`
  margin: 40px 50px;
  letter-spacing: 3px;
  font-style: italic;
  color: #606060;
`;

export const WordDefinitions = styled.div`
  margin: 40px 50px;
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
`;
