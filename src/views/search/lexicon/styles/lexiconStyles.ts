import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { device } from '@/styles/responsive';

export const LexiconContainer = styled.div`
  font-size: 17px;
  margin: 0;
  color: ${(props:GlobalThemeType) => props.theme.lexicon.textColor};
`;
