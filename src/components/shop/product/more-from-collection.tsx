import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Sizes } from '../../../styles';
import { Title } from './ProductMainCard';
import { IProductCard, ProductCard } from '../main/product-card';
import { useCurrentTheme } from '../../../utils/services/ThemeService';

const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  border-radius: ${Sizes.BORDER_RADIUS};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProductsWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
`;

interface Props {
  otherProducts: IProductCard[];
}

export const MoreFromCollection: FC<Props> = ({ otherProducts }) => {
  const theme = useCurrentTheme();
  return (
    <Wrapper>
      <Title>Так же в этой коллекции</Title>
      <ProductsWrapper>
        {otherProducts.map((el) => (
          <ProductCard
            {...el}
            key={el.id}
            link={`${el.link}/${el.id}`}
            theme={theme}
            smallWrapper
          />
        ))}
      </ProductsWrapper>
    </Wrapper>
  );
};
