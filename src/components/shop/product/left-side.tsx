import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Sizes } from '../../../styles';
import { Image } from 'antd';
import { SketchOutlined } from '@ant-design/icons';
import { MoreFromCollection } from './more-from-collection';
import { IProductCard } from '../main/product-card';

const Wrapper = styled('div')`
  flex-basis: calc(46% - 12px);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductImageWrapper = styled('div')`
  position: relative;
  padding-top: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  overflow: hidden;
  border-radius: ${Sizes.BORDER_RADIUS};
`;

const ImageStyled = styled(Image)`
  object-fit: cover;
`;

const PriceWrapper = styled('div')`
  position: absolute;
  right: 27px;
  bottom: 20px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.88);
  padding: 10px 15px;
  gap: 8px;
  align-items: center;
  border-radius: ${Sizes.BORDER_RADIUS_SM};
`;

const Price = styled('span')`
  font-weight: 700;
  font-size: 20px;
  line-height: 12px;
  color: ${({ theme }) => theme.COLORS.WHITE.C100};
`;

const Icon = styled(SketchOutlined)`
  color: ${({ theme }) => theme.COLORS.WHITE.C100};
  font-size: 18px;
`;

interface Props {
  image: string;
  price: number;
  otherProducts: IProductCard[];
}

export const LeftSide: FC<Props> = ({ image, price, otherProducts }) => {
  return (
    <Wrapper>
      <ProductImageWrapper>
        <ImageStyled
          wrapperStyle={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          src={image}
        />
        <PriceWrapper>
          <Price>{price}</Price>
          <Icon />
        </PriceWrapper>
      </ProductImageWrapper>
      <MoreFromCollection otherProducts={otherProducts} />
    </Wrapper>
  );
};
