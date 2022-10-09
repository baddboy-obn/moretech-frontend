import React, { FC, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { Header } from '../layout/header';
import { Button, Layout } from 'antd';
import { useCurrentTheme } from '../../utils/services/ThemeService';
import { ProfileSideCard } from '../profile/profile-side-card';
import { FriendsTab } from '../profile/friends-tab';
import { SayThanks } from '../profile/say-thanks';
import { ListPane } from '../common/list-pane';
import { Paths } from '../../utils/routes/paths';
import { Promo } from '../profile/promo';
import { PlusOutlined } from '@ant-design/icons';
import { SendCongrats } from '../../modals/send-congrats';
import { LeaguePane } from '../profile/league-pane';

export const AppWrapper = styled(Layout)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.COLORS.WHITE.C300};
`;

const { Content, Sider } = Layout;

const SiderStyled = styled(Sider)`
  background-color: transparent;
`;

export const ProfileLayout: FC<
  PropsWithChildren<{
    visible: boolean;
    setVisible: (state: boolean) => void;
    handleOpenCongratsModal: () => void;
  }>
> = ({ children, visible, setVisible, handleOpenCongratsModal }) => {
  const theme = useCurrentTheme();

  return (
    <AppWrapper>
      <Header />
      <Layout
        style={{
          backgroundColor: theme.COLORS.WHITE.C300,
          padding: 24,
          maxWidth: 1600,
          margin: '0 auto',
          width: '100%',
          overflowY: 'auto',
        }}
        hasSider
      >
        <SiderStyled width={330}>
          <ProfileSideCard />
          <LeaguePane />
          <ListPane
            title={'Гильдии и группы'}
            btnText={'Все'}
            btnUrl={Paths.GROUPS}
            list={[
              {
                text: 'Гильдия GO',
                notificationsCount: 9,
                image: 'https://joeschmoe.io/api/v1/random',
                link: Paths.GROUPS,
                description: 'Профессиональное сообщество',
              },
              {
                text: 'Волебольная лига',
                image: 'https://joeschmoe.io/api/v1/random',
                link: Paths.GROUPS,
                description: 'Спортивный клуб',
              },
              {
                text: 'Творим добро',
                image: 'https://joeschmoe.io/api/v1/random',
                link: Paths.GROUPS,
                description: 'Волонтёерское движение',
              },
            ]}
          />
        </SiderStyled>
        <Content>{children}</Content>
        <SiderStyled width={330}>
          <Promo />
          <ListPane
            title={'Активности'}
            footerBtn={
              <Button
                style={{
                  marginBottom: 24,
                  marginTop: 24,
                }}
              >
                <PlusOutlined />
                Создать активность
              </Button>
            }
            list={[
              {
                text: 'Скоро день рождения',
                image: 'https://joeschmoe.io/api/v1/random',
                link: Paths.BASE,
                description: '3 сотрудника',
                onClick: handleOpenCongratsModal,
              },
              {
                text: 'Доброе дело',
                image: 'https://joeschmoe.io/api/v1/random',
                link: Paths.BASE,
                description: 'помощь приюту собак',
              },
              {
                text: 'Тайный санта',
                image: 'https://joeschmoe.io/api/v1/random',
                link: Paths.BASE,
                description:
                  'Поздравляем друг друга с Новым годом. Набираем участников',
              },
              {
                text: 'Менторство',
                image: 'https://joeschmoe.io/api/v1/random',
                link: Paths.BASE,
                description: 'Набираю учеников',
              },
            ]}
            wrapperStyle={{
              marginBottom: 24,
            }}
          />
          <FriendsTab />
          <SayThanks count={12} />
          <ListPane
            title={'Tech-новости'}
            btnText={'Все'}
            btnUrl={Paths.NEWS}
            list={[
              {
                text: 'Новые назначения',
                image: 'https://joeschmoe.io/api/v1/random',
                link: Paths.NEWS,
                description: 'В нашей компании произошли изменения...',
              },
              {
                text: 'Из стажёров в лиды',
                image: 'https://joeschmoe.io/api/v1/random',
                link: Paths.NEWS,
                description:
                  'Постоянная рубрика о карьерном росте внутри компании',
              },
              {
                text: 'Бонусная программа',
                image: 'https://joeschmoe.io/api/v1/random',
                link: Paths.NEWS,
                description: 'Приятный изменения',
              },
            ]}
          />
        </SiderStyled>
      </Layout>
      <SendCongrats visible={visible} setVisible={setVisible} />
    </AppWrapper>
  );
};
