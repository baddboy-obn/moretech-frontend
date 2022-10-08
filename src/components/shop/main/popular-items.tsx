import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { Sizes } from '../../../styles';
import { useCurrentTheme } from '../../../utils/services/ThemeService';
import { Dot, DotMark, Marker, SlidesDotsWrapper } from './new-collections';
import { PopularItemsSlide } from './popular-items-slide';
import { Paths } from '../../../utils/routes/paths';

import mock_nft_image from '../../../resources/mock-merch-ex.png';

const Wrapper = styled('div')`
  width: 100%;
  flex-basis: 33.3%;
  height: 100%;
  position: relative;
  border-radius: ${Sizes.BORDER_RADIUS};
  overflow: hidden;
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
`;

export interface IPopularSlide {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price?: number;
  link: string;
}

const slides: IPopularSlide[] = [
  {
    id: '1',
    title: 'Футболка и шоппер',
    description:
      'Доступны только участникам хакатона. Тут не продается : ) Просто показываем',
    imageUrl: mock_nft_image,
    link: Paths.SHOP,
  },
  {
    id: '2',
    title: 'Футболка и шоппер 2',
    description:
      'Доступны только участникам хакатона. Тут не продается : ) Просто показываем',
    imageUrl: mock_nft_image,
    price: 145,
    link: Paths.SHOP,
  },
  {
    id: '3',
    title: 'Футболка и шоппер 3',
    description:
      'Доступны только участникам хакатона. Тут не продается : ) Просто показываем',
    imageUrl: mock_nft_image,
    price: 243,
    link: Paths.SHOP,
  },
];

export const PopularItems: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const theme = useCurrentTheme();

  return (
    <Wrapper>
      {slides.map((slide, index) => (
        <PopularItemsSlide
          key={slide.id}
          {...slide}
          active={index === currentSlide}
          theme={theme}
        />
      ))}
      <Marker>Самые популярные</Marker>
      <SlidesDotsWrapper>
        {slides.map((el, index) => (
          <Dot
            key={el.id}
            onClick={() => {
              setCurrentSlide(index);
            }}
          >
            <DotMark active={currentSlide === index} />
          </Dot>
        ))}
      </SlidesDotsWrapper>
    </Wrapper>
  );
};
