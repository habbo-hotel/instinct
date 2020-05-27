import { BusinessRow } from 'components';
import { businessService } from 'app/service';
import { Card, Loading } from 'instinct-frontend';
import { Business } from 'instinct-rp-interfaces';
import React, { useEffect, useState } from 'react';
import { PrivateBusinessesState, defaultPrivateBusinessesState } from './index';

export function PrivateBusinesses() {
  const [state, setState] = useState<PrivateBusinessesState>(defaultPrivateBusinessesState);

  useEffect(() => {
    async function fetchPrivateBusinesses(): Promise<void> {
      const businesses: Business[] = await businessService.getPrivateBusinesses();
      setState({
        businesses,
        showSpinner: false,
      });
    }

    fetchPrivateBusinesses();
  }, []);

  return (
    <Card>
      <Loading isLoading={state.showSpinner}>
        {state.businesses.length === 0 && !state.showSpinner && <p>It appears there aren't any private businesses.</p>}
        {state.businesses.map((business) => (
          <BusinessRow business={business} key={business.id}>
            <p style={{ marginTop: -20 }}>
              Owned by <b>{business.owner.username}</b>
            </p>
          </BusinessRow>
        ))}
      </Loading>
    </Card>
  );
}
