import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Sizes } from '../../../styles';
import { Tabs } from 'antd';
import { IProductCard, ProductCard } from './product-card';
import { Rarity } from '../../../utils/rarity';
import { Paths } from '../../../utils/routes/paths';

import nft_1_1 from '../../../mocks/nft-examples/1_1.png';
import nft_1_2 from '../../../mocks/nft-examples/1_2.png';
import nft_1_3 from '../../../mocks/nft-examples/1_3.png';
import nft_1_4 from '../../../mocks/nft-examples/1_4.png';
import nft_2_1 from '../../../mocks/nft-examples/2_1.png';
import nft_2_2 from '../../../mocks/nft-examples/2_2.png';
import nft_2_3 from '../../../mocks/nft-examples/2_3.png';
import nft_2_4 from '../../../mocks/nft-examples/2_4.png';
import nft_3_1 from '../../../mocks/nft-examples/3_1.png';
import nft_3_2 from '../../../mocks/nft-examples/3_2.png';
import nft_3_3 from '../../../mocks/nft-examples/3_3.png';
import nft_3_4 from '../../../mocks/nft-examples/3_4.png';
import nft_4_1 from '../../../mocks/nft-examples/4_1.png';
import nft_4_2 from '../../../mocks/nft-examples/4_2.png';
import nft_4_3 from '../../../mocks/nft-examples/4_3.png';
import nft_4_4 from '../../../mocks/nft-examples/4_4.png';
import nft_5_1 from '../../../mocks/nft-examples/5_1.png';
import nft_5_2 from '../../../mocks/nft-examples/5_2.png';
import nft_5_3 from '../../../mocks/nft-examples/5_3.png';
import nft_5_4 from '../../../mocks/nft-examples/5_4.png';
import { useCurrentTheme } from '../../../utils/services/ThemeService';
import { useAuthState } from '../../../ducks/auth/authSlice';

const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  border-radius: ${Sizes.BORDER_RADIUS};
  width: 100%;
  padding: 0 20px;
