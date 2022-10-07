import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../../components/containers/main-layout';
import { Paths } from './paths';
import { Login } from '../../pages/login';

export const RootRoutes: FC = () => {
  return (
    <Routes>
      <Route path={Paths.LOGIN} element={<Login />} />
      <Route
        path={'*'}
        element={
          <MainLayout>
            <Routes>
              <Route path={Paths.BASE} element={<span>as</span>} />
            </Routes>
          </MainLayout>
        }
      />
    </Routes>
  );
};
