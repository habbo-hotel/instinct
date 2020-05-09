import './SearchBusinesses.scss';
import { Link } from 'react-router-dom';
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
              <Link to={`/businesses/${business.id}`} key={business.id}>
                <div className="business-row" style={{ background: `url(${configContext.siteLink}/corps/${business.badge}.gif) 10px no-repeat` }}>
                  <div className="user-count">{business.members!.length}</div>
                  <div className="name">{business.name}</div>
                  <div className="desc">{business.desc}</div>
                </div>
              </Link>
            ))
          }
        </Form>
      </Loading>
    </Card>
  )
}