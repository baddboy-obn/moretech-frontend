import React, { FC, useCallback } from 'react';
import { Form, InputNumber, Modal, Radio, Select } from 'antd';
import { useAuthState } from '../../ducks/auth/authSlice';
import { UserCard } from '../../components/common/user-card';
import moment, { Moment } from 'moment';

const { Option } = Select;

interface Props {
  visible: boolean;
  setVisible: (state: boolean) => void;
}

interface IForm {
  name: string;
  type: 'own' | 'group';
  recipient: string;
  motivation_type: string[];
  rarity: number;
  achieve_file: any;
  units_count: number;
  date: Moment;
}

export const SendUnits: FC<Props> = ({ visible, setVisible }) => {
  const { otherUsers } = useAuthState();
  const [form] = Form.useForm<IForm>();

  const handleCancel = useCallback(() => {
    setVisible(false);
  }, []);

  const handleFinish = useCallback((values: IForm) => {
    console.log(values);
  }, []);

  return (
    <Modal
      open={visible}
      onCancel={handleCancel}
      title={'Перевод'}
      okText={'Отправить'}
      cancelText={'В другой раз'}
      onOk={form.submit}
      destroyOnClose
    >
      <Form<IForm>
        layout={'vertical'}
        form={form}
        onFinish={handleFinish}
        initialValues={{
          type: 'own',
          name: '',
          date: moment(),
        }}
      >
        <Form.Item name={'type'} label={'Тип получателя'}>
          <Radio.Group>
            <Radio value={'own'}>Личная</Radio>
            <Radio value={'group'}>Групповая</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name={'recipient'}
          required
          rules={[
            {
              required: true,
              message: 'Поле обязательно для заполнения',
            },
          ]}
        >
          <Select placeholder={'Выберите получателя'}>
            {otherUsers.map((el) => (
              <Option key={el.publicKey} value={el.publicKey}>
                <UserCard
                  size={30}
                  name={`${el.professional.name} ${el.professional.lastname}`}
                  image={el.personal.avatar}
                />
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name={'units_count'}
          label={'Сумма'}
          required
          rules={[
            {
              required: true,
              message: 'Поле обязательно для заполнения',
            },
          ]}
        >
          <InputNumber placeholder={'Введите'} min={1} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
