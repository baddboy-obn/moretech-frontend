import React, { FC } from 'react';
import styled from '@emotion/styled';
import { getColorByRarity, IProductCard } from '../main/product-card';
import { Sizes } from '../../../styles';
import { Rarity, rarityToText } from '../../../utils/rarity';
import { ProductMainCard } from './ProductMainCard';
import { LastOrders } from './last-orders';
import { PriceDynamic } from './price-dynamic';

const Wrapper = styled('div')`
  flex-basis: calc(54% - 12px);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

interface Props extends IProductCard {
  handleSetTargetToProduct: () => void;
  handleRemoveTarget: () => void;
}

const HeadWrapper = styled('div')`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  border-radius: ${Sizes.BORDER_RADIUS};
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ProductName = styled('span')`
  font-weight: 700;
  font-size: 26px;
  line-height: 30px;
`;

const RarityMarker = styled('span')<{ rarity: Rarity }>`
  padding: 4px 10px;
  border-radius: ${Sizes.BORDER_RADIUS_SM};
  background-color: ${({ theme, rarity }) => getColorByRarity(rarity, theme)};
  color: ${({ rarity, theme }) =>
    rarity === Rarity.STANDART
      ? theme.COLORS.TEXT.DISABLED
      : theme.COLORS.WHITE.C100};
`;

export const RightSide: FC<Props> = ({
  rarity,
  title,
  handleRemoveTarget,
  handleSetTargetToProduct,
  id,
}) => {
  return (
    <Wrapper>
      <HeadWrapper>
        <ProductName>{title}</ProductName>
        {rarity && (
          <RarityMarker rarity={rarity}>{rarityToText(rarity)}</RarityMarker>
        )}
      </HeadWrapper>
      <ProductMainCard
        productTitle={title}
        handleRemoveTarget={handleRemoveTarget}
        handleSetTargetToProduct={handleSetTargetToProduct}
        id={id}
      />
      <LastOrders />
      <PriceDynamic />
    </Wrapper>
  );
};
