import React from 'react';
import {Link} from 'wouter';
import {UserLayout} from '../../../components/layout/user';
import {
  Container,
  Column,
  setURL,
  RecentNews,
  MyProfile,
  Card,
  Icon,
} from '@instinct-prj/frontend';

setURL('home', <Home />);

export function Home() {
  return (
    <UserLayout>
      <Container>
        <Column side="left">
          <MyProfile />
          <Card
            header={
              <>
                <Icon type="exclamation-triangle" /> Beta
              </>
            }
          >
            <p>
              We are currently still in the development phase of our project.
              Expect changes, bugs and possible downtime as we work to perfect
              our game.
            </p>
            <Link to="/updates">
              <button className="btn btn-outline-info btn-block">
                See Our Updates
              </button>
            </Link>
          </Card>
        </Column>
        <Column side="right">
          <RecentNews />
          <Card
            header={
              <>
                {' '}
                <Icon family="fab" type="discord" /> Discord
              </>
            }
          >
            <a href="https://discord.gg/5KHWzfc" target="_blank">
              <img
                src="https://wcsplay.net/wp-content/uploads/2019/04/discord.png"
                style={{height: 75}}
              />
            </a>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}
