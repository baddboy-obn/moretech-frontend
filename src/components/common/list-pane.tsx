import React, { CSSProperties, FC } from 'react';
import styled from '@emotion/styled';
import { Sizes } from '../../styles';
import { Button, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../utils/routes/paths';
import { useCurrentTheme } from '../../utils/services/ThemeService';
import { ListPaneItem } from './list-pane-item';

export type IPaneListType<T = unknown> = {
  image: string;
  text: string;
  link?: string;
  notificationsCount?: number;
  description?: string;
} & T;

interface Props {
  title: string;
  btnUrl?: Paths;
  btnText?: string;
  list: IPaneListType[];
  wrapperStyle?: CSSProperties;
  footerBtn?: JSX.Element;
}

const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE.C400};
  border-radius: ${Sizes.BORDER_RADIUS_SM};
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0 24px;
`;

const Header = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ListWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const ListPane: FC<Props> = ({
  btnText,
  list,
  btnUrl,
  title,
  wrapperStyle,
  footerBtn,
}) => {
  const theme = useCurrentTheme();

  return (
    <Wrapper style={wrapperStyle}>
      <Header>
        <Typography.Title level={5}>{title}</Typography.Title>
        {btnUrl && btnText && (
          <NavLink to={btnUrl}>
            <Button
              type={'text'}
              style={{
                color: theme.COLORS.ACCENT.PRIMARY,
              }}
            >
              {btnText}
            </Button>
          </NavLink>
        )}
      </Header>
      <ListWrapper>
        {list.map((listItem, i) => (
          <ListPaneItem
            description={listItem.description}
            text={listItem.text}
            link={listItem.link}
            image={listItem.image}
            notificationsCount={listItem.notificationsCount}
            key={i}
          />
        ))}
      </ListWrapper>
      {footerBtn}
    </Wrapper>
  );
};
