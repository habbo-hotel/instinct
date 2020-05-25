import { businessService } from 'app/service';
import { Card, Loading } from 'instinct-frontend';
import { Business } from 'instinct-rp-interfaces';
import React, { useEffect, useState } from 'react';
import { defaultBusinessListingsState, BusinessListingsState } from './';
import { BusinessRow } from '../../../../components/generic/business-row';

export function BusinessListings() {
  const [state, setState ] = useState<BusinessListingsState>(defaultBusinessListingsState);

  useEffect(() => {
    async function fetchBusinesses(): Promise<void> {
      const businesses: Business[] = await businessService.getAll();
      setState({
        businesses,
        showSpinner: false,
      });
    }

    fetchBusinesses();
  }, []);

  return (
    <Card>
      <Loading isLoading={state.showSpinner}>
        {
          state.businesses.map(business => (
            <BusinessRow business={business} key={business.id}/>
          ))
        }
      </Loading>
    </Card>
  )
}