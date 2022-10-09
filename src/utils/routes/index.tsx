import React, { FC } from 'react';
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { Paths } from './paths';
import { Login } from '../../pages/login';
import { Home } from '../../pages';
import { Shop } from '../../pages/shop';
import { ShopPage } from '../../pages/shop-page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={Paths.LOGIN} element={<Login />} />
      <Route path={Paths.SHOP} element={<Shop />} />
      <Route path={`${Paths.SHOP}/:elementId`} element={<ShopPage />} />
      <Route
        path={'*'}
        element={
          <Routes>
            <Route path={Paths.BASE} element={<Home />} />
          </Routes>
        }
      />
    </>
  )
);

export const RootRoutes: FC = () => {
  return <RouterProvider router={router} />;
};
