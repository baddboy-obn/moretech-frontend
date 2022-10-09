import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Space, Typography, Image, Tooltip } from 'antd';
import { Sizes } from '../../styles';

import achieve_1 from '../../resources/ach_ex_1.png';
import achieve_2 from '../../resources/ach_ex_2.png';
import achieve_3 from '../../resources/ach_ex_3.png';

const Wrapper = styled(Space)`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  padding: 24px;
  border-radius: ${Sizes.BORDER_RADIUS_SM};
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE.C400};
  width: 100%;
  margin-bottom: 24px;
`;

const ImageStyled = styled(Image)`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

export const AchievementsPane: FC = () => {
  return (
    <Wrapper direction={'vertical'} size={[0, 16]}>
      <Typography.Title
        style={{
          marginBottom: 0,
        }}
        level={4}
      >
        Награды
      </Typography.Title>
      <Space size={[12, 12]} wrap>
        <Tooltip title={'Ментор месяца - бронзовый уровень'}>
          <ImageStyled preview={false} src={achieve_1} />
        </Tooltip>
        <Tooltip title={'Запуск внутреннего портала'}>
          <ImageStyled preview={false} src={achieve_2} />
        </Tooltip>
        <Tooltip title={'Создатель гильдии'}>
          <ImageStyled preview={false} src={achieve_3} />
        </Tooltip>
      </Space>
    </Wrapper>
  );
};
