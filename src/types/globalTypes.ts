import React from 'react';

export type ChildrenProps = {
  children: React.ReactNode
}

export type RouterItemConfig = {
  path: string,
  element: JSX.Element
}

export type RoutesGeneratorProps = {
  routerRoutesConfig: RouterItemConfig[],
}
