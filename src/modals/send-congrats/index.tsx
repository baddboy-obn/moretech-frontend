import React, { FC, useCallback, useState } from 'react';
import { Input, InputNumber, Modal, Space, Typography } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import moment from 'moment';
import { IUserCongrats, UserCard } from './user-card';
import { useCurrentTheme } from '../../utils/services/ThemeService';

import avatar1 from '../../mocks/team/Avatar.jpg';
import avatar2 from '../../mocks/team/Avatar-1.jpg';
import avatar3 from '../../mocks/team/Avatar-2.jpg';

const { TextArea } = Input;

interface Props {
  visible: boolean;
  setVisible: (state: boolean) => void;
}

const users: IUserCongrats[] = [
  {
    id: '1',
    name: 'Ирина Хон',
    date: moment({
      days: 14,
    }).toISOString(),
    avatarUrl: avatar1,
  },
  {
    id: '2',
    name: 'Константин Ефимов',
    date: moment({
      days: 16,
    }).toISOString(),
    avatarUrl: avatar2,
  },
  {
    id: '3',
    name: 'Максим Башкардинов',
    date: moment({
      days: 18,
    }).toISOString(),
    avatarUrl: avatar3,
  },
];

export const SendCongrats: FC<Props> = ({ visible, setVisible }) => {
  const theme = useCurrentTheme();

  const [selectedUser, setSelectedUser] = useState<string | undefined>(
    undefined
  );

  const handleCancel = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      title={
        <>
          Скоро День Рождения <SmileOutlined />
        </>
      }
      okText={'Отправить поздравление'}
      cancelText={'В другой раз'}
    >
      <Space direction={'vertical'} size={[0, 20]}>
        <Space
          direction={'vertical'}
          wrap
          size={[0, 8]}
          style={{
            alignItems: 'flex-start',
          }}
        >
          <Typography.Text>Кого хотите поздравить?</Typography.Text>
          <Space
            direction={'horizontal'}
            wrap
            size={[12, 12]}
            style={{
              alignItems: 'flex-start',
            }}
          >
            {users.map((user) => (
              <UserCard
                {...user}
                key={user.id}
                selected={selectedUser === user.id}
                onSelect={setSelectedUser}
              />
            ))}
          </Space>
        </Space>
        <Space
          direction={'vertical'}
          wrap
          size={[0, 8]}
          style={{
            alignItems: 'flex-start',
          }}
        >
          <Typography.Text>
            Сумма для перечисления на общий счёт
          </Typography.Text>
          <Space align={'center'} size={[8, 0]} direction={'horizontal'}>
            <InputNumber min={1} max={4201} placeholder={'10'} />
            <Typography.Text
              style={{
                color: theme.COLORS.TEXT.DISABLED,
                fontSize: 10,
              }}
            >
              У вас 4201 алмазов
            </Typography.Text>
          </Space>
        </Space>
        <Space
          direction={'vertical'}
          wrap
          size={[0, 8]}
          style={{
            alignItems: 'flex-start',
          }}
        >
          <Typography.Text>Поздравление</Typography.Text>
          <TextArea
            maxLength={200}
            showCount
            autoSize={{
              minRows: 2,
              maxRows: 4,
            }}
            style={{
              width: 320,
            }}
            placeholder={'Например, с Днём варения, любимая Особа...'}
          />
        </Space>
      </Space>
    </Modal>
  );
};
