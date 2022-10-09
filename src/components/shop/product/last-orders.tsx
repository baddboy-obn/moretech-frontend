import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Sizes } from '../../../styles';
import { Title } from './ProductMainCard';
import { UserCard } from '../../common/user-card';

import user_1 from '../../../mocks/team/Avatar-2.jpg';
import user_2 from '../../../mocks/team/Avatar.jpg';
import user_3 from '../../../mocks/images/user-1.jpg';
import user_4 from '../../../mocks/images/user-2.jpg';
import user_5 from '../../../mocks/images/user-3.jpg';

import { Button, Space } from 'antd';
import { PricePane } from '../../common/balance-pane';

const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  border-radius: ${Sizes.BORDER_RADIUS};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const OrdersList = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Order = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.WHITE.C400};
    padding-bottom: 6px;
  }
`;

export const LastOrders: FC = () => {
  return (
    <Wrapper>
      <Title>Последние предложения</Title>
      <OrdersList>
        <Order>
          <Space direction={'horizontal'} size={[8, 8]}>
            <UserCard name={'Ирина Хон'} image={user_2} />1 день назад
          </Space>
          <Space direction={'horizontal'} size={[16, 16]}>
            Истекает через 2 дня
            <PricePane balance={312} />
            <Space direction={'horizontal'} size={[10, 10]}>
              <Button type={'primary'} ghost>
                Отклонить
              </Button>
              <Button type={'primary'}>Принять</Button>
            </Space>
          </Space>
        </Order>
        <Order>
          <Space direction={'horizontal'} size={[8, 8]}>
            <UserCard name={'Максим Башкардинов'} image={user_1} />2 дня назад
          </Space>
          <Space direction={'horizontal'} size={[16, 16]}>
            Истекает через 4 часа
            <PricePane balance={278} />
            <Space direction={'horizontal'} size={[10, 10]}>
              <Button type={'primary'} ghost>
                Отклонить
              </Button>
              <Button type={'primary'}>Принять</Button>
            </Space>
          </Space>
        </Order>
        <Order>
          <Space direction={'horizontal'} size={[8, 8]}>
            <UserCard name={'Тимур Новый'} />4 дня назад
          </Space>
          <Space direction={'horizontal'} size={[16, 16]}>
            Истекает через 14 минут
            <PricePane balance={241} />
            <Space direction={'horizontal'} size={[10, 10]}>
              <Button type={'primary'} ghost>
                Отклонить
              </Button>
              <Button type={'primary'}>Принять</Button>
            </Space>
          </Space>
        </Order>
        <Order>
          <Space direction={'horizontal'} size={[8, 8]}>
            <UserCard name={'Алексей Расин'} image={user_3} />7 дней назад
          </Space>
          <Space direction={'horizontal'} size={[16, 16]}>
            Истекает через 8 дней
            <PricePane balance={205} />
            <Space direction={'horizontal'} size={[10, 10]}>
              <Button type={'primary'} ghost>
                Отклонить
              </Button>
              <Button type={'primary'}>Принять</Button>
            </Space>
          </Space>
        </Order>
        <Order>
          <Space direction={'horizontal'} size={[8, 8]}>
            <UserCard name={'Инна Филатова'} image={user_4} />9 дней назад
          </Space>
          <Space direction={'horizontal'} size={[16, 16]}>
            Истекает через 4 дня
            <PricePane balance={198} />
            <Space direction={'horizontal'} size={[10, 10]}>
              <Button type={'primary'} ghost>
                Отклонить
              </Button>
              <Button type={'primary'}>Принять</Button>
            </Space>
          </Space>
        </Order>
        <Order>
          <Space direction={'horizontal'} size={[8, 8]}>
            <UserCard name={'Алина Самойлова'} image={user_5} />
            12 дней назад
          </Space>
          <Space direction={'horizontal'} size={[16, 16]}>
            Истекает через 1 день
            <PricePane balance={172} />
            <Space direction={'horizontal'} size={[10, 10]}>
              <Button type={'primary'} ghost>
                Отклонить
              </Button>
              <Button type={'primary'}>Принять</Button>
            </Space>
          </Space>
        </Order>
      </OrdersList>
    </Wrapper>
  );
};
