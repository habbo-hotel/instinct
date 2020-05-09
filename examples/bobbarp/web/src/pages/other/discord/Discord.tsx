import './Discord.scss';
import React from 'react';
import { UserLayout } from 'components';
import { Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('other/discord', <Discord/>);

export function Discord() {

  return (
    <UserLayout section="discord">
      <Jumbotron title="Discord">
        <p>Join the Discord community for real time updates and support.</p>
      </Jumbotron>
      <Container>
        <a target="_blank href=" href="https://discord.gg/nAxj5qK">
          <img alt="Discord" src="/img/icons/discord.png" height={250}/>
        </a>
      </Container>
    </UserLayout>
  );
}
