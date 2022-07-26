import React from 'react';
import styled from 'styled-components';
import { GlobalThemeType } from '@/types/themeTypes';
import { device } from '@/styles/responsive';

interface ButtonProps extends GlobalThemeType {
  fontSize ?: string,
  padding ?: string
  borderRadius ?: string,
}

export const Button = styled.button<ButtonProps>`
  all: unset;
  color: ${(props:ButtonProps) => props.theme.button.fontColor};
  border: 1px solid ${(props:ButtonProps) => props.theme.button.border};
  padding: ${(props:ButtonProps) => (props.padding || '10px')};
  text-decoration: none;
  text-align: center;
  letter-spacing: 3px;
  word-spacing: 10px;
  transition: 0.4s;
  font-size: ${(props:ButtonProps) => (props.fontSize || 'inherit')};
  background-color: ${(props: ButtonProps) => props.theme.button.backgroundColor};
  border-radius: ${(props:ButtonProps) => (props.borderRadius || 'inherit')};

  &:hover, &.active {
    background-color: ${(props:ButtonProps) => props.theme.core.mainThemeColor};
    border-color: #a3ff0000;
    color: ${(props:ButtonProps) => props.theme.button.transitionFontColor};
    cursor: pointer;
  }
`;

export const SubButton = styled(Button)`
  margin: 0 1px 0 0;
  color: ${(props: ButtonProps) => props.theme.subButton.fontColor};
  background-color: ${(props: ButtonProps) => props.theme.subButton.backgroundColor};
  border-color: ${(props: ButtonProps) => props.theme.subButton.borderColor};

  &:hover, &.active {
    color: ${(props: ButtonProps) => props.theme.subButton.transitionFontColor};
  }

  @media ${device.tabletS} {
    letter-spacing: 1px;
  }
`;

export const ButtonAlert = styled.div`
  background-color: #af2324;
  width: 11px;
  height: 11px;
  border-radius: 0 0 0 10px;
  position: absolute;
  margin: -27px 0 0 50px;
`;
