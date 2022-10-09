import React, { FC } from 'react';
import { Avatar, Space, Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Sizes } from '../../styles';
import styled from '@emotion/styled';
import { useAuthState } from '../../ducks/auth/authSlice';

const Wrapper = styled('div')`
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
  const { otherUsers } = useAuthState();
  return (
    <Wrapper>
      <Typography.Title level={5}>Мои друзья</Typography.Title>
      <Space size={[10, 0]} direction={'horizontal'}>
        <Avatar.Group>
          {otherUsers.map((el) => (
            <Avatar src={el.personal.avatar} key={el.publicKey} />
          ))}
        </Avatar.Group>
        <RightOutlined />
      </Space>
    </Wrapper>
  );
};
