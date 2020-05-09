import './ViewBusiness.scss';
import { UserLayout } from 'components';
import { useParams } from 'react-router-dom';
import { businessService } from 'app/service';
import { Business } from 'instinct-rp-interfaces';
import React, { useContext, useEffect, useState } from 'react';
import { defaultViewBusinessState, ViewBusinessState } from './';
import {
  Card,
  Column,
  ConfigContext,
  Container,
  Icon,
  Jumbotron,
  Loading,
  setURL,
  UserContainer
} from 'instinct-frontend';

setURL('businesses/:businessID', <ViewBusiness/>);

export function ViewBusiness() {
  const {businessID} = useParams();
  const configContext = useContext(ConfigContext);
  const [state, setState] = useState<ViewBusinessState>(defaultViewBusinessState);

  useEffect(() => {
    async function fetchBusiness(): Promise<void> {
      const business: Business = await businessService.getByID(businessID);
      setState({
        business,
        showSpinner: false,
      })
    }
    fetchBusiness();
  }, [businessID]);

  return (
    <UserLayout section="view_business">
      <Jumbotron style={{ backgroundImage: `url('${configContext.siteLink}/corps/${state.business?.badge}.gif')`}} title={state.business?.name}>
        <p>{state.business?.desc}</p>
      </Jumbotron>
      <Container>
        <Loading isLoading={state.showSpinner}>
          <Column side="left">
            <Card header="About">
              <p>Coming Soon</p>
            </Card>
            <Card header="Employees">
              <div className="members-container">
                {
                  state.business && state.business.members!.map(user => (
                    <UserContainer key={user.id} user={user}/>
                  ))
                }
              </div>
            </Card>
          </Column>
          <Column side="right">
            <Card header="Business Owner">
              <div className="members-container">
                {
                  state.business
                    ? <UserContainer user={state.business!.user}/>
                    : <Icon className="fa-spin" type="spinner"/>
                }
              </div>
            </Card>
          </Column>
        </Loading>
      </Container>
    </UserLayout>
  );
}
