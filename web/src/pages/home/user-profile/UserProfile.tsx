import './UserProfile.scss';
import { Rooms } from './rooms';
import { Badges } from './badges';
import { Groups } from './groups';
import { Friends } from './friends';
import { useParams } from 'react-router';
import { userService } from 'app/service';
import { User } from 'fashionkilla-interfaces';
import { UserContainer } from './user-container';
import React, { useEffect, useState } from 'react';
import { defaultUserProfileState, UserProfileState } from './';
import { Container, Column, UserLayout, setURL, Loading, Jumbotron } from 'components';

setURL('profile/:username', <UserProfile />);

export function UserProfile() {
  const { username } = useParams<Record<'username', string>>();
  const [state, setState] = useState<UserProfileState>(defaultUserProfileState);

  useEffect(() => {
    setState(defaultUserProfileState);

    async function fetchUser(): Promise<void> {
      const user: User = await userService.getByUsername(username);
      setState({
        user,
        isLoading: false,
      });
    }

    fetchUser();
  }, [username]);

  return (
    <UserLayout section="profile">
      <Loading isLoading={state.isLoading}>
        <Jumbotron title={`The profile of ${state.user?.username}`} />
        <Container>
          <Column side="right">
            <UserContainer user={state.user} />
          </Column>
          <Column side="left">
            <Badges user={state.user} />
            <Friends user={state.user} />
            <Groups user={state.user} />
            <Rooms user={state.user} />
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  );
}
