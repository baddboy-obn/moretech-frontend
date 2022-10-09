import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface Props {
  image?: string;
  name: string;
  size?: number;
}

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Name = styled('span')`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const UserCard: FC<Props> = ({ image, name, size }) => {
  return (
    <Wrapper>
      <Avatar size={size ? size : 32} icon={<UserOutlined />} src={image} />
      <Name>{name}</Name>
    </Wrapper>
  );
};
