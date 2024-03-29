import { RouterItemConfig, RoutesGeneratorProps } from '@/types';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Error404 } from '@/views/404/404';

export function RoutesGenerator(props: RoutesGeneratorProps) {
  const { routerRoutesConfig } = props;

  return (
    <Routes>
      {
        routerRoutesConfig.map((routerItem: RouterItemConfig) => {
          if (routerItem.index) {
            return (
              <Route
                key={`route-${routerItem.path}`}
                index
                element={routerItem.element}
              />
            );
          }
          return (
            <Route
              key={`route-${routerItem.path}`}
              path={routerItem.path}
              element={routerItem.element}
            />
          );
        })
      }
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
