import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistedStore, store } from './ducks';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { AppService } from './utils/services';
import { RootRoutes } from './utils/routes';

const container = document.getElementById('root')!;
const root = createRoot(container);

import 'antd/dist/antd.less';
import './index.scss';

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <BrowserRouter>
          <AppService>
            <RootRoutes />
          </AppService>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
