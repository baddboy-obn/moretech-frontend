import React, { FC } from 'react';
import { Button, Input, PageHeader, Space, Image } from 'antd';
import { EllipsisOutlined, SmileOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

import logo from '../../mocks/images/vtb_new_logo_2018 1.png';

const { Search } = Input;

const HeaderBlock = styled(PageHeader)`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
`;

export const Header: FC = () => {
  return (
    <HeaderBlock
      className="site-page-header"
      backIcon={<></>}
      title={<Image src={logo} height={30} preview={false} />}
      subTitle="staff"
      extra={
        <Space
          direction="horizontal"
          size={[140, 16]}
          style={{
            alignItems: 'center',
          }}
        >
          <Search
            placeholder="Сотрудник, отдел"
            allowClear
            style={{ width: 200 }}
          />
          <Space direction="horizontal">
            <Button type={'primary'}>
              <SmileOutlined />
              Помощник Витя бот
            </Button>
            <Button shape={'default'}>
              <EllipsisOutlined />
            </Button>
          </Space>
        </Space>
      }
    />
  );
};
