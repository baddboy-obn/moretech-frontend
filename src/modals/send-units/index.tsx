import React, { FC, useCallback } from 'react';
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Select,
  Slider,
  Upload,
} from 'antd';
import { useAuthState } from '../../ducks/auth/authSlice';
import { UserCard } from '../../components/common/user-card';
import { UploadOutlined } from '@ant-design/icons';
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
      title={'Новая мотивация'}
      okText={'Отправить мотивацию'}
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
        <Form.Item
          name={'name'}
          label={'Название мотивации'}
          required
          rules={[
            {
              required: true,
              message: 'Поле обязательно для заполнения',
            },
          ]}
        >
          <Input
            placeholder={'Не более 32 символов'}
            maxLength={32}
            showCount
          />
        </Form.Item>
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
        <Form.Item name={'motivation_type'} required label={'Тип мотивации'}>
          <Checkbox.Group>
            <div>
              <Checkbox value={'nft'}>NFT</Checkbox>
              <Form.Item
                style={{
                  width: 350,
                  paddingLeft: 80,
                }}
                name={'rarity'}
              >
                <Slider
                  step={null}
                  tooltipVisible={false}
                  marks={{
                    0: 'Обычная',
                    33: 'Редкая',
                    66: 'Крайне редкая',
                    100: 'Легендарная',
                  }}
                />
              </Form.Item>
            </div>
            <div>
              <Checkbox value={'achieve'}>Ачивка</Checkbox>
              <Form.Item
                style={{
                  paddingLeft: 24,
                  paddingTop: 6,
                }}
                name={'achieve_file'}
              >
                <Upload>
                  <Button icon={<UploadOutlined />}>Загрузить ачивку</Button>
                </Upload>
              </Form.Item>
            </div>
            <div>
              <Checkbox value={'units'}>Валюта</Checkbox>
              <Form.Item
                style={{
                  paddingLeft: 24,
                  paddingTop: 6,
                }}
                name={'units_count'}
              >
                <InputNumber placeholder={'Сумма'} min={1} />
              </Form.Item>
            </div>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          name={'date'}
          required
          rules={[
            {
              required: true,
              message: 'Поле обязательно для заполнения',
            },
          ]}
          label={'Дата начисления'}
        >
          <DatePicker placeholder={'Выберите'} format={'DD.MM.YYYY'} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
