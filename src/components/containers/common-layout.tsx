import React, { FC, PropsWithChildren } from 'react';
import { AppWrapper } from './profile-layout';
import { Header } from '../layout/header';
import { useCurrentTheme } from '../../utils/services/ThemeService';
import { Layout } from 'antd';

export const CommonLayout: FC<PropsWithChildren> = ({ children }) => {
  const theme = useCurrentTheme();

  return (
    <AppWrapper>
      <Header />
      <Layout
        style={{
          backgroundColor: theme.COLORS.WHITE.C300,
          padding: 24,
          maxWidth: 1600,
          margin: '0 auto',
          width: '100%',
          overflowY: 'auto',
        }}
      >
        {children}
      </Layout>
    </AppWrapper>
  );
};
