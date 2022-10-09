import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Sizes } from '../../../styles';
import { Title } from './ProductMainCard';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useCurrentTheme } from '../../../utils/services/ThemeService';

const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  border-radius: ${Sizes.BORDER_RADIUS};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const data = [
  {
    name: 'Получение за достижение',
    uv: 0,
  },
  {
    name: 'Покупка #3143',
    uv: 120,
  },
  {
    name: 'Возврат в коллекцию',
    uv: 120,
  },
  {
    name: 'Покупка #6245',
    uv: 142,
  },
  {
    name: 'Покупка #7345',
    uv: 190,
  },
  {
    name: 'Покупка #7641',
    uv: 214,
  },
  {
    name: 'Покупка #9512',
    uv: 284,
  },
];

export const PriceDynamic: FC = () => {
  const theme = useCurrentTheme();

  return (
    <Wrapper>
      <Title>Динамика изменения стоимости</Title>
      <ResponsiveContainer width={'100%'} height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="uv"
            name={'Стоимость'}
            stroke={theme.COLORS.ACCENT.PRIMARY}
          />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};
