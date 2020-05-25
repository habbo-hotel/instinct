import './UserProfile.scss';
import { UserGang } from './user-gang';
import { useParams } from 'react-router';
import { UserStats } from './user-stats';
import { userService } from 'app/service';
import { UserContainer } from './user-container';
import { UserEmployment } from './user-employment';
import React, { useEffect, useState } from 'react';
import { BackButton, UserLayout } from 'components';
import { defaultUserProfileState, UserProfileState } from './';
import { Container, Column, Loading, Jumbotron, setURL  } from 'instinct-frontend';

setURL('profile/:username', <UserProfile />);

export function UserProfile() {
  const { username } = useParams<Record<'username', string>>();
  const [state, setState] = useState<UserProfileState>(defaultUserProfileState);

  useEffect(() => {
    setState(defaultUserProfileState);

    async function fetchUser(): Promise<void> {
      const profile = await userService.getByUsername(username);
      setState({
        profile,
        isLoading: false,
      });
    }

    fetchUser();
  }, [username]);

  return (
    <UserLayout section="profile">
      <Loading isLoading={state.isLoading}>
        <Jumbotron title={`The profile of ${state.profile?.user.username}`} />
        <Container>
          <BackButton/>
          <Column side="right">
            <UserContainer profile={state.profile} />
            <UserEmployment profile={state.profile}/>
            <UserGang profile={state.profile} />
          </Column>
          <Column side="left">
            <UserStats profile={state.profile}/>
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  );
}
