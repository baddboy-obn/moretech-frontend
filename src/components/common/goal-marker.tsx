import React, { FC } from 'react';
import { Progress, Space, Tooltip, Typography } from 'antd';
import { TooltipPlacement } from 'antd/lib/tooltip';

interface Props {
  current: number;
  max: number;
  text: string;
  tooltipPlace?: TooltipPlacement;
}

export const GoalMarker: FC<Props> = ({ current, max, text, tooltipPlace }) => {
  return (
    <Tooltip title={`${current} из ${max}`} placement={tooltipPlace ?? 'right'}>
      <Space direction="vertical" size={[0, 4]}>
        <Typography.Text>{text}</Typography.Text>
        <Progress percent={Math.floor(current / (max / 100))} />
      </Space>
    </Tooltip>
  );
};
