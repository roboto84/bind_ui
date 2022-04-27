import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export const LexiconContainer = styled.div`
  font-size: 20px;
  margin: 20px 0 0 50px;
  color: ${(props:GlobalThemeType) => props.theme.lexicon.textColor};
  padding-top: 20px;
`;
