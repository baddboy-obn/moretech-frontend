import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { NewCollectionsSlide } from './new-collections-slide';
import { Paths } from '../../../utils/routes/paths';
import { Sizes } from '../../../styles';
import { useCurrentTheme } from '../../../utils/services/ThemeService';

import mock_nft_image_1_1 from '../../../mocks/nft-examples/1_1.png';
import mock_nft_image_2_1 from '../../../mocks/nft-examples/2_1.png';
import mock_nft_image_3_1 from '../../../mocks/nft-examples/3_1.png';

const Wrapper = styled('div')`
  width: 100%;
  flex-basis: calc(66.6% - 26px);
  height: 100%;
  position: relative;
  border-radius: ${Sizes.BORDER_RADIUS};
  overflow: hidden;
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
`;

export interface ISlide {
  id: string;
  type: string;
  title: string;
  description: string;
  availableFree: {
    id: string;
    text: string;
  }[];
  link: string;
  minimumPrice: number;
  btnText: string;
  imageUrl: string;
}

const slides: ISlide[] = [
  {
    type: 'Коллекция',
    title: 'Монстрики',
    description:
      'Представляем вашему вниманию новую коллекцию, где каждый найдет себе монстрика по отпускному настроению',
    availableFree: [
      {
        id: '1',
        text: 'Незабываемый отпуск',
      },
      {
        id: '2',
        text: 'Внерабочий митап',
      },
      {
        id: '3',
        text: 'Спасибо от коллеги',
      },
    ],
    btnText: 'Перейти к коллекции',
    link: Paths.SHOP,
    minimumPrice: 240,
    imageUrl: mock_nft_image_1_1,
    id: '1',
  },
  {
    type: 'Коллекция',
    title: 'Монстрики',
    description:
      'Представляем вашему вниманию новую коллекцию, где каждый найдет себе монстрика по отпускному настроению',
    availableFree: [
      {
        id: '1',
        text: 'Незабываемый отпуск',
      },
      {
        id: '2',
        text: 'Внерабочий митап',
      },
      {
        id: '3',
        text: 'Спасибо от коллеги',
      },
    ],
    btnText: 'Перейти к коллекции',
    link: Paths.SHOP,
    minimumPrice: 240,
    imageUrl: mock_nft_image_2_1,
    id: '2',
  },
  {
    type: 'Коллекция',
    title: 'Монстрики',
    description:
      'Представляем вашему вниманию новую коллекцию, где каждый найдет себе монстрика по отпускному настроению',
    availableFree: [
      {
        id: '1',
        text: 'Незабываемый отпуск',
      },
      {
        id: '2',
        text: 'Внерабочий митап',
      },
      {
        id: '3',
        text: 'Спасибо от коллеги',
      },
    ],
    btnText: 'Перейти к коллекции',
    link: Paths.SHOP,
    minimumPrice: 240,
    imageUrl: mock_nft_image_3_1,
    id: '3',
  },
];

export const Marker = styled('div')`
  background-color: ${({ theme }) => theme.COLORS.ACCENT.PRIMARY};
  color: ${({ theme }) => theme.COLORS.WHITE.C100};
  padding: 3px 8px;
  border-top-left-radius: ${Sizes.BORDER_RADIUS_SM};
  position: absolute;
  top: 0;
  left: 0;
`;

export const SlidesDotsWrapper = styled('div')`
  position: absolute;
  left: 30px;
  bottom: 20px;
  display: flex;
  gap: 10px;
`;

export const Dot = styled('div')`
  padding-top: 4px;
  padding-bottom: 4px;
  cursor: pointer;
`;

export const DotMark = styled('div')<{ active: boolean }>`
  background-color: ${({ theme, active }) =>
    active ? theme.COLORS.ACCENT.PRIMARY : theme.COLORS.TEXT.DISABLED};
  height: 1px;
  width: 50px;
`;

export const NewCollections: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const theme = useCurrentTheme();

  return (
    <Wrapper>
      {slides.map((slide, index) => (
        <NewCollectionsSlide
          {...slide}
          active={index === currentSlide}
          key={slide.id}
          theme={theme}
        />
      ))}
      <Marker>Новые</Marker>
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
