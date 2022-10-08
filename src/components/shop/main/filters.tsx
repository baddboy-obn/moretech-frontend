import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Sizes } from '../../../styles';
import { Form, Input, Select } from 'antd';

const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  width: 252px;
  border-radius: ${Sizes.BORDER_RADIUS};
  padding: 20px;
`;

const { Option } = Select;

export const Filters: FC = () => {
  const [form] = Form.useForm();

  return (
    <Wrapper>
      <Form form={form} layout="vertical">
        <Form.Item name={'search'} label={'Поиск'}>
          <Input placeholder="Введите ..." />
        </Form.Item>
        <Form.Item name={'category'} label={'Категория'}>
          <Select placeholder="Выберите">
            <Option value="all">Все категории</Option>
            <Option value="nft">NFT</Option>
            <Option value="merch">Мерч</Option>
            <Option value="bonuses">Бонусы</Option>
            <Option value="courses">Обучение</Option>
            <Option value="charity">Благотворительность</Option>
          </Select>
        </Form.Item>
        <Form.Item name={'collections'} label={'Коллекции'}>
          <Select placeholder="Выберите">
            <Option value="all">Все коллекции</Option>
            <Option value="new">Новые</Option>
            <Option value="popular">Популярные</Option>
            <Option value="nft_monsters">Монстрики</Option>
          </Select>
        </Form.Item>
        <Form.Item name={'access'} label={'Доступность'}>
          <Select placeholder="Выберите">
            <Option value="available">Доступно для покупки</Option>
            <Option value="unavailable">Недоступно для покупки</Option>
            <Option value="in_draft">В архиве</Option>
            <Option value="only_request">Только предложения</Option>
          </Select>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};
