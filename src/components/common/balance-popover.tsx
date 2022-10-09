import React, { FC, PropsWithChildren, useCallback, useMemo } from 'react';
import { Button, Popover } from 'antd';
import styled from '@emotion/styled';
import {
  RightOutlined,
  ShoppingOutlined,
  SketchOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../utils/routes/paths';

const ContentWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ActionsWrapper = styled('div')`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const BalanceWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 60px;
  width: 280px;
  color: ${({ theme }) => theme.COLORS.ACCENT.PRIMARY};

  font-weight: 500;
  font-size: 32px;
`;

const Action = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const ActionText = styled('span')`
  font-size: 12px;
`;

export const BalancePopover: FC<
  PropsWithChildren<{
    handleTransfer: () => void;
    balanceShow: boolean;
    setBalanceShow: (state: boolean) => void;
  }>
> = ({ children, handleTransfer, balanceShow, setBalanceShow }) => {
  const navigate = useNavigate();

  const handleBuy = useCallback(() => {
    navigate({ pathname: Paths.SHOP });
  }, []);

  const Content = useMemo(
    () => (
      <ContentWrapper>
        <BalanceWrapper>
          <span>4 201</span>
          <SketchOutlined />
        </BalanceWrapper>
        <ActionsWrapper>
          <Action onClick={handleBuy}>
            <Button shape={'circle'} type={'primary'} size={'large'}>
              <ShoppingOutlined />
            </Button>
            <ActionText>В магазин</ActionText>
          </Action>
          <Action onClick={handleTransfer}>
            <Button shape={'circle'} type={'primary'} size={'large'}>
              <RightOutlined />
            </Button>
            <ActionText>Перевести</ActionText>
          </Action>
        </ActionsWrapper>
      </ContentWrapper>
    ),
    []
  );

  return (
    <Popover
      content={Content}
      title="Кошелек"
      trigger="click"
      open={balanceShow}
      onOpenChange={setBalanceShow}
    >
      {children}
    </Popover>
  );
};
