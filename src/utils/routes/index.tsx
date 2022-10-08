import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Paths } from './paths';
import { Login } from '../../pages/login';
import { Home } from '../../pages';
import { Shop } from '../../pages/shop';
import { CommonLayout } from '../../components/containers/common-layout';

export const RootRoutes: FC = () => {
  return (
    <Routes>
      <Route path={Paths.LOGIN} element={<Login />} />
      <Route path={Paths.SHOP} element={<Shop />} />
      <Route path={Paths.BALANCE} element={<CommonLayout />} />
      <Route path={Paths.FRIENDS} element={<CommonLayout />} />
      <Route path={Paths.GROUPS} element={<CommonLayout />} />
      <Route path={Paths.NEWS} element={<CommonLayout />} />
      <Route
        path={'*'}
        element={
          <Routes>
            <Route path={Paths.BASE} element={<Home />} />
          </Routes>
        }
      />
    </Routes>
  );
};
