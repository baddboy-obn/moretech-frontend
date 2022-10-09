import React, { FC, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { Sizes } from '../../../styles';
import { Button, message, Space, Typography } from 'antd';
import { UserCard } from '../../common/user-card';

import user_mock from '../../../mocks/team/Avatar-1.jpg';

const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  border-radius: ${Sizes.BORDER_RADIUS};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoInner = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled(Typography.Title)`
  margin: 0 !important;
  font-weight: 500;
  font-size: 18px !important;
  line-height: 22px !important;
`;

const Paragraph = styled(Typography.Paragraph)`
  margin: 0 !important;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.COLORS.TEXT.DISABLED};
`;

const AddonText = styled('span')`
  color: ${({ theme }) => theme.COLORS.TEXT.DISABLED};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

const NftBtnWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const BtnFirstLine = styled('div')`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const BtnAddonText = styled('span')`
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT.DISABLED};
`;

interface Props {
  productTitle: string;
}

export const ProductMainCard: FC<Props> = ({ productTitle }) => {
  const [isSelectedTarget, setIsTarget] = useState<boolean>(false);
  const [addDelete, setAddDelete] = useState<boolean>(false);
  const handleSetTarget = useCallback(() => {
    setIsTarget(true);
    message.success(`Цель: ${productTitle} - установлена`).then(() => {
      setAddDelete(true);
    });
  }, []);

  const handleDeleteTarget = useCallback(() => {
    setIsTarget(false);
    setAddDelete(false);
    void message.warning(`Цель: ${productTitle} - удалена`);
  }, []);

  return (
    <Wrapper>
      <InfoInner>
        <Title>Описание</Title>
        <Paragraph>
          Представляем вашему вниманию новую коллекцию, где каждый найдет себе
          монстрика по отпускному настроению
        </Paragraph>
      </InfoInner>
      <InfoInner>
        <Title>Текущий владелец</Title>
        <Space direction={'horizontal'} size={[20, 20]}>
          <UserCard name={'Константин Ефимов'} image={user_mock} />
          <AddonText>Получил за выполнение достижения</AddonText>
        </Space>
      </InfoInner>
      <InfoInner>
        <Title>Бонусы при приобретении</Title>
        <Paragraph>
          Возможность получить стикер (например чтобы наклеить на ноутбук)
        </Paragraph>
      </InfoInner>
      <NftBtnWrapper>
        <BtnFirstLine>
          <Button type={'primary'}>Оставить заявку</Button>
          <BtnAddonText>
            В данный момент предмет нельзя приобрести, но вы можете оставить
            заявку с предложенной стоимостью, возможно владелец решит выбрать
            ваше предложение
          </BtnAddonText>
        </BtnFirstLine>
        <BtnFirstLine>
          {isSelectedTarget ? (
            <Button type={'primary'} ghost disabled>
              Товар установлен как текущая цель
            </Button>
          ) : (
            <Button type={'primary'} ghost onClick={handleSetTarget}>
              Установить как текущую цель
            </Button>
          )}
          {addDelete && (
            <Button type={'primary'} ghost danger onClick={handleDeleteTarget}>
              Убрать цель
            </Button>
          )}
        </BtnFirstLine>
      </NftBtnWrapper>
    </Wrapper>
  );
};
