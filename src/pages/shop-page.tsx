import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { CommonLayout } from '../components/containers/common-layout';
import { useParams } from 'react-router-dom';
import { NFTList } from '../components/shop/main/products';
import { IProductCard } from '../components/shop/main/product-card';
import styled from '@emotion/styled';
import { LeftSide } from '../components/shop/product/left-side';
import { RightSide } from '../components/shop/product/right-side';
import { useAppDispatch } from '../ducks';
import { removeTarget, setTarget } from '../ducks/auth/authSlice';

const Wrapper = styled('div')`
  display: flex;
  gap: 24px;
`;

export const ShopPage: FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useAppDispatch();

  const params = useParams<{
    elementId: string;
  }>();

  const myProduct = useMemo(() => {
    return NFTList.find((el) => el.id === params.elementId) as IProductCard;
  }, [params.elementId]);

  const otherProducts = useMemo(() => {
    return NFTList.filter((el) => el.id !== params.elementId) as IProductCard[];
  }, [params.elementId]);

  const handleSetTargetToProduct = useCallback(() => {
    dispatch(
      setTarget({
        units: 0,
        target: myProduct,
      })
    );
  }, [myProduct]);

  const handleRemoveTarget = useCallback(() => {
    dispatch(removeTarget());
  }, []);

  useEffect(() => {
    wrapperRef.current?.parentElement?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [params.elementId]);

  return (
    <CommonLayout>
      <Wrapper ref={wrapperRef}>
        <LeftSide
          otherProducts={otherProducts}
          price={myProduct.price}
          image={myProduct.imageUrl}
        />
        <RightSide
          {...myProduct}
          handleSetTargetToProduct={handleSetTargetToProduct}
          handleRemoveTarget={handleRemoveTarget}
        />
      </Wrapper>
    </CommonLayout>
  );
};
