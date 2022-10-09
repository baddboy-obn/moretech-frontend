import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import {
  Button,
  PageHeader,
  Space,
  Image,
  Menu,
  Dropdown,
  MenuProps,
} from 'antd';
import { EllipsisOutlined, SketchOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { HeaderMenu } from './header-menu';
import { UserCard } from '../common/user-card';
import { MenuInfo } from 'rc-menu/lib/interface';
import { BalancePopover } from '../common/balance-popover';
import { useAppDispatch } from '../../ducks';
import { logOut, useAuthState } from '../../ducks/auth/authSlice';
import {
  setNeedWalletUpdate,
  useMyBalance,
} from '../../ducks/profile/my-balance/myBalanceSlice';
import { webAPI } from '../../api';
import { IUserKey } from '../../api/person';
import { SendUnits } from '../../modals/send-units';

import logo from '../../mocks/images/vtb_new_logo_2018 1.png';

const HeaderBlock = styled(PageHeader)`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
`;

const BalanceWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.WHITE.C300};
  cursor: pointer;
`;

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const balanceData = useMyBalance();
  const { data, authed, person, publicKey, type } = useAuthState();

  const [sendUnitsVisible, setSendUnitsVisible] = useState(false);
  const [balanceShow, setBalanceShow] = useState(false);

  const handleMenuClick: MenuProps['onClick'] = useCallback((e: MenuInfo) => {
    if (e.key === '1') {
      dispatch(logOut());
      dispatch(setNeedWalletUpdate());
    }
  }, []);

  const menu = useMemo(
    () => (
      <Menu
        onClick={handleMenuClick}
        items={[
          {
            label: 'Выйти',
            key: '1',
          },
        ]}
      />
    ),
    [handleMenuClick]
  );

  const handleFetchWallet = useCallback(
    async (userType: IUserKey, userPublicKey: string) => {
      return webAPI.personMethods.getWallet(userType, userPublicKey);
    },
    []
  );

  useEffect(() => {
    if (authed && type && publicKey && !balanceData.loaded) {
      // handleFetchWallet(type, publicKey).then((r) => {
      //   dispatch(setWalletData(r.data));
      // });
    }
  }, [authed, type, publicKey, balanceData.loaded]);

  const handleTransfer = useCallback(() => {
    setSendUnitsVisible(true);
    setBalanceShow(false);
  }, []);

  return (
    <>
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
            <HeaderMenu />
            <BalancePopover
              handleTransfer={handleTransfer}
              balanceShow={balanceShow}
              setBalanceShow={setBalanceShow}
            >
              <BalanceWrapper>
                <span>4 201</span>
                <SketchOutlined />
              </BalanceWrapper>
            </BalancePopover>
            {authed && person && data && (
              <Space direction="horizontal">
                <UserCard
                  name={`${data.name} ${data.lastname}`}
                  image={person.avatar}
                />
                <Dropdown overlay={menu}>
                  <Button shape={'default'}>
                    <EllipsisOutlined />
                  </Button>
                </Dropdown>
              </Space>
            )}
          </Space>
        }
      />
      <SendUnits setVisible={setSendUnitsVisible} visible={sendUnitsVisible} />
    </>
  );
};
