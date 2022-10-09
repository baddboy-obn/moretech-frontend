import React, { FC, useMemo } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../utils/routes/paths';
import { Location } from '@remix-run/router';

export interface IMenuItem {
  to: Paths;
  text: string;
  exact?: boolean;
}

const Link = styled(NavLink)<{ isactive: 'true' | 'false' }>`
  color: ${({ theme, isactive }) =>
    isactive === 'true'
      ? theme.COLORS.ACCENT.PRIMARY
      : theme.COLORS.TEXT.COMMON_TEXT};
`;

type Props = {
  location: Location;
} & IMenuItem;

export const HeaderMenuItem: FC<Props> = ({ to, text, location, exact }) => {
  const isActive = useMemo(() => {
    if (exact) {
      if (location.pathname === to) {
        return 'true';
      } else {
        return 'false';
      }
    } else {
      if (location.pathname.indexOf(to) !== -1) {
        return 'true';
      } else {
        return 'false';
      }
    }
  }, [location.pathname]);

  return (
    <Link to={to} isactive={isActive}>
      {text}
    </Link>
  );
};
