import { UserLayout } from 'components';
import React, { useEffect, useState } from 'react';
import { ArmoryState, defaultArmoryState } from './';
import { Card, Column, Container, Jumbotron, Loading, setURL } from 'instinct-frontend';

setURL('crime/armory', <Armory/>);

export function Armory() {
  const [ state, setState ] = useState<ArmoryState>(defaultArmoryState);

  return (
    <UserLayout>
      <Jumbotron title="The Armory">
        <p>Take a quick look at all the tools of death.</p>
      </Jumbotron>
      <Loading isLoading={state.showSpinner}>
        <Container>
          <Column side="left">
            <Card header="Weapons">
              <p>Coming Soon</p>
            </Card>
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  )
}