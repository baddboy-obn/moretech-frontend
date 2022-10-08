import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../utils/routes/paths';
import { Location } from '@remix-run/router';

export interface IMenuItem {
  to: Paths;
  text: string;
}

const Link = styled(NavLink)<{ isActive: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.ACCENT.PRIMARY : theme.COLORS.TEXT.COMMON_TEXT};
`;

type Props = {
  location: Location;
} & IMenuItem;

export const HeaderMenuItem: FC<Props> = ({ to, text, location }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (location.pathname === to) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location.pathname]);

  return (
    <Link to={to} isActive={isActive}>
      {text}
    </Link>
  );
};
