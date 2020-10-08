import { Link } from 'wouter';
import { MyProfile } from './my-profile';
import React, { useContext } from 'react';
import {
  Container,
  Column,
  setURL,
  RecentNews,
  PopularGroups,
  PopularRooms,
  healthContext,
  NavBar,
  Header,
  Icon,
  Footer,
} from 'instinct-frontend';

setURL('home', <Home />);

export function Home() {
  const { usersOnline } = useContext(healthContext);

  return (
    <>
       <span className="page-container">
        <Header>
          <Link className="rounded-button white plain mr-4" to="/play">
            Enter Hotel
          </Link>
          <button className="rounded-button white">
            {usersOnline}
            <Icon className="ml-2" type="user" />
          </button>
        </Header>
        <NavBar />
        <main>
          <section className="page-container" data-page="home">
          <Container>
        <Column side="left">
          <MyProfile />
          <br />
          <PopularRooms />
        </Column>
        <Column side="right">
          <RecentNews />
          <br />
          <PopularGroups />
        </Column>
      </Container>
          </section>
        </main>
      </span>
      <Footer />
    </>
  )
}