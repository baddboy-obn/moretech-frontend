import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Space, Typography } from 'antd';
import { Sizes } from '../../styles';
import { useCurrentTheme } from '../../utils/services/ThemeService';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../utils/routes/paths';

const Wrapper = styled(Space)`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  padding: 24px;
  border-radius: ${Sizes.BORDER_RADIUS_SM};
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE.C400};
  width: 100%;
  margin-bottom: 24px;
`;

export const MainInfo: FC = () => {
  const theme = useCurrentTheme();

  return (
    <Wrapper size={[0, 24]} direction={'vertical'}>
      <Space size={[0, 8]} direction={'vertical'}>
        <Typography.Title
          style={{
            marginBottom: 0,
          }}
          level={3}
        >
          Тимур Новый
        </Typography.Title>
        <Typography.Text>
          Старший разработчик информационных систем
        </Typography.Text>
      </Space>
      <Space size={[0, 12]} direction={'vertical'}>
        <Typography.Title
          style={{
            marginBottom: 0,
          }}
          level={5}
        >
          Информация
        </Typography.Title>
        <Space direction={'horizontal'} size={[8, 0]}>
          <Typography.Text
            style={{
              color: theme.COLORS.TEXT.DISABLED,
            }}
          >
            Логин
          </Typography.Text>
          <Typography.Text>NT</Typography.Text>
        </Space>
        <Space direction={'horizontal'} size={[8, 0]}>
          <Typography.Text
            style={{
              color: theme.COLORS.TEXT.DISABLED,
            }}
          >
            Отдел
          </Typography.Text>
          <NavLink to={Paths.BASE}>
            <Typography.Text
              style={{
                color: theme.COLORS.ACCENT.PRIMARY,
              }}
            >
              WEB разработка
            </Typography.Text>
          </NavLink>
        </Space>
        <Space direction={'horizontal'} size={[8, 0]}>
          <Typography.Text
            style={{
              color: theme.COLORS.TEXT.DISABLED,
            }}
          >
            Ментор
          </Typography.Text>
          <NavLink to={Paths.BASE}>
            <Typography.Text
              style={{
                color: theme.COLORS.ACCENT.PRIMARY,
              }}
            >
              Максим Башкардинов
            </Typography.Text>
          </NavLink>
        </Space>
        <Space direction={'horizontal'} size={[8, 0]}>
          <Typography.Text
            style={{
              color: theme.COLORS.TEXT.DISABLED,
            }}
          >
            Руководитель
          </Typography.Text>
          <NavLink to={Paths.BASE}>
            <Typography.Text
              style={{
                color: theme.COLORS.ACCENT.PRIMARY,
              }}
            >
              Константин Ефимов
            </Typography.Text>
          </NavLink>
        </Space>
      </Space>
      <Space size={[0, 12]} direction={'vertical'}>
        <Typography.Title
          style={{
            marginBottom: 0,
          }}
          level={5}
        >
          Личная информация
        </Typography.Title>
        <Space direction={'horizontal'} size={[8, 0]}>
          <Typography.Text
            style={{
              color: theme.COLORS.TEXT.DISABLED,
            }}
          >
            День рождения
          </Typography.Text>
          <Typography.Text>29 сентября 1985</Typography.Text>
        </Space>
        <Space direction={'horizontal'} size={[8, 0]}>
          <Typography.Text
            style={{
              color: theme.COLORS.TEXT.DISABLED,
            }}
          >
            О себе
          </Typography.Text>
          <Typography.Text>Филантроп, меценат</Typography.Text>
        </Space>
      </Space>
    </Wrapper>
  );
};
