import React, { FC, useMemo } from 'react';
import { CommonLayout } from '../components/containers/common-layout';
import { useParams } from 'react-router-dom';
import { NFTList } from '../components/shop/main/products';
import { IProductCard } from '../components/shop/main/product-card';
import styled from '@emotion/styled';
import { LeftSide } from '../components/shop/product/left-side';
import { RightSide } from '../components/shop/product/right-side';

const Wrapper = styled('div')`
  display: flex;
  gap: 24px;
`;

export const ShopPage: FC = () => {
  const params = useParams<{
    elementId: string;
  }>();

  const myProduct = useMemo(() => {
    return NFTList.find((el) => el.id === params.elementId) as IProductCard;
  }, [params.elementId]);

  const otherProducts = useMemo(() => {
    return NFTList.filter((el) => el.id !== params.elementId) as IProductCard[];
  }, [params.elementId]);

  return (
    <CommonLayout>
      <Wrapper>
        <LeftSide
          otherProducts={otherProducts}
          price={myProduct.price}
          image={myProduct.imageUrl}
        />
        <RightSide {...myProduct} />
      </Wrapper>
    </CommonLayout>
  );
};
