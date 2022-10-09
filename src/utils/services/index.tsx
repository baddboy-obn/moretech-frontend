import React, { FC, Fragment, PropsWithChildren, useEffect } from 'react';
import { ThemeService } from './ThemeService';
import moment from 'moment';
import { AuthService } from './AuthService';

export const AppService: FC<PropsWithChildren<{}>> = ({ children }) => {
  useEffect(() => {
    moment.locale('ru');
  }, []);

  return (
    <Fragment>
      <AuthService>
        <ThemeService>{children}</ThemeService>
      </AuthService>
    </Fragment>
  );
};
