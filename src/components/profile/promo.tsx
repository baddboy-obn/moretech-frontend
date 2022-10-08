import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Sizes } from '../../styles';
import { Typography } from 'antd';

import promoBgImage from '../../resources/promo-bg.png';

const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  padding: 24px;
  border-radius: ${Sizes.BORDER_RADIUS_SM};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE.C400};
  position: relative;
  height: 200px;
  background-image: linear-gradient(110.73deg, #003a8c 1.43%, #00204d 100%);
  color: white;
  overflow: hidden;
  margin-bottom: 24px;

  .promo-text {
    color: white;
    margin-top: 0 !important;
    margin-bottom: 0;
    font-style: italic;
    text-transform: uppercase;
    padding-left: 40px;

    &:first-of-type {
      padding-left: 10px;
    }

    &:last-child {
      margin: 0 auto;
      padding-left: 0;
    }
  }
`;

const PromoBg = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${promoBgImage});
  background-size: cover;
`;

export const Promo: FC = () => {
  return (
    <Wrapper>
      <PromoBg />
      <Typography.Title className={'promo-text'} level={2}>
        Получай
      </Typography.Title>
      <Typography.Title className={'promo-text'} level={2}>
        Больше
      </Typography.Title>
      <Typography.Title className={'promo-text'} level={5}>
        новая бонусная программа
      </Typography.Title>
    </Wrapper>
  );
};
