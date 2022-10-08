import React, { FC, useCallback } from 'react';
import styled from '@emotion/styled';
import { Sizes } from '../../styles';
import { Avatar, Typography } from 'antd';
import Moment from 'react-moment';
import moment from 'moment';
import { useCurrentTheme } from '../../utils/services/ThemeService';

export interface IUserCongrats {
  id: string;
  name: string;
  date: string;
  avatarUrl: string;
}

const Wrapper = styled('div')<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  border-radius: ${Sizes.BORDER_RADIUS_SM};
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.COLORS.ACCENT.PRIMARY : theme.COLORS.WHITE.C300};
  padding: 8px;
  transition: border-color 0.3s ease-out;
  cursor: pointer;
`;

const Name = styled(Typography.Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  box-orient: vertical;
  width: 86px;
  height: 36px;
  text-align: center;
`;

type Props = {
  selected: boolean;
  onSelect: (state: string) => void;
} & IUserCongrats;

export const UserCard: FC<Props> = ({
  id,
  date,
  name,
  avatarUrl,
  selected,
  onSelect,
}) => {
  const theme = useCurrentTheme();

  const handleSelect = useCallback(() => {
    onSelect(id);
  }, [id]);

  return (
    <Wrapper onClick={handleSelect} selected={selected}>
      <Avatar src={avatarUrl} shape={'circle'} />
      <Name>{name}</Name>
      <Typography.Text
        style={{
          color: theme.COLORS.TEXT.DISABLED,
          fontSize: 10,
        }}
      >
        <Moment to={date}>{moment().toISOString()}</Moment>
      </Typography.Text>
    </Wrapper>
  );
};
