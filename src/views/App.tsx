import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { reactQueryConfig } from '@/dataSource/reactQueryHooks';
import Theme from '@/theme';
import { Home } from '@/views/home';
import { Wh00t } from '@/views/wh00t/Wh00t';
import { Wh00tMini } from '@/views/wh00t/Wh00tMini';
import {
  LexiconSearchHome,
} from '@/views/lexicon/components/lexiconSearchDefinition/LexiconSearchHome';
import { Lexicon } from '@/views/lexicon/Lexicon';
import { Error404 } from '@/views/404';
import { Layout } from '@/views/components/Layout';
import { Air } from '@/views/air/Air';
import { WeatherTable } from '@/views/air/components/WeatherTables/WeatherTable';
import { WeatherChartType, WeatherTableType } from '@/views/air/types/airTypes';
import { Arcadia } from '@/views/arcadia/Arcadia';
import GlobalProvider from '@/context/globalContext';
import { Wh00tSocketManager } from '@/context/wh00tContext';
import { AppContainer } from './styles/appStyles';
import { Debug } from './debug/Debug';
import { WeatherChart } from './air/components/WeatherChart/WeatherChart';

export default function App() {
  const queryClient = new QueryClient(reactQueryConfig);

  return (
    <GlobalProvider>
      <Theme>
        <Wh00tSocketManager>
          <QueryClientProvider client={queryClient}>
            <Wh00tMini />
            <AppContainer>

              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route
                    path="air"
                    element={(
                      <Layout
                        secondaryTitle="Air"
                        subtitle="it's what you live in and breathe"
                      />
                )}
                  >
                    <Route index element={<Air />} />
                    <Route
                      path="weather"
                      element={
                        <WeatherTable tableType={WeatherTableType.weather} />
                    }
                    />
                    <Route
                      path="pollution"
                      element={
                        <WeatherTable tableType={WeatherTableType.pollution} />
                    }
                    />
                    <Route
                      path="pollen"
                      element={
                        <WeatherTable tableType={WeatherTableType.pollen} />
                    }
                    />
                    <Route
                      path="temperature"
                      element={
                        <WeatherChart chartKey={WeatherChartType.temperature} />
                    }
                    />
                    <Route
                      path="humidity"
                      element={
                        <WeatherChart chartKey={WeatherChartType.humidity} />
                    }
                    />
                    <Route
                      path="precipitation"
                      element={
                        <WeatherChart chartKey={WeatherChartType.precipitationProbability} />
                    }
                    />
                    <Route
                      path="pressure"
                      element={
                        <WeatherChart chartKey={WeatherChartType.pressureSurfaceLevel} />
                    }
                    />
                    <Route
                      path="epa_index"
                      element={
                        <WeatherChart chartKey={WeatherChartType.epaIndex} />
                    }
                    />
                    <Route
                      path="particulate_matter_10"
                      element={
                        <WeatherChart chartKey={WeatherChartType.particulateMatter10} />
                    }
                    />
                    <Route
                      path="particulate_matter_25"
                      element={
                        <WeatherChart chartKey={WeatherChartType.particulateMatter25} />
                    }
                    />
                    <Route
                      path="pollutant_co"
                      element={
                        <WeatherChart chartKey={WeatherChartType.pollutantCO} />
                    }
                    />
                    <Route
                      path="pollutant_no2"
                      element={
                        <WeatherChart chartKey={WeatherChartType.pollutantNO2} />
                    }
                    />
                    <Route
                      path="pollutant_o3"
                      element={
                        <WeatherChart chartKey={WeatherChartType.pollutantO3} />
                    }
                    />
                    <Route
                      path="pollutant_so2"
                      element={
                        <WeatherChart chartKey={WeatherChartType.pollutantSO2} />
                    }
                    />
                    <Route
                      path="pollen_grass"
                      element={
                        <WeatherChart chartKey={WeatherChartType.grassIndex} />
                    }
                    />
                    <Route
                      path="pollen_tree"
                      element={
                        <WeatherChart chartKey={WeatherChartType.treeIndex} />
                    }
                    />
                    <Route
                      path="pollen_weed"
                      element={
                        <WeatherChart chartKey={WeatherChartType.weedIndex} />
                    }
                    />
                  </Route>
                  <Route
                    path="arcadia"
                    element={(
                      <Layout
                        secondaryTitle="Arcadia"
                        subtitle="learn as if you'll live forever"
                      />
                  )}
                  >
                    <Route index element={<Arcadia />} />
                  </Route>
                  <Route
                    path="lexicon"
                    element={(
                      <Layout
                        secondaryTitle="Lexicon"
                        subtitle="alphabetical arrangement of words"
                      />
                  )}
                  >
                    <Route index element={<Lexicon />} />
                    <Route path="search" element={<LexiconSearchHome />} />
                  </Route>
                  <Route
                    path="wh00t"
                    element={(
                      <Layout
                        title="</wh00t>"
                        subtitle="A-O River Communication System"
                      />
                  )}
                  >
                    <Route index element={<Wh00t />} />
                  </Route>
                  <Route
                    path="debug"
                    element={(
                      <Layout
                        secondaryTitle="Debug"
                        subtitle="they are quite squishy"
                      />
                  )}
                  >
                    <Route index element={<Debug />} />
                  </Route>
                </Route>
                <Route path="*" element={<Error404 />} />
              </Routes>

            </AppContainer>
          </QueryClientProvider>
        </Wh00tSocketManager>
      </Theme>
    </GlobalProvider>
  );
}
