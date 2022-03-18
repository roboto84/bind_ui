import React from 'react';
import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

const ThrobberStyle = styled.div`
  border: 16px solid ${(props: GlobalThemeType) => props.theme.throbber.background};
  border-top: 16px solid ${(props: GlobalThemeType) => props.theme.throbber.foreground};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// TODO - allow different sizes
export function Throbber() {
  return (
    <ThrobberStyle />
  );
}
