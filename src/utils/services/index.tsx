import React, { FC, Fragment, PropsWithChildren } from 'react';
import { ThemeService } from './ThemeService';

export const AppService: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Fragment>
      <ThemeService>
        {children}
      </ThemeService>
    </Fragment>
  );
};
