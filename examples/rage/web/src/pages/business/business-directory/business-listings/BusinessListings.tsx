import { Link } from 'react-router-dom';
import { businessService } from 'app/service';
import { Business } from 'instinct-rp-interfaces';
import React, { useContext, useEffect, useState } from 'react';
import { Card, ConfigContext, Loading } from 'instinct-frontend';
import { defaultBusinessListingsState, BusinessListingsState } from './';

export function BusinessListings() {
  const configContext = useContext(ConfigContext);
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
            <Link to={`/businesses/${business.id}`} key={business.id}>
              <div className="business-row" style={{ background: `url(${configContext.siteLink}/swfs/assets/c_images/corp-badges/${business.badge}.gif) 10px no-repeat` }}>
                <div className="user-count">{business.members!.length}</div>
                <div className="name">{business.name}</div>
                <div className="desc">{business.desc}</div>
              </div>
            </Link>
          ))
        }
      </Loading>
    </Card>
  )
}