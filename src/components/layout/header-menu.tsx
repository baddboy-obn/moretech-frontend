import React, { FC } from 'react';
import { Space } from 'antd';
import { useLocation } from 'react-router-dom';
import { Paths } from '../../utils/routes/paths';
import { HeaderMenuItem, IMenuItem } from './header-menu-item';

const Menu: IMenuItem[] = [
  { to: Paths.BASE, text: 'Профиль', exact: true },
  { to: Paths.SHOP, text: 'Магазин' },
];

export const HeaderMenu: FC = () => {
  const location = useLocation();

  return (
    <Space size={[12, 0]} direction={'horizontal'}>
      {Menu.map((el) => (
        <HeaderMenuItem key={el.to} {...el} location={location} />
      ))}
    </Space>
  );
};
