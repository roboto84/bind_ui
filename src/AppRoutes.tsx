import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '@/views/home/Home';
import { Wh00t } from '@/views/wh00t/Wh00t';
import { Error404 } from '@/views/404/404';
import { Layout } from '@/views/components/Layout';
import { Air } from '@/views/air/Air';
import { Search } from '@/views/search/Search';
import { Debug } from './views/debug/Debug';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={(
            <Layout subtitle="software worth debugging">
              <Home />
            </Layout>
          )}
        />
        <Route
          path="air"
          element={<Layout secondaryTitle="Air" subtitle="it's what you live in and breathe" />}
        >
          <Route index element={<Air />} />
          <Route path="data/*" element={<Air />} />
        </Route>
        <Route
          path="search"
          element={<Layout secondaryTitle="Search" subtitle="learn as if you'll live forever" />}
        >
          <Route index element={<Search />} />
          <Route path="system/*" element={<Search />} />
        </Route>
        <Route
          path="chat"
          element={<Layout secondaryTitle="Chat" subtitle="A-O River Communication System" />}
        >
          <Route index element={<Wh00t windowControls={false} />} />
        </Route>
        <Route
          path="debug"
          element={<Layout secondaryTitle="Debug" subtitle="they are quite squishy" />}
        >
          <Route index element={<Debug />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={(
          <Layout title="Error" subtitle="have you tried turning it off and on again?">
            <Error404 />
          </Layout>
        )}
      />
    </Routes>
  );
}
