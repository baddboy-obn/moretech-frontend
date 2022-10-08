import React, { FC } from 'react';
import { Avatar, Space, Typography } from 'antd';
import {
  AntDesignOutlined,
  RightOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Sizes } from '../../styles';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../utils/routes/paths';
import styled from '@emotion/styled';

const Wrapper = styled(NavLink)`
  margin: 24px 0;
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  width: 100%;
  border-radius: ${Sizes.BORDER_RADIUS_SM};
  padding: 12px 12px 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE.C400};
`;

export const FriendsTab: FC = () => {
  return (
    <Wrapper to={Paths.FRIENDS}>
      <Typography.Title level={5}>Мои друзья</Typography.Title>
      <Space size={[10, 0]} direction={'horizontal'}>
        <Avatar.Group>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
          <Avatar
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
          />
          <Avatar
            style={{ backgroundColor: '#1890ff' }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
        <RightOutlined />
      </Space>
    </Wrapper>
  );
};
