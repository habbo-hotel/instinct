import Moment from 'moment';
import './ViewBusiness.scss';
import { useParams } from 'react-router-dom';
import { businessService } from 'app/service';
import { Business } from 'instinct-rp-interfaces';
import { BackButton, UserLayout } from 'components';
import React, { useContext, useEffect, useState } from 'react';
import { defaultViewBusinessState, ViewBusinessState} from './';
import {
  Avatar,
  Button,
  Card,
  Container,
  Column,
  Jumbotron,
  setURL,
  Loading,
  redirect,
  ConfigContext
} from 'instinct-frontend';

setURL('businesses/:businessID', <ViewBusiness/>);

export function ViewBusiness() {
  const configContext = useContext(ConfigContext);
  const { businessID }: Record<'businessID', string> = useParams()
  const [ state, setState ] = useState<ViewBusinessState>(defaultViewBusinessState);

  useEffect(() => {
    async function fetchBusiness(): Promise<void> {
      const business: Business = await businessService.getByID(Number(businessID));
      setState({
        business,
        showSpinner: false,
      });
    }

    fetchBusiness();
  }, [businessID]);

  return (
    <UserLayout section="view_business">
      <Loading isLoading={state.showSpinner}>
        <Jumbotron style={{ backgroundImage: `url(${configContext.siteLink}/swfs/assets/c_images/corp-badges/${state.business?.badge }.gif)` }} title={state.business?.name}>
          <p>{state.business?.desc}</p>
        </Jumbotron>
        <Container>
          <BackButton/>
          <Column side="left">
            {
              state.business?.positions?.map(position => (
                <Card key={position.id}>
                  <h3>{position.name}</h3>
                  <p>This position is empty</p>
                </Card>
              ))
            }
          </Column>
          <Column side="right">
            <Card header="Meet the Founder">
              <div className="row">
                <div className="col-4">
                  <div style={{ height: 140, overflow: 'hidden', marginTop: -50, marginLeft: -20 }}>
                    <Avatar look={state.business?.owner?.figure} direction={2} gesture="sml" size="l" />
                  </div>
                </div>
                <div className="col-8 text-right">
                  <h4 style={{ textTransform: 'uppercase' }}>{state.business?.owner?.username}</h4>
                  <Button color="success" style={{ fontSize: 12 }} onClick={() => redirect(`profile/${state.business?.owner?.username}`)}>View Profile</Button>
                </div>
              </div>
            </Card>
            <Card header="More Information">
              <b>Founded On: </b>
              <br/>
              {Moment(state.business?.createdAt).format('MMMM DD, YYYY')}
              <br/><br/>

              <b>Total Employees: </b>
              <br/>
              {state.business?.totalEmployees}
            </Card>
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  )
}
