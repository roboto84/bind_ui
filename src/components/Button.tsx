import React from 'react';
import styled from 'styled-components';
import { GlobalThemeType } from '@/types/themeTypes';

interface ButtonProps extends GlobalThemeType {
  fontSize ?: string,
  padding ?: string
}

export const Button = styled.div<ButtonProps>`
  color: ${(props:ButtonProps) => props.theme.button.fontColor};
  border: 5px solid ${(props:ButtonProps) => props.theme.button.border};
  padding: ${(props:ButtonProps) => (props.padding || '10px')};
  text-decoration: none;
  text-align: center;
  letter-spacing: 3px;
  word-spacing: 10px;
  transition: 0.4s;
  font-size: ${(props:ButtonProps) => (props.fontSize || 'inherit')};
  background-color: ${(props: ButtonProps) => props.theme.button.backgroundColor};

  &:hover, &.active {
    background-color: ${(props:ButtonProps) => props.theme.core.mainThemeColor};
    border-color: #a3ff0000;
    color: ${(props:ButtonProps) => props.theme.button.transitionFontColor};
    cursor: pointer;
  }
`;
