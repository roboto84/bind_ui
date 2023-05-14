import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export const ErrorContainer = styled.div`
  font-family: verdana,serif;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto;
`;

export const ErrorTitle = styled.div`
  font-size: 50px;
  margin: -45px auto 0;
`;

export const ErrorReason = styled.span`
  margin-left: 20px;
  color: ${(props:GlobalThemeType) => props.theme.header.secondaryTitleColor};
`;

export const ErrorSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
