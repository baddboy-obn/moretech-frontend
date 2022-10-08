import React, { FC } from 'react';
import { CommonLayout } from '../components/containers/common-layout';
import { NewCollections } from '../components/shop/main/new-collections';
import { PopularItems } from '../components/shop/main/popular-items';
import { Filters } from '../components/shop/main/filters';
import { Products } from '../components/shop/main/products';

import styled from '@emotion/styled';

const HeadWrapper = styled('div')`
  width: 100%;
  min-height: 528px;
  display: flex;
  justify-content: space-between;
`;

const MainContent = styled('div')`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

export const Shop: FC = () => {
  return (
    <CommonLayout>
      <HeadWrapper>
        <NewCollections />
        <PopularItems />
      </HeadWrapper>
      <MainContent>
        <Filters />
        <Products />
      </MainContent>
    </CommonLayout>
  );
};
