import './ViewPosition.scss';
import { UserLayout } from 'components';
import { businessService } from 'app/service';
import { Link, useParams } from 'react-router-dom';
import { defaultViewPositionState, ViewPositionState } from './';
import { BusinessPosition } from 'instinct-rp-interfaces';
import React, { useContext, useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  Column,
  ConfigContext,
  Container,
  Icon,
  Jumbotron,
  Loading, Row,
  setURL,
} from 'instinct-frontend';
import { ApplyForBusiness } from './apply-for-business';

setURL('business/positions/:positionID', <ViewPosition/>);

export function ViewPosition() {
  const {positionID} = useParams();
  const configContext = useContext(ConfigContext);
  const [state, setState] = useState<ViewPositionState>(defaultViewPositionState);

  useEffect(() => {
    async function fetchJob(): Promise<void> {
      const position: BusinessPosition = await businessService.getPositionByID(positionID);
      setState({
          ...state,
        position,
        showSpinner: false,
      })
    }
    fetchJob();
  }, [positionID, state]);

  return (
    <UserLayout section="view_business">
      <Jumbotron style={{ backgroundImage: `url(${configContext.swfBaseURL}/assets/c_images/corp-badges/${state.position?.business?.badge}.gif')`}} title={state.position?.name}>
        <p>{state.position?.business?.name}</p>
      </Jumbotron>
      <Container>
        <Loading isLoading={state.showSpinner}>
          <Row className="container mb-3">
            <Link style={{ textDecoration: 'none' }} to="/business/positions"><Icon type="arrow-left"/> Vacant Jobs</Link>
          </Row>
          <Column side="left">
            <ApplyForBusiness position={state.position}/>
          </Column>
          <Column side="right">
            <Card header="Business Info">
              <h5>{state?.position?.business?.name}</h5>
              <p>{state?.position?.business?.desc}</p>
              <Link to={`/businesses/${state.position?.businessID}`}>
                <Button color="info" type="button">View Business</Button>
              </Link>
            </Card>
            <Card header="Uniforms">
              <Avatar look={state.position?.maleUniform}/>
              <Avatar look={state.position?.femaleUniform}/>
            </Card>
          </Column>
        </Loading>
      </Container>
    </UserLayout>
  );
}
