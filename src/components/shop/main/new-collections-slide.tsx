import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ISlide } from './new-collections';
import { Button, Image, Space, Typography } from 'antd';
import { Theme } from '@emotion/react';
import { Sizes } from '../../../styles';
import { NavLink } from 'react-router-dom';
import { PricePane } from '../../common/balance-pane';

const Wrapper = styled('div')<{ active: boolean }>`
  width: 100%;
  height: 528px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.3s ease-out;
  user-select: ${({ active }) => (active ? 'unset' : 'none')};
`;

type Props = {
  active: boolean;
  theme: Theme;
} & ISlide;

const ContentWrapper = styled('div')`
  padding: 40px 30px 60px 30px;
  width: 100%;
`;

const ImageWrapper = styled('div')`
  min-width: 545px;
  width: 545px;
  height: 100%;
  position: relative;
`;

const ImageStyled = styled(Image)`
  object-fit: cover;
  user-select: none;
  pointer-events: none;
`;

const Title = styled(Typography.Title)`
  margin-bottom: 0 !important;
  margin-top: 0 !important;
`;

const Tag = styled('div')`
  color: ${({ theme }) => theme.COLORS.ACCENT.PRIMARY};
  padding: 4px 8px;
  border-radius: ${Sizes.BORDER_RADIUS_SM};
  white-space: nowrap;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  background: #ecf6ff;
`;

export const NewCollectionsSlide: FC<Props> = ({
  active,
  imageUrl,
  type,
  link,
  description,
  availableFree,
  minimumPrice,
  btnText,
  title,
  theme,
}) => {
  return (
    <Wrapper active={active}>
      <ContentWrapper>
        <Title level={3}>{type}</Title>
        <Title
          level={3}
          style={{
            color: theme.COLORS.ACCENT.PRIMARY,
          }}
        >
          {title}
        </Title>
        <Typography.Paragraph
          strong
          style={{
            marginTop: 24,
            marginBottom: 60,
          }}
        >
          {description}
        </Typography.Paragraph>
        {availableFree.length > 0 && (
          <div
            style={{
              marginBottom: 86,
            }}
          >
            <Typography.Text
              style={{
                color: theme.COLORS.TEXT.DISABLED,
                display: 'block',
                marginBottom: 12,
              }}
            >
              Можно бесплатно получить за достижение следующих целей
            </Typography.Text>
            <Space direction={'horizontal'} size={[10, 6]} wrap>
              {availableFree.map((el) => (
                <Tag key={el.id}>{el.text}</Tag>
              ))}
            </Space>
          </div>
        )}
        <Space direction={'horizontal'} size={[12, 12]}>
          <NavLink to={link}>
            <Button type={'primary'}>{btnText}</Button>
          </NavLink>
          <PricePane
            balance={minimumPrice}
            prefix={'от'}
            style={{
              backgroundColor: 'transparent',
              marginBottom: 0,
            }}
          />
        </Space>
      </ContentWrapper>
      <ImageWrapper>
        <ImageStyled preview={false} src={imageUrl} />
      </ImageWrapper>
    </Wrapper>
  );
};
