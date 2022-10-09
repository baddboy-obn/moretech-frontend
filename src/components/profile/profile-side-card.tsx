import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Button, Image } from 'antd';
import { Sizes } from '../../styles';
import { BalancePane } from '../common/balance-pane';
import { Paths } from '../../utils/routes/paths';
import { GoalMarker } from '../common/goal-marker';
import { NavLink } from 'react-router-dom';
import { useAuthState } from '../../ducks/auth/authSlice';
import { UserCard } from '../common/user-card';

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

const TargetWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  gap: 4px;
`;

export const ProfileSideCard: FC = () => {
  const { data, authed, person } = useAuthState();
  const { my_target } = useAuthState();

  return (
    <Wrapper>
      {authed && data && person && (
        <>
          <ImageStyled src={person.avatar} />
          <BalancePane
            linkUrl={Paths.BALANCE}
            balance={4201}
            text={'Мой баланс'}
          />
          {my_target && (
            <TargetWrapper>
              <GoalMarker
                current={my_target.current_units}
                max={my_target.target.price}
                text={`Коплю на ${my_target.target.title}`}
              />
              <NavLink to={`${my_target.target.link}/${my_target.target.id}`}>
                <UserCard
                  name={'На страницу товара'}
                  image={my_target.target.imageUrl}
                />
              </NavLink>
            </TargetWrapper>
          )}
          <NavLink to={Paths.SHOP}>
            <Button
              style={{
                width: '100%',
              }}
              type={'primary'}
              ghost
            >
              В магазин
            </Button>
          </NavLink>
        </>
      )}
    </Wrapper>
  );
};
