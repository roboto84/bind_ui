import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Wh00tMini } from '@/views/wh00t/Wh00tMini';
import GlobalProvider from '@/context/globalContext';
import { Wh00tSocketManager } from '@/context/wh00tContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { reactQueryConfig } from '@/dataSource/reactQueryHooks';
import Theme from '@/theme';
import { AppContainer } from '@/views/styles/appStyles';
import AppRoutes from './AppRoutes';

function Index():React.ComponentElement<any, any> {
  const queryClient = new QueryClient(reactQueryConfig);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <GlobalProvider>
          <Theme>
            <Wh00tSocketManager>
              <QueryClientProvider client={queryClient}>
                <Wh00tMini />
                <AppContainer>
                  <AppRoutes />
                </AppContainer>
              </QueryClientProvider>
            </Wh00tSocketManager>
          </Theme>
        </GlobalProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
