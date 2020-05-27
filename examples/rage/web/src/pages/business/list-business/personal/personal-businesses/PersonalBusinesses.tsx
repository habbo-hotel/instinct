import { sessionService } from 'app/service';
import { Business } from 'instinct-rp-interfaces';
import React, { useContext, useEffect, useState } from 'react';
import { defaultPersonalBusinessesState, PersonalBusinessesState } from './';
import { Button, Card, ConfigContext, Loading, redirect } from 'instinct-frontend';

export function PersonalBusinesses() {
  const configContext = useContext(ConfigContext);
  const [state, setState] = useState<PersonalBusinessesState>(defaultPersonalBusinessesState);

  useEffect(() => {
    async function fetchPersonalBusinesses(): Promise<void> {
      const businesses: Business[] = await sessionService.getMyBusinesses();
      setState({
        businesses,
        showSpinner: false,
      });
    }

    fetchPersonalBusinesses();
  }, []);

  return (
    <Card>
      <Loading isLoading={state.showSpinner}>
        {state.businesses.map((business) => (
          <div
            className="row-container"
            key={business.id}
            style={{ background: `url(${configContext.siteLink}/swfs/assets/c_images/corp-badges/${business.badge}.gif) 10px no-repeat` }}
          >
            <div className="user-count mr-2" style={{ background: 'none', width: 'auto' }}>
              <Button color="primary" style={{ fontSize: 10 }} onClick={() => redirect(`business/manage/${business.id}`)}>
                Manage Corp
              </Button>
            </div>
            <div className="name">{business.name}</div>
            <div className="desc">
              <span className="mr-2">
                <b>{business.totalEmployees}</b> Employees
              </span>
              <span className="mr-2">
                <b>${business.bankBalance}</b> in Bank
              </span>
            </div>
          </div>
        ))}
      </Loading>
    </Card>
  );
}
