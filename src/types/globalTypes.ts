import React from 'react';

export enum HTTP_PROTOCOL {
  HTTP = 'http',
  HTTPS = 'https'
}

export enum WS_PROTOCOL {
  WS = 'ws',
  WSS = 'wss'
}

export enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export type ChildrenProps = {
  children: React.ReactNode
}

export type RouterItemConfig = {
  index ?: boolean,
  path ?: string,
  element: JSX.Element
}

export type RoutesGeneratorProps = {
  routerRoutesConfig: RouterItemConfig[],
}
