import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Sizes } from '../../../styles';
import { Rarity, rarityToText } from '../../../utils/rarity/';
import { Badge, Image, Typography } from 'antd';
import { PricePane } from '../../common/balance-pane';
import { Theme } from '@emotion/react';
import { EyeOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

export const getColorByRarity: (rarity: Rarity, theme: Theme) => string = (
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

const Wrapper = styled(NavLink)<{ smallWrapper?: boolean }>`
  display: flex;
  position: relative;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE.C300};
  border-radius: ${Sizes.BORDER_RADIUS};
  height: 245px;
  min-width: 190px;
  flex-basis: ${({ smallWrapper }) =>
    smallWrapper ? 'calc(33.3% - 9px)' : 'calc(20% - 16px)'};
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
  font-size: 10px;
`;

const ViesMarker = styled('div')`
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  gap: 4px;
  color: ${({ theme }) => theme.COLORS.TEXT.COMMON_TEXT};
`;

interface Props extends IProductCard {
  theme: Theme;
  smallWrapper?: boolean;
  selectedId?: string;
}

export const ProductCard: FC<Props> = ({
  provider,
  rarity,
  price,
  imageUrl,
  title,
  theme,
  views,
  link,
  id,
  smallWrapper,
  selectedId,
}) => {
  const Content = (
    <Wrapper to={link} smallWrapper={smallWrapper}>
      <ImageStyled loading={'lazy'} preview={false} src={imageUrl} />
      <DescriptionWrapper>
        <Name>{title}</Name>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <PricePane
            style={{
              padding: '2px 6px',
              color: theme.COLORS.ACCENT.PRIMARY,
            }}
            balance={price}
          />
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
                color: theme.COLORS.WHITE.C100,
              }}
            >
              {provider}
            </Typography.Text>
          </div>
        </div>
      </DescriptionWrapper>
      <ViesMarker>
        {views.toLocaleString('ru-RU')}
        <EyeOutlined />
      </ViesMarker>
    </Wrapper>
  );

  if (selectedId === id) {
    return (
      <div
        style={{
          minWidth: '190px',
          flexBasis: smallWrapper ? 'calc(33.3% - 9px)' : 'calc(20% - 16px)',
        }}
      >
        <Badge.Ribbon color="green" text="Цель">
          {Content}
        </Badge.Ribbon>
      </div>
    );
  } else {
    return <>{Content}</>;
  }
};