`;

const ProductsWrapper = styled('div')`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const NFTList: IProductCard[] = [
  {
    imageUrl: nft_1_1,
    title: 'Holiday Monster #1_1',
    link: Paths.SHOP,
    id: '1',
    price: 210,
    provider: 'ВТБ',
    rarity: Rarity.STANDART,
    views: 1202,
  },
  {
    imageUrl: nft_1_2,
    title: 'Holiday Monster #1_2',
    link: Paths.SHOP,
    id: '2',
    price: 220,
    provider: 'ВТБ',
    rarity: Rarity.RARE,
    views: 1192,
  },
  {
    imageUrl: nft_1_3,
    title: 'Holiday Monster #1_3',
    link: Paths.SHOP,
    id: '3',
    price: 240,
    provider: 'ВТБ',
    rarity: Rarity.VERY_RARE,
    views: 1081,
  },
  {
    imageUrl: nft_1_4,
    title: 'Holiday Monster #1_4',
    link: Paths.SHOP,
    id: '4',
    price: 284,
    provider: 'ВТБ',
    rarity: Rarity.LEGENDARY,
    views: 1025,
  },
  {
    imageUrl: nft_2_1,
    title: 'Holiday Monster #2_1',
    link: Paths.SHOP,
    id: '5',
    price: 182,
    provider: 'ВТБ',
    rarity: Rarity.STANDART,
    views: 802,
  },
  {
    imageUrl: nft_2_2,
    title: 'Holiday Monster #2_2',
    link: Paths.SHOP,
    id: '6',
    price: 192,
    provider: 'ВТБ',
    rarity: Rarity.RARE,
    views: 801,
  },
  {
    imageUrl: nft_2_3,
    title: 'Holiday Monster #2_3',
    link: Paths.SHOP,
    id: '7',
    price: 207,
    provider: 'ВТБ',
    rarity: Rarity.VERY_RARE,
    views: 794,
  },
  {
    imageUrl: nft_2_4,
    title: 'Holiday Monster #2_4',
    link: Paths.SHOP,
    id: '8',
    price: 299,
    provider: 'ВТБ',
    rarity: Rarity.LEGENDARY,
    views: 691,
  },
  {
    imageUrl: nft_3_1,
    title: 'Holiday Monster #3_1',
    link: Paths.SHOP,
    id: '9',
    price: 143,
    provider: 'ВТБ',
    rarity: Rarity.STANDART,
    views: 687,
  },
  {
    imageUrl: nft_3_2,
    title: 'Holiday Monster #3_2',
    link: Paths.SHOP,
    id: '10',
    price: 148,
    provider: 'ВТБ',
    rarity: Rarity.RARE,
    views: 672,
  },
  {
    imageUrl: nft_3_3,
    title: 'Holiday Monster #3_3',
    link: Paths.SHOP,
    id: '11',
    price: 210,
    provider: 'ВТБ',
    rarity: Rarity.VERY_RARE,
    views: 792,
  },
  {
    imageUrl: nft_3_4,
    title: 'Holiday Monster #3_4',
    link: Paths.SHOP,
    id: '12',
    price: 389,
    provider: 'ВТБ',
    rarity: Rarity.LEGENDARY,
    views: 1249,
  },
  {
    imageUrl: nft_4_1,
    title: 'Holiday Monster #4_1',
    link: Paths.SHOP,
    id: '13',
    price: 102,
    provider: 'ВТБ',
    rarity: Rarity.STANDART,
    views: 725,
  },
  {
    imageUrl: nft_4_2,
    title: 'Holiday Monster #4_2',
    link: Paths.SHOP,
    id: '14',
    price: 126,
    provider: 'ВТБ',
    rarity: Rarity.RARE,
    views: 561,
  },
  {
    imageUrl: nft_4_3,
    title: 'Holiday Monster #4_3',
    link: Paths.SHOP,
    id: '15',
    price: 270,
    provider: 'ВТБ',
    rarity: Rarity.VERY_RARE,
    views: 2401,
  },
  {
    imageUrl: nft_4_4,
    title: 'Holiday Monster #4_4',
    link: Paths.SHOP,
    id: '16',
    price: 491,
    provider: 'ВТБ',
    rarity: Rarity.LEGENDARY,
    views: 4291,
  },
  {
    imageUrl: nft_5_1,
    title: 'Holiday Monster #5_1',
    link: Paths.SHOP,
    id: '17',
    price: 255,
    provider: 'ВТБ',
    rarity: Rarity.STANDART,
    views: 1202,
  },
  {
    imageUrl: nft_5_2,
    title: 'Holiday Monster #5_2',
    link: Paths.SHOP,
    id: '18',
    price: 210,
    provider: 'ВТБ',
    rarity: Rarity.RARE,
    views: 282,
  },
  {
    imageUrl: nft_5_3,
    title: 'Holiday Monster #5_3',
    link: Paths.SHOP,
    id: '19',
    price: 452,
    provider: 'ВТБ',
    rarity: Rarity.VERY_RARE,
    views: 1724,
  },
  {
    imageUrl: nft_5_4,
    title: 'Holiday Monster #5_4',
    link: Paths.SHOP,
    id: '20',
    price: 1492,
    provider: 'ВТБ',
    rarity: Rarity.LEGENDARY,
    views: 3210,
  },
];

export const Products: FC = () => {
  const theme = useCurrentTheme();
  const { my_target } = useAuthState();

  const tabItems = [
    {
      label: 'NFT',
      key: 'nft',
      children: (
        <ProductsWrapper>
          {NFTList.map((nft) => (
            <ProductCard
              {...nft}
              link={`${nft.link}/${nft.id}`}
              key={nft.id}
              theme={theme}
              selectedId={my_target?.target.id}
            />
          ))}
        </ProductsWrapper>
      ),
    },
    {
      label: 'Мерч',
      key: 'merch',
      children: <ProductsWrapper>s</ProductsWrapper>,
    },
    {
      label: 'Бонусы',
      key: 'bonuses',
      children: <ProductsWrapper>s</ProductsWrapper>,
    },
    {
      label: 'Обучение',
      key: 'courses',
      children: <ProductsWrapper>s</ProductsWrapper>,
    },
    {
      label: 'Благотворительность',
      key: 'charity',
      children: <ProductsWrapper>s</ProductsWrapper>,
    },
  ];

  return (
    <Wrapper>
      <Tabs items={tabItems} destroyInactiveTabPane />
    </Wrapper>
  );
};
