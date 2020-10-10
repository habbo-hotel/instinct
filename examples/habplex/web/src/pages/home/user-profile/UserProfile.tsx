import './UserProfile.scss';
import { Rooms } from './rooms';
import { Badges } from './badges';
import { Groups } from './groups';
import { useRoute } from 'wouter';
import { Friends } from './friends';
import { UserContainer } from './user-container';
import React, { useEffect, useState } from 'react';
import { defaultUserProfileState, UserProfileState } from './';
import { FavoriteVideo } from './favorite-video/FavoriteVideo';
import { Container, Column, userService, Loading, Jumbotron, UserLayout, setURL } from 'instinct-frontend';

setURL('profile/:username', <UserProfile />);

export function UserProfile() {
  const [ match, params ] = useRoute<{ username: string }>('/profile/:username');
  const [state, setState] = useState<UserProfileState>(defaultUserProfileState);

  useEffect(() => {
    setState(defaultUserProfileState);

    async function fetchUser(): Promise<void> {
      const profile = await userService.getByUsername(params!.username);
      setState({
        profile,
        isLoading: false,
      });
    }

    fetchUser();
  }, [params?.username]);

  return (
    <UserLayout section="profile">
      <Loading isLoading={state.isLoading}>
        <Jumbotron title={`The profile of ${state.profile?.user.username}`} />
        <Container>
          <Column side="right">
            <UserContainer profile={state.profile} />
            <FavoriteVideo profile={state.profile} />
          </Column>
          <Column side="left">
            <Badges profile={state.profile} />
            <Friends profile={state.profile} />
            <Groups profile={state.profile} />
            <Rooms profile={state.profile} />
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  );
}
