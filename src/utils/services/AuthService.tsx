import React, { FC, PropsWithChildren, useEffect } from 'react';
import { useAuthState } from '../../ducks/auth/authSlice';
import { Paths } from '../routes/paths';

export const AuthService: FC<PropsWithChildren> = ({ children }) => {
  const { authed } = useAuthState();

  useEffect(() => {
    if (!authed && window.location.pathname !== Paths.LOGIN) {
      window.location.pathname = Paths.LOGIN;
    }
  }, [authed]);

  return <>{children}</>;
};
