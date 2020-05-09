import { businessService } from 'app/service';
import { Business } from 'instinct-rp-interfaces';
import React, { useContext, useState } from 'react';
import { Card, ConfigContext, Form, Loading } from 'instinct-frontend';
import { defaultSearchBusinessesState, SearchBusinessesState } from './';

export function SearchBusinesses() {
  const configContext = useContext(ConfigContext);
  const [state, setState ] = useState<SearchBusinessesState>(defaultSearchBusinessesState);

  function setQuery(query: string): void {
    setState({
      ...state,
      query,
    })
  }

  function setSpinner(showSpinner: boolean): void {
    setState({
      ...state,
      showSpinner,
    })
  }

  async function searchBusiness(): Promise<void> {
    setSpinner(true);
    const businesses: Business[] = await businessService.search(state.query);
    setState({
      ...state,
      businesses,
      showSpinner: false,
    })
  }

  return (
    <Card header="Search Businesses">
      <Loading isLoading={state.showSpinner}>
        <Form className="" onSubmit={searchBusiness}>
          <input className="form-control" value={state.query} placeholder="Business Name" onChange={e => setQuery(e.target.value)}/>
          <button disabled={state.showSpinner} style={{ display: 'none' }} type="submit"/>
          {
            state.businesses.map(business => (
              <div key={business.id}>
                <img alt={business.name} src={`${configContext.swfBadgeURL}/${business.badge}.gif`}/>
              </div>
            ))
          }
        </Form>
      </Loading>
    </Card>
  )
}