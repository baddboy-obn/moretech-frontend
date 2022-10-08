import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Sizes } from '../../../styles';
import { Rarity, rarityToText } from '../../../utils/rarity/';
import { Image, Typography } from 'antd';
import { PricePane } from '../../common/balance-pane';
import { Theme } from '@emotion/react';

const getColorByRarity: (rarity: Rarity, theme: Theme) => string = (
  rarity: Rarity,
  theme: Theme
) => {
  switch (rarity) {
    case Rarity.STANDART:
      return theme.COLORS.WHITE.C100;
    case Rarity.RARE:
      return theme.COLORS.ACCENT.PRIMARY;
    case Rarity.VERY_RARE:
      return theme.COLORS.ACCENT.WARNING;
    case Rarity.LEGENDARY:
      return theme.COLORS.ACCENT.DANGER;
  }
};

const Wrapper = styled('div')`
  display: flex;
  position: relative;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE.C300};
  border-radius: ${Sizes.BORDER_RADIUS};
  height: 245px;
  min-width: 190px;
  flex-basis: calc(20% - 16px);
  overflow: hidden;
`;

const ImageStyled = styled(Image)`
  object-fit: cover;
  user-select: none;
  pointer-events: none;
`;

const DescriptionWrapper = styled('div')`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: rgba(0, 0, 0, 0.66);
  padding: 6px 10px 8px 10px;
`;

const Name = styled(Typography.Text)`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE.C100};
`;

export interface IProductCard {
  id: string;
  link: string;
  title: string;
  price: number;
  rarity?: Rarity;
  provider: string;
  views: number;
  imageUrl: string;
}

const RarityMarker = styled('div')<{ rarity: Rarity }>`
  background-color: ${({ theme, rarity }) => getColorByRarity(rarity, theme)};
  color: ${({ rarity, theme }) =>
    rarity === Rarity.STANDART
      ? theme.COLORS.TEXT.DISABLED
      : theme.COLORS.WHITE.C100};
  padding: 2px 6px;
  border-radius: ${Sizes.BORDER_RADIUS_SM};
`;

export const ProductCard: FC<IProductCard> = ({
  provider,
  rarity,
  price,
  imageUrl,
  title,
}) => {
  return (
    <Wrapper>
      <ImageStyled preview={false} src={imageUrl} />
      <DescriptionWrapper>
        <Name>{title}</Name>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <PricePane balance={price} />
          <div
            style={{
              display: 'flex',
              gap: 10,
              alignItems: 'center',
            }}
          >
            {rarity && (
              <RarityMarker rarity={rarity}>
                {rarityToText(rarity)}
              </RarityMarker>
            )}
            <Typography.Text
              strong
              style={{
                color: 'white',
              }}
            >
              {provider}
            </Typography.Text>
          </div>
        </div>
      </DescriptionWrapper>
    </Wrapper>
  );
};
