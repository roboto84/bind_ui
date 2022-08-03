import React from 'react';
import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

interface ThrobberStyleProps extends GlobalThemeType {
  borderThickness: string,
  diameter: string,
  speed: string
}

const ThrobberStyle = styled.div<ThrobberStyleProps>`
  border: ${(props: ThrobberStyleProps) => props.borderThickness} solid ${(props: ThrobberStyleProps) => props.theme.throbber.background};
  border-top: ${(props: ThrobberStyleProps) => props.borderThickness} solid ${(props: ThrobberStyleProps) => props.theme.throbber.foreground};
  border-radius: 50%;
  width: ${(props: ThrobberStyleProps) => props.diameter};
  height: ${(props: ThrobberStyleProps) => props.diameter};
  animation: spin ${(props: ThrobberStyleProps) => props.speed} linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

type ThrobberProps = {
  borderThickness: string,
  diameter: string,
  speed: string
}

export function Throbber(props: ThrobberProps) {
  const { diameter, speed, borderThickness } = props;
  return (
    <ThrobberStyle diameter={diameter} speed={speed} borderThickness={borderThickness} />
  );
}
