import styled from 'styled-components';
import { Hoverable } from '@/views/styles/appStyles';
import { GlobalThemeType, Size } from '@/types';

export const SpellingErrorDisplay = styled.div<{size: Size}>`
  font-size: ${(props: {size: Size}) => (props.size === Size.small ? '30px' : '65px')};
  letter-spacing: 3px;
  margin-top: -3px;
`;

export const SpellingErrorMessage = styled.div<{size: Size}>`
  margin-left: 19px;
  margin-top: ${(props: {size: Size}) => (props.size === Size.small ? '5px' : '22px')};
  color: ${(props: GlobalThemeType) => props.theme.lexicon.secondaryTextColor};
  letter-spacing: 2px;
`;

export const SpellingSuggestions = styled.div<{size: Size}>`
  padding: ${(props: {size: Size}) => (props.size === Size.small ? '10px 0 0 0' : '10px')};
`;

export const SpellingSuggestion = styled(Hoverable)``;
