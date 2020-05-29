import { RowContainer } from 'components';
import { businessService } from 'app/service';
import { BusinessPosition } from 'instinct-rp-interfaces';
import React, { useContext, useEffect, useState } from 'react';
import { Card, ConfigContext, Loading } from 'instinct-frontend';
import { defaultVacantPositionState, VacantPositionsState } from './';

export function VacantPositions() {
  const configContext = useContext(ConfigContext);
  const [state, setState] = useState<VacantPositionsState>(defaultVacantPositionState);

  useEffect(() => {
    async function fetchVacantPositions(): Promise<void> {
      const positions: BusinessPosition[] = await businessService.getVacantPositions();
      setState({
        positions,
        showSpinner: false,
      });
    }

    fetchVacantPositions();
  }, []);

  return (
    <Card header="Vacant Positions">
      <Loading isLoading={state.showSpinner}>
        {state.positions.length === 0 && !state.showSpinner && <p>There are no open positions at this time!</p>}
        {state.positions.map((position) => (
          <RowContainer
            key={position.id}
            image={`${configContext.siteLink}/swfs/assets/c_images/corp-badges/${position.business!.badge}.gif`}
            header={position.name}
            users={position.vacantSpots}
          >
            <p>O</p>
          </RowContainer>
        ))}
      </Loading>
    </Card>
  );
}
