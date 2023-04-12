import React from 'react';
import styled from 'styled-components';
import { GlobalThemeType } from '@/types/themeTypes';
import { device } from '@/styles/responsive';

export interface ButtonProps extends GlobalThemeType {
  fontSize ?: string,
  width ?: string,
  letterSpacing ?: string,
  padding ?: string,
  borderRadius ?: string,
  margin ?: string,
}

export const Button = styled.button<ButtonProps>`
  all: unset;
  width: ${(props:ButtonProps) => props.width};
  color: ${(props:ButtonProps) => props.theme.button.fontColor};
  border: 1px solid ${(props:ButtonProps) => props.theme.button.border};
  padding: ${(props:ButtonProps) => (props.padding || '10px')};
  margin: ${(props:ButtonProps) => (props.margin || 'inherit')};
  text-decoration: none;
  text-align: center;
  letter-spacing: ${(props:ButtonProps) => (props.letterSpacing || '2px')};;
  // word-spacing: 10px;
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
  margin: 0;
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
  background-color: ${(props: ButtonProps) => props.theme.button.alertColor};
  width: 9px;
  height: 9px;
  border-radius: 100%;
  position: absolute;
  margin: -22px 0 0 35px;
`;
