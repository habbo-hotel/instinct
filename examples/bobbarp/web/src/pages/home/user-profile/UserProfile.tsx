import './UserProfile.scss';
import { Friends } from './friends';
import { UserLayout } from 'components';
import { useParams } from 'react-router';
import { userService } from 'app/service';
import { UserContainer } from './user-container';
import React, { useEffect, useState } from 'react';
import { defaultUserProfileState, UserProfileState } from './';
import { Container, Column, Loading, Jumbotron, setURL } from 'instinct-frontend';

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
          <Column side="right">
            <UserContainer profile={state.profile} />
          </Column>
          <Column side="left">
            <Friends profile={state.profile} />
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  );
}
