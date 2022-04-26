import { RouterItemConfig, RoutesGeneratorProps } from '@/types';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

export function RoutesGenerator(props: RoutesGeneratorProps) {
  const { routerRoutesConfig } = props;

  return (
    <Routes>
      {
        routerRoutesConfig.map((routerItem: RouterItemConfig) => (
          <Route
            key={`route-${routerItem.path}`}
            path={routerItem.path}
            element={routerItem.element}
          />
        ))
      }
    </Routes>
  );
}
