import React, { FC } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Typography } from 'antd';
import { RightOutlined, SketchOutlined } from '@ant-design/icons';

const Wrapper = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightSide = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BalanceWrap = styled('div')`
  display: flex;
  align-items: center;
  padding: 4px;
  gap: 4px;
  background-color: ${({ theme }) => theme.COLORS.WHITE.C300};
  border-radius: 10px;
  margin-bottom: 6px;
`;

interface Props {
  linkUrl: string;
  balance: number;
  text: string;
}

export const BalancePane: FC<Props> = ({ linkUrl, balance, text }) => {
  return (
    <Wrapper to={linkUrl}>
      <Typography.Text strong>{text}</Typography.Text>
      <RightSide>
        <BalanceWrap>
          <Typography.Text>{balance.toLocaleString('ru-RU')}</Typography.Text>
          <SketchOutlined />
        </BalanceWrap>
        <RightOutlined />
      </RightSide>
    </Wrapper>
  );
};
