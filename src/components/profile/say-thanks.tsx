import React, { FC } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../utils/routes/paths';
import { Space, Typography } from 'antd';
import { LikeTwoTone, RightOutlined } from '@ant-design/icons';
import { useCurrentTheme } from '../../utils/services/ThemeService';
import { Sizes } from '../../styles';

interface Props {
  count: number;
}

const CountWrapper = styled('div')`
  display: flex;
  border-radius: 10px;
  gap: 4px;
  background-color: ${({ theme }) => theme.COLORS.WHITE.C300};
  padding: 4px 6px;
`;

const Wrapper = styled(NavLink)`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  width: 100%;
  padding: 12px 12px 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE.C400};
  border-radius: ${Sizes.BORDER_RADIUS_SM};
`;

export const SayThanks: FC<Props> = ({ count }) => {
  const theme = useCurrentTheme();
  return (
    <Wrapper to={Paths.BASE}>
      <Typography.Title level={5}>Сказали спасибо</Typography.Title>
      <Space size={[10, 0]}>
        <CountWrapper>
          <LikeTwoTone
            style={{
              marginTop: 2,
            }}
          />
          <Typography.Text
            style={{
              color: theme.COLORS.TEXT.DISABLED,
            }}
          >
            {count}
          </Typography.Text>
        </CountWrapper>
        <RightOutlined />
      </Space>
    </Wrapper>
  );
};
