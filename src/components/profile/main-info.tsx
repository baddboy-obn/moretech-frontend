import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Space, Typography } from 'antd';
import { Sizes } from '../../styles';
import { useCurrentTheme } from '../../utils/services/ThemeService';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../utils/routes/paths';
import { useAuthState } from '../../ducks/auth/authSlice';

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
  const { data, authed, person } = useAuthState();

  if (!authed || !data || !person) {
    return null;
  }

  return (
    <Wrapper size={[0, 24]} direction={'vertical'}>
      <Space size={[0, 8]} direction={'vertical'}>
        <Typography.Title
          style={{
            marginBottom: 0,
          }}
          level={3}
        >
          {data.name} {data.lastname}
        </Typography.Title>
        <Typography.Text>{data.position}</Typography.Text>
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
              {data.department}
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
              {data.mentor}
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
              {data.manager}
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
          <Typography.Text>{person.about}</Typography.Text>
        </Space>
      </Space>
    </Wrapper>
  );
};
