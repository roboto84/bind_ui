import React from 'react';

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
  navigationLinkType ?: NavigationLinkType
  linkTo ?: string,
  callBack ?: CallableFunction,
  fontSize ?: string,
  padding ?: string,
  borderRadius ?: string,
  children ?: React.ReactNode
}
