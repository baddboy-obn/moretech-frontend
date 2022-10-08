import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Space, Typography, Image } from 'antd';
import { Sizes } from '../../styles';

const Wrapper = styled(Space)`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  padding: 24px;
  border-radius: ${Sizes.BORDER_RADIUS_SM};
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE.C400};
  width: 100%;
  margin-bottom: 24px;
`;

const ImageStyled = styled(Image)`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

export const AchievementsPane: FC = () => {
  return (
    <Wrapper direction={'vertical'} size={[0, 16]}>
      <Typography.Title
        style={{
          marginBottom: 0,
        }}
        level={4}
      >
        Награды
      </Typography.Title>
      <Space size={[12, 12]} wrap>
        <ImageStyled
          preview={false}
          src={'https://joeschmoe.io/api/v1/random'}
        />
        <ImageStyled
          preview={false}
          src={'https://joeschmoe.io/api/v1/random'}
        />
        <ImageStyled
          preview={false}
          src={'https://joeschmoe.io/api/v1/random'}
        />
        <ImageStyled
          preview={false}
          src={'https://joeschmoe.io/api/v1/random'}
        />
        <ImageStyled
          preview={false}
          src={'https://joeschmoe.io/api/v1/random'}
        />
        <ImageStyled
          preview={false}
          src={'https://joeschmoe.io/api/v1/random'}
        />
      </Space>
    </Wrapper>
  );
};
