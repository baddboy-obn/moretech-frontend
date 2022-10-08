import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProfileLayout } from '../../components/containers/profile-layout';
import { Paths } from './paths';
import { Login } from '../../pages/login';
import { Home } from '../../pages';

export const RootRoutes: FC = () => {
  return (
    <Routes>
      <Route path={Paths.LOGIN} element={<Login />} />
      <Route
        path={'*'}
        element={
          <ProfileLayout>
            <Routes>
              <Route path={Paths.BASE} element={<Home />} />
            </Routes>
          </ProfileLayout>
        }
      />
    </Routes>
  );
};
