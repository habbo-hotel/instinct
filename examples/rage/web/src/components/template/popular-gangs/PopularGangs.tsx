import './PopularGangs.scss';
import { Link } from 'react-router-dom';
import { gangService } from 'app/service';
import { Gang } from 'instinct-rp-interfaces';
import { Card, Loading } from 'instinct-frontend';
import React, { useEffect, useState } from 'react';
import { defaultPopularGangsState, PopularGangsState } from './';

export function PopularGangs() {
  const [state, setState ] = useState<PopularGangsState>(defaultPopularGangsState);

  useEffect(() => {
    async function fetchPopularGangs(): Promise<void> {
      const gangs: Gang[] = await gangService.getTop();
      setState({
        gangs,
        showSpinner: false,
      });
    }
    fetchPopularGangs();
  }, []);

  return (
    <Card header="Top Gangs">
      <Loading isLoading={state.showSpinner}>
        {
          state.gangs.map(gang => (
            <Link to={`/crime/gangs/${gang.id}`} key={gang.id}>
              <div className="gang-container">
                <div className="user-count">0</div>
                <div className="name">{gang.name}</div>
                <div className="desc">{gang.kills} kills</div>
              </div>
            </Link>
          ))
        }
      </Loading>
    </Card>
  )
}