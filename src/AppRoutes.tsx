import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '@/views/home/Home';
import { Wh00t } from '@/views/wh00t/Wh00t';
import { LexiconSearchHome } from '@/views/lexicon/components/lexiconSearchDefinition/LexiconSearchHome';
import { Lexicon } from '@/views/lexicon/Lexicon';
import { Error404 } from '@/views/404/404';
import { Layout } from '@/views/components/Layout';
import { Alexandria } from '@/views/arcadia/Alexandria';
import { Air } from '@/views/air/Air';
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
          path="description/*"
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
          path="alexandria"
          element={(
            <Layout secondaryTitle="Alexandria" subtitle="learn as if you'll live forever" />
          )}
        >
          <Route index element={<Alexandria />} />
        </Route>
        <Route
          path="lexicon"
          element={<Layout secondaryTitle="Lexicon" subtitle="alphabetical arrangement of words" />}
        >
          <Route index element={<Lexicon />} />
          <Route path="search" element={<LexiconSearchHome />} />
        </Route>
        <Route
          path="wh00t"
          element={<Layout title="</wh00t>" subtitle="A-O River Communication System" />}
        >
          <Route index element={<Wh00t />} />
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
