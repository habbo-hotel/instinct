import { GangRow } from 'components';
import { gangService } from 'app/service';
import { Gang } from 'instinct-rp-interfaces';
import { Card, Loading } from 'instinct-frontend';
import React, { useEffect, useState } from 'react';
import { defaultGangContainerState, GangContainerState } from './';

export function GangContainer() {
  const [state, setState] = useState<GangContainerState>(defaultGangContainerState);

  useEffect(() => {
    async function fetchGangs(): Promise<void> {
      const gangs: Gang[] = await gangService.getAll();
      setState({
        gangs,
        showSpinner: false,
      });
    }

    fetchGangs();
  }, []);

  return (
    <Card>
      <Loading isLoading={state.showSpinner}>
        {state.gangs.length === 0 && !state.showSpinner && <p>There are no gangs yet!</p>}
        {state.gangs.map((gang) => (
          <GangRow key={gang.id} gang={gang} />
        ))}
      </Loading>
    </Card>
  );
}
