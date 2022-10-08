import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Button, Image } from 'antd';
import { Sizes } from '../../styles';
import { BalancePane } from '../common/balance-pane';
import { Paths } from '../../utils/routes/paths';
import { GoalMarker } from '../common/goal-marker';
import { NavLink } from 'react-router-dom';

import mainUserMockImage from '../../mocks/images/main-user.jpg';

const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  padding: 24px;
  border-radius: ${Sizes.BORDER_RADIUS_SM};
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE.C400};
`;

const ImageStyled = styled(Image)`
  width: 282px;
  height: 282px;
  border-radius: ${Sizes.BORDER_RADIUS_SM};
  overflow: hidden;
`;

export const ProfileSideCard: FC = () => {
  return (
    <Wrapper>
      <ImageStyled src={mainUserMockImage} />
      <BalancePane linkUrl={Paths.BALANCE} balance={4201} text={'Мой баланс'} />
      <GoalMarker current={4201} max={8000} text={'Коплю на мечту'} />
      <NavLink to={Paths.SHOP}>
        <Button
          style={{
            width: '100%',
          }}
        >
          В магазин
        </Button>
      </NavLink>
    </Wrapper>
  );
};
