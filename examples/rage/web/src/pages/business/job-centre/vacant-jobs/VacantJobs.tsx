import { Link } from 'react-router-dom';
import { BusinessBadge } from 'components';
import { businessService } from 'app/service';
import { Card, Loading } from 'instinct-frontend';
import React, { useEffect, useState } from 'react';
import { BusinessPosition} from 'instinct-rp-interfaces';
import { defaultVacantJobsState, VacantJobsState } from './';

export function VacantJobs() {
  const [ state, setState ] = useState<VacantJobsState>(defaultVacantJobsState);

  useEffect(() => {
    async function fetchVacantPositions(): Promise<void> {
      const positions: BusinessPosition[] = await businessService.getVacantPositions();
      setState({
        positions,
        showSpinner: false,
      })
    }
    fetchVacantPositions();
  }, []);

  return (
    <Card header="Vacant Jobs">
      <Loading isLoading={state.showSpinner}>
        {
          state.positions.length === 0 && (
            <p>There are no positions currently open.</p>
          )
        }
        {
          state.positions.map(position => (
            <Link to={`/business/jobs/${position.id}`} key={position.id}>
              <BusinessBadge business={position.business!}/>
              <div className="user-count">{position.vacantSpots}</div>
              <div className="name">{position.name} <small>$({position.salary}/h)</small></div>
              <div className="desc">{position.business!.name}</div>
            </Link>
          ))
        }
      </Loading>
    </Card>
  )
}