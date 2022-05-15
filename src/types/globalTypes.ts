import React from 'react';

export enum HTTP_PROTOCOL {
  HTTP = 'HTTP',
  HTTPS = 'HTTPS'
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
