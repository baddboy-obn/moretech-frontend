import React, { FC } from 'react';
import { IPopularSlide } from './popular-items';
import styled from '@emotion/styled';
import { Image, Typography } from 'antd';
import { Theme } from '@emotion/react';
import { PricePane } from '../../common/balance-pane';
import { NavLink } from 'react-router-dom';

interface Props extends IPopularSlide {
  active: boolean;
  theme: Theme;
}

const Wrapper = styled('div')<{ active: boolean }>`
  width: 100%;
  height: 528px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.3s ease-out;
  user-select: ${({ active }) => (active ? 'unset' : 'none')};
  padding-bottom: 58px;
`;

const ImageWrapper = styled('div')`
  width: 100%;
  height: 364px;
`;

const ImageStyled = styled(Image)`
  object-fit: contain;
  pointer-events: none;
  user-select: none;
`;

const TitlesWrapper = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const PopularItemsSlide: FC<Props> = ({
  active,
  description,
  price,
  title,
  imageUrl,
  theme,
  link,
}) => {
  return (
    <Wrapper active={active}>
      <ImageWrapper>
        <ImageStyled preview={false} src={imageUrl} />
      </ImageWrapper>
      <TitlesWrapper to={link}>
        <Typography.Title
          style={{
            marginBottom: 0,
            color: theme.COLORS.ACCENT.PRIMARY,
          }}
          level={5}
        >
          {title}
        </Typography.Title>
        <Typography.Text
          style={{
            fontSize: 12,
          }}
        >
          {description}
        </Typography.Text>
      </TitlesWrapper>
      {price && (
        <PricePane
          balance={price}
          style={{
            marginLeft: 30,
            width: 'fit-content',
          }}
        />
      )}
    </Wrapper>
  );
};
