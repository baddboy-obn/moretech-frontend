import React, { FC, Fragment, PropsWithChildren, useEffect } from 'react';
import { ThemeService } from './ThemeService';
import moment from 'moment';

export const AppService: FC<PropsWithChildren<{}>> = ({ children }) => {
  useEffect(() => {
    moment.locale('ru');
  }, []);

  return (
    <Fragment>
      <ThemeService>{children}</ThemeService>
    </Fragment>
  );
};
