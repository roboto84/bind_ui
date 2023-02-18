import React from 'react';
import { GlobalThemeType } from '@/types';

export interface LayoutWithHeaderProps extends HeaderProps {
  children ?: React.ReactNode
}

export interface HeaderContainerProps extends GlobalThemeType {
  sidePanelActive: boolean,
}

export type HeaderProps = {
  title: string,
  secondaryTitle: string,
  sidePanelActive ?: boolean,
  subtitle: string
}

export enum NavigationLinkType {
  base = 'base',
  sub = 'sub'
}

export enum NavigationLinkActivationType {
  global = 'global',
  local = 'local'
}

export type NavigationLinkProps = {
  activationType ?: NavigationLinkActivationType,
  activationKey ?: string,
  alert ?: boolean
  navigationLinkType ?: NavigationLinkType
  linkTo ?: string,
  callBack ?: CallableFunction,
  fontSize ?: string,
  padding ?: string,
  borderRadius ?: string,
  children ?: React.ReactNode
  title ?: string
}
