import React, { useState } from 'react';
import { BusinessRow } from 'components';
import { businessService } from 'app/service';
import { Business } from 'instinct-rp-interfaces';
import { Card, Form, Loading } from 'instinct-frontend';
import { defaultSearchBusinessesState, SearchBusinessesState } from './';

export function SearchBusinesses() {
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
      lastQuery: state.query,
    })
  }

  return (
    <Card header="Search Businesses">
      <Loading isLoading={state.showSpinner}>
        <Form className="" onSubmit={searchBusiness}>
          <input className="form-control" value={state.query} placeholder="Business Name" onChange={e => setQuery(e.target.value)}/>
          <button disabled={state.showSpinner} style={{ display: 'none' }} type="submit"/>
          <br/>
          {
            state.lastQuery && state.businesses.length === 0 && (
              <p>No businesses match that name</p>
            )
          }
          {
            state.businesses.map(business => (
              <BusinessRow business={business} key={business.id}/>
            ))
          }
        </Form>
      </Loading>
    </Card>
  )
}