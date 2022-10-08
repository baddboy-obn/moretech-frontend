import React, { FC } from 'react';
import { MainInfo } from '../components/profile/main-info';
import styled from '@emotion/styled';
import { AchievementsPane } from '../components/profile/achievements-pane';
import { CoursesPane } from '../components/profile/courses-pane';

const Wrapper = styled('div')`
  padding: 0 24px;
  width: 100%;
`;

export const Home: FC = () => {
  return (
    <Wrapper>
      <MainInfo />
      <AchievementsPane />
      <CoursesPane />
    </Wrapper>
  );
};
