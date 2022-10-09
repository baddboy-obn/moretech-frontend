import React, { FC, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Sizes } from '../styles';
import { Title } from '../components/shop/product/ProductMainCard';
import { Button, message, Select } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import { webAPI } from '../api';
import { IFetchedUsers, IUserKey } from '../api/person';
import { personKeyToString } from '../utils/functions/persons';
import { useAppDispatch } from '../ducks';
import { IOtherUser, setAuth, useAuthState } from '../ducks/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../utils/routes/paths';

const { Option } = Select;

const Wrapper = styled('div')`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE.C300};
`;

const Inner = styled('div')`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  border-radius: ${Sizes.BORDER_RADIUS};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Login: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { authed } = useAuthState();

  const [selectedUser, setSelectedUser] = useState<undefined | string>(
    undefined
  );

  const [users, setUsers] = useState<IFetchedUsers>({});
  const [usersLoaded, setUsersLoaded] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(false);
  const fetchUsers = useCallback(async () => {
    return webAPI.personMethods.getPersons();
  }, []);

  useEffect(() => {
    if (!usersLoaded && !fetching) {
      setFetching(true);
      fetchUsers().then((r) => {
        setFetching(false);
        setUsersLoaded(true);
        setUsers(r.data);
      });
    }
  }, [fetchUsers]);

  const handleLogin = useCallback(() => {
    if (selectedUser) {
      const key = Object.keys(users).find(
        (el) => users[el].publicKey === selectedUser
      ) as undefined | IUserKey;
      if (key) {
        const otherUsers: IOtherUser[] = Object.keys(users)
          .filter((el) => users[el].publicKey !== selectedUser && el !== 'hr')
          .map((el) => ({
            ...users[el],
            key: el as IUserKey,
          }));
        dispatch(
          setAuth({
            key: selectedUser,
            data: users[key].professional,
            person: users[key].personal,
            type: key,
            otherUsers,
          })
        );
      } else {
        void message.error('Ошибка при выборе пользователя');
      }
    }
  }, [selectedUser]);

  useEffect(() => {
    if (authed) {
      navigate({
        pathname: Paths.BASE,
      });
    }
  }, [authed]);

  return (
    <Wrapper>
      <Inner>
        <Title>Войти</Title>
        <FormWrapper>
          <Select
            placeholder="Выберите пользователя"
            style={{
              width: 280,
            }}
            loading={fetching}
            value={selectedUser}
            onChange={setSelectedUser}
          >
            {usersLoaded &&
              !fetching &&
              Object.keys(users)
                .filter((el) => el !== 'hr')
                .map((key: string) => (
                  <Option
                    key={users[key].publicKey}
                    value={users[key].publicKey}
                  >
                    {personKeyToString(key as IUserKey)}
                  </Option>
                ))}
          </Select>
          <Button
            type={'primary'}
            onClick={handleLogin}
            disabled={!selectedUser}
          >
            <RocketOutlined />
            Войти
          </Button>
        </FormWrapper>
      </Inner>
    </Wrapper>
  );
};
