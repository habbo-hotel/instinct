import { UserLayout } from 'components';
import { weaponService } from 'app/service';
import { Weapon } from 'instinct-rp-interfaces';
import React, { useEffect, useState } from 'react';
import { ArmoryState, defaultArmoryState } from './';
import { Card, Column, Container, Jumbotron, Loading, setURL } from 'instinct-frontend';

setURL('crime/armory', <Armory />);

export function Armory() {
  const [state, setState] = useState<ArmoryState>(defaultArmoryState);

  useEffect(() => {
    async function fetchWeapons(): Promise<void> {
      const weapons: Weapon[] = await weaponService.getAll();
      setState({
        weapons,
        showSpinner: false,
      });
    }

    fetchWeapons();
  }, []);

  return (
    <UserLayout>
      <Jumbotron title="The Armory" />
      <Loading isLoading={state.showSpinner}>
        <Container>
          <Column side="left">
            <Card header="Weapons">
              {state.weapons.length === 0 && !state.showSpinner && <p>There are no weapons</p>}
              <div className="row">
                {state.weapons.map((weapon) => (
                  <div className="col-6" key={weapon.id}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{weapon.name}</h5>
                        <p className="card-text">{weapon.desc}</p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <b>Damage Range: </b>
                          <br />
                          {weapon.minDamage} - {weapon.maxDamage}
                        </li>
                        <li className="list-group-item">
                          <b>Reload Speed: </b>
                          <br />
                          {weapon.reloadTime} seconds
                        </li>
                        <li className="list-group-item">
                          <b>Retail Value: </b>
                          <br />${weapon.price.toLocaleString()}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Column>
          <Column side="right">
            <Card header="About">
              <p>Weapons give you a bonus in combat by providing an alternative option to traditional fighting.</p>
            </Card>
            <Card header="Inventory">
              <p>Coming soon.</p>
            </Card>
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  );
}
