import { BusinessRow } from 'components';
import { businessService } from 'app/service';
import { Card, Loading } from 'instinct-frontend';
import { Business } from 'instinct-rp-interfaces';
import React, { useEffect, useState } from 'react';
import { defaultGovernmentBusinessesState, GovernmentBusinessesState } from './index';

export function GovernmentBusinesses() {
  const [state, setState] = useState<GovernmentBusinessesState>(defaultGovernmentBusinessesState);

  useEffect(() => {
    async function fetchGovernmentBusinesses(): Promise<void> {
      const businesses: Business[] = await businessService.getGovernmentBusinesses();
      setState({
        businesses,
        showSpinner: false,
      });
    }

    fetchGovernmentBusinesses();
  }, []);

  return (
    <Card>
      <Loading isLoading={state.showSpinner}>
        {state.businesses.length === 0 && !state.showSpinner && <p>It appears there aren't any government businesses.</p>}
        {state.businesses.map((business) => (
          <BusinessRow business={business} key={business.id}>
            <p style={{ marginTop: -20 }}>
              Directed by <b>{business.owner.username}</b>
            </p>
          </BusinessRow>
        ))}
      </Loading>
    </Card>
  );
}
