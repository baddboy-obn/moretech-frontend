import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Sizes } from '../../styles';
import { RightOutlined, SafetyCertificateTwoTone } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../utils/routes/paths';

const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  width: 100%;
  border-radius: ${Sizes.BORDER_RADIUS_SM};
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
  padding: 24px;
  margin-bottom: 20px;
`;

const LeagueInfoWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

const LeagueTitle = styled('span')`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #b37feb;
`;

const LeagueDescription = styled('span')`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #8c8c8c;
`;

const LeagueIcon = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextLeagueInfo = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
`;

const NextDescription = styled('span')`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #8c8c8c;
`;

const HowToIncrease = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #1890ff;
  padding: 4px 0;
`;

export const LeaguePane: FC = () => {
  return (
    <Wrapper>
      <LeagueInfoWrapper>
        <LeagueTitle>Фиолетовая лига</LeagueTitle>
        <LeagueDescription>
          Это выше, чем у 54% сотрудников. Будь лучшим, ждём тебя в Синей лиге!
        </LeagueDescription>
      </LeagueInfoWrapper>
      <LeagueIcon>
        <svg
          width="91"
          height="91"
          viewBox="0 0 91 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.0176 20.1471V58.1467L45.5 78.7817L71.9824 58.1467V20.1471L45.5 11.1182L19.0176 20.1471ZM56.2352 29.1494H61.1406C61.7183 29.1494 62.056 29.807 61.7183 30.278L42.8251 56.2894C42.6923 56.4712 42.5184 56.6191 42.3177 56.721C42.1169 56.823 41.895 56.8761 41.6698 56.8761C41.4447 56.8761 41.2227 56.823 41.022 56.721C40.8212 56.6191 40.6474 56.4712 40.5146 56.2894L29.2817 40.8265C28.944 40.3555 29.2817 39.6979 29.8594 39.6979H34.7648C35.227 39.6979 35.6535 39.9201 35.9201 40.2844L41.6698 48.2025L55.0799 29.7359C55.3465 29.3715 55.7819 29.1494 56.2352 29.1494Z"
            fill="#E4D1F9"
          />
          <path
            d="M77.039 15.0985L46.8419 4.80771C46.4775 4.6833 45.9888 4.62109 45.5 4.62109C45.0112 4.62109 44.5225 4.6833 44.1581 4.80771L13.961 15.0985C13.2234 15.3474 12.6191 16.2005 12.6191 16.9825V59.852C12.6191 60.6341 13.1257 61.6649 13.7389 62.1537L44.3714 86.0234C44.6824 86.2634 45.0823 86.3878 45.4911 86.3878C45.8999 86.3878 46.3087 86.2634 46.6108 86.0234L77.2434 62.1537C77.8565 61.6738 78.3631 60.643 78.3631 59.852V16.9825C78.3809 16.2005 77.7766 15.3562 77.039 15.0985ZM71.9824 58.1458L45.5 78.7808L19.0176 58.1458V20.1462L45.5 11.1173L71.9824 20.1462V58.1458Z"
            fill="#B37FEB"
          />
          <path
            d="M35.9202 40.2835C35.6536 39.9191 35.227 39.697 34.7649 39.697H29.8595C29.2818 39.697 28.9441 40.3546 29.2818 40.8256L40.5146 56.2885C40.6474 56.4703 40.8213 56.6182 41.022 56.7201C41.2228 56.8221 41.4448 56.8752 41.6699 56.8752C41.895 56.8752 42.117 56.8221 42.3178 56.7201C42.5185 56.6182 42.6924 56.4703 42.8252 56.2885L61.7183 30.2771C62.056 29.8061 61.7183 29.1484 61.1407 29.1484H56.2352C55.782 29.1484 55.3466 29.3706 55.08 29.735L41.6699 48.2016L35.9202 40.2835Z"
            fill="#B37FEB"
          />
        </svg>
      </LeagueIcon>
      <NextLeagueInfo>
        <SafetyCertificateTwoTone />
        <NextDescription>До Синей лиги 1000 алмазов</NextDescription>
      </NextLeagueInfo>
      <HowToIncrease to={Paths.BASE}>
        Как повысить уровень
        <RightOutlined />
      </HowToIncrease>
    </Wrapper>
  );
};
