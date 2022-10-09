import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistedStore, store } from './ducks';
import { PersistGate } from 'redux-persist/integration/react';
import { AppService } from './utils/services';
import { RootRoutes } from './utils/routes';
import 'moment/locale/ru';
import ru from 'antd/lib/locale/ru_RU';
import { ConfigProvider } from 'antd';

import 'antd/dist/antd.less';
import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <ConfigProvider locale={ru}>
          <AppService>
            <RootRoutes />
          </AppService>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
