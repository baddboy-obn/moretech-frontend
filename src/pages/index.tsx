import React, { FC, useCallback, useState } from 'react';
import { MainInfo } from '../components/profile/main-info';
import styled from '@emotion/styled';
import { AchievementsPane } from '../components/profile/achievements-pane';
import { CoursesPane } from '../components/profile/courses-pane';
import { ProfileLayout } from '../components/containers/profile-layout';

const Wrapper = styled('div')`
  padding: 0 24px;
  width: 100%;
`;

export const Home: FC = () => {
  const [sendCongratsModal, setSendCongratsModal] = useState(false);

  const handleOpenCongratsModal = useCallback(() => {
    setSendCongratsModal(true);
  }, []);

  return (
    <ProfileLayout
      visible={sendCongratsModal}
      setVisible={setSendCongratsModal}
      handleOpenCongratsModal={handleOpenCongratsModal}
    >
      <Wrapper>
        <MainInfo />
        <AchievementsPane />
        <CoursesPane />
      </Wrapper>
    </ProfileLayout>
  );
};
