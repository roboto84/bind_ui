import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export const RightSidePanel = styled.div`
  flex-basis: 35%;
  border-left: 1px solid ${(props:GlobalThemeType) => props.theme.header.activeBorderBottomColor};
  margin-left: 2px;
`;
