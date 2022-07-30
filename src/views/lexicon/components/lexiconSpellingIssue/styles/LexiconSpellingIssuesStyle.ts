import styled from 'styled-components';
import { Hoverable } from '@/views/styles/appStyles';
import { GlobalThemeType } from '@/types';

export const ErrorDisplay = styled.div`
  font-size: 45px;
  letter-spacing: 3px;
  margin-top: -3px;
`;

export const ErrorMessage = styled.div`
  margin-left: 19px;
  margin-top: 22px;
  color: ${(props: GlobalThemeType) => props.theme.lexicon.secondaryTextColor};
  letter-spacing: 2px;
`;

export const SpellingSuggestions = styled.div`
  padding: 10px;
`;

export const SpellingSuggestion = styled(Hoverable)``;
