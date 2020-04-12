import Moment from 'moment';
import { useParams } from 'react-router';
import { userService } from 'app/service';
import { User } from 'fashionkilla-interfaces';
import React, { useEffect, useState } from 'react';
import { defaultUserProfileState, UserProfileState } from './';
import { Container, Column, Row, UserLayout, setURL, Icon, Avatar, Loading } from 'components';

setURL('profile/:username', <UserProfile />);

export function UserProfile() {
  const { username } = useParams<Record<'username', string>>();
  const [state, setState] = useState<UserProfileState>(defaultUserProfileState);

  async function fetchUser(): Promise<void> {
    const user: User = await userService.getByUsername(username);
    setState({
      user,
      isLoading: false,
    });
  }

  useEffect(() => {
    setState(defaultUserProfileState);
    fetchUser();
  }, [fetchUser, username]);

  return (
    <UserLayout section="profile">
      <Loading isLoading={state.isLoading}>
        <Container>
          <Row>
            <Column side="right">
              <aside id="profile" className="default-section">
                <div className="profile-header">
                  <div
                    className="header-content flex-container flex-vertical-center"
                    style={{ backgroundColor: '#47AEE' }}
                  >
                    <Avatar look={state.user?.figure || ''} direction={2} headDirection={2} size="l" />
                    <div className="header-details">
                      <div className="header-title">{state.user?.username}</div>
                      <div className="header-description" />
                      <div className="profile-icon">
                        <img
                          alt="credits"
                          src="https://playrise.me/riseweb/images/icon-credits.png"
                          style={{ position: 'relative', top: 8 }}
                        />{' '}
                        {state.user?.credits}
                      </div>
                      <div className="profile-icon">
                        <img
                          alt="diamonds"
                          src="https://playrise.me/riseweb/images/icon-diamonds.png"
                          style={{ position: 'relative', top: 8 }}
                        />
                        {state.user?.points}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-content">
                  <div className="details-container">
                    <Icon type="user" />
                    Registered since <b>{Moment().format('MM/DD/YYYY')}</b>
                  </div>
                  <div className="details-container">
                    <Icon type="hotel" />
                    Currently
                    {state.user?.online ? (
                      <strong className="online">online</strong>
                    ) : (
                      <strong className="offline">offline</strong>
                    )}
                  </div>
                  <div className="details-container">
                    <Icon type="door-open" />
                    Last logged in
                  </div>
                  <div className="details-container">
                    <Icon type="headphones-alt" />
                    <a href="https://youtu.be/GfxcnX7XWfg" target="_blank" rel="noopener noreferrer">
                      https://youtu.be/GfxcnX7XWfg
                    </a>
                  </div>
                </div>

                <div className="profile-askfriend-button" data-id="1">
                  <a className="rounded-button custom" href="https://playrise.me/settings/profile">
                    Edit Profile
                  </a>
                </div>
              </aside>
            </Column>
          </Row>
        </Container>
      </Loading>
    </UserLayout>
  );
}
