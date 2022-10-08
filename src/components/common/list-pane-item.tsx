import React, { FC } from 'react';
import { IPaneListType } from './list-pane';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Avatar, Badge, Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';

const WrapperLink = styled(NavLink)`
  display: flex;
  padding: 12px 0;
  justify-content: space-between;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.WHITE.C300};
  }
`;

const Wrapper = styled('div')`
  display: flex;
  padding: 12px 0;
  justify-content: space-between;
`;

const RightSide = styled('div')`
  display: flex;
  gap: 16px;
`;

export const ListPaneItem: FC<IPaneListType> = ({
  image,
  link,
  text,
  notificationsCount,
  description,
}) => {
  return (
    <>
      {link ? (
        <WrapperLink to={link}>
          <RightSide>
            <Avatar src={image} />
            <div
              style={{
                maxWidth: 182,
              }}
            >
              <Typography.Text strong>{text}</Typography.Text>
              <br />
              <Typography.Paragraph
                style={{
                  margin: 0,
                }}
              >
                {description}
              </Typography.Paragraph>
            </div>
          </RightSide>
          <Badge
            count={notificationsCount}
            size={'small'}
            style={{
              fontSize: 8,
            }}
          >
            {notificationsCount && (
              <BellOutlined
                style={{
                  fontSize: 18,
                }}
              />
            )}
          </Badge>
        </WrapperLink>
      ) : (
        <Wrapper>
          <RightSide>
            <Avatar src={image} />
            <div
              style={{
                maxWidth: 182,
              }}
            >
              <Typography.Text strong>{text}</Typography.Text>
              <br />
              <Typography.Paragraph
                style={{
                  margin: 0,
                }}
              >
                {description}
              </Typography.Paragraph>
            </div>
          </RightSide>
          <Badge
            count={notificationsCount}
            size={'small'}
            style={{
              fontSize: 8,
            }}
          >
            {notificationsCount && (
              <BellOutlined
                style={{
                  fontSize: 18,
                }}
              />
            )}
          </Badge>
        </Wrapper>
      )}
    </>
  );
};
