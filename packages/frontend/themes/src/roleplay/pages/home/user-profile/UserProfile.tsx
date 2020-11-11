import React from 'react';
import './UserProfile.scss';
import {Badges} from './badges';
import {useRoute} from 'wouter';
import {Guestbook} from './guestbook';
import {UserContainer} from './user-container';
import {UserLayout} from '../../../components/layout/user';
import {useFetchRPStatsByUsername} from '../../../hooks/user';
import {MyEmploymentCard} from '../../../components/templates/my-employment-card';
import {
  Container,
  Column,
  Loading,
  Jumbotron,
  setURL,
  useFetchUserByUsername,
} from '@instinct-prj/frontend';

setURL('profile/:username', <UserProfile />);

export function UserProfile() {
  const [match, params] = useRoute<{username: string}>('/profile/:username');
  const profile = useFetchUserByUsername(params!.username);
  const rpStats = useFetchRPStatsByUsername(params!.username);

  return (
    <UserLayout section="profile">
      <Loading isLoading={profile === undefined}>
        <Jumbotron title={`The profile of ${profile?.user.username}`} />
        <Container>
          <Column side="right">
            <UserContainer profile={profile} />
            <Badges profile={profile} />
          </Column>
          <Column side="left">
            <MyEmploymentCard rpStats={rpStats} />
            <Guestbook profile={profile} />
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  );
}
