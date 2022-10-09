import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Card, Space, Typography } from 'antd';
import { Sizes } from '../../styles';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../utils/routes/paths';

const { Meta } = Card;

const Wrapper = styled(Space)`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  padding: 24px;
  border-radius: ${Sizes.BORDER_RADIUS_SM};
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE.C400};
  width: 100%;
  margin-bottom: 24px;
`;

export const CoursesPane: FC = () => {
  return (
    <Wrapper direction={'vertical'} size={[0, 16]}>
      <Typography.Title
        style={{
          marginBottom: 0,
        }}
        level={4}
      >
        Образовательные курсы
      </Typography.Title>
      <Space wrap size={[12, 12]} direction={'horizontal'}>
        <NavLink to={Paths.BASE}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <div
                style={{
                  background:
                    'linear-gradient(105.49deg, rgba(105, 192, 255, 0.7) 3.65%, rgba(24, 144, 255, 0.7) 95.97%)',
                  height: 100,
                }}
              />
            }
          >
            <Meta title="Безопасность 2.0" description="пройти до 29 октября" />
          </Card>
        </NavLink>
        <NavLink to={Paths.BASE}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <div
                style={{
                  background:
                    'linear-gradient(103.97deg, rgba(216, 176, 241, 0.7) 0%, rgba(52, 113, 188, 0.7) 98.43%)',
                  height: 100,
                }}
              />
            }
          >
            <Meta title="Обратная связь" description="пройти до 12 ноября" />
          </Card>
        </NavLink>
        <NavLink to={Paths.BASE}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <div
                style={{
                  background:
                    'linear-gradient(103.42deg, rgba(118, 217, 239, 0.7) -1.31%, rgba(95, 151, 235, 0.7) 100%)',
                  height: 100,
                }}
              />
            }
          >
            <Meta title="Борьба со стрессом" description="до 11 декабря" />
          </Card>
        </NavLink>
      </Space>
    </Wrapper>
  );
};
