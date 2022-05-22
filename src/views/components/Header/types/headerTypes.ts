import React from 'react';

export interface LayoutWithHeaderProps extends HeaderProps {
  children ?: React.ReactNode
}

export type HeaderProps = {
  title ?: string,
  secondaryTitle ?: string,
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
