import styled from 'styled-components';
import { LexiconHoverable } from '@/views/lexicon/styles/lexiconStyles';

export const ErrorDisplay = styled.div`
  font-size: 50px;
  letter-spacing: 3px;
  margin-top: -3px;
`;

export const ErrorMessage = styled.div`
  margin-left: 19px;
  margin-top: 22px;
  color: #606060;
  letter-spacing: 2px;
`;

export const SpellingSuggestions = styled.div`
  padding: 10px;
`;

export const SpellingSuggestion = styled(LexiconHoverable)``;
