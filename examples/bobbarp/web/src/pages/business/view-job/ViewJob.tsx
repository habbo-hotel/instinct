import './ViewJob.scss';
import { UserLayout } from 'components';
import { businessService } from 'app/service';
import { Link, useParams } from 'react-router-dom';
import { BusinessJob } from 'instinct-rp-interfaces';
import { defaultViewJobState, ViewJobState } from './';
import React, { useContext, useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  Column,
  ConfigContext,
  Container,
  Form, Icon,
  Jumbotron,
  Loading, Row,
  setURL,
} from 'instinct-frontend';

setURL('business/jobs/:jobID', <ViewJob/>);

export function ViewJob() {
  const {jobID} = useParams();
  const configContext = useContext(ConfigContext);
  const [state, setState] = useState<ViewJobState>(defaultViewJobState);

  useEffect(() => {
    async function fetchJob(): Promise<void> {
      const job: BusinessJob = await businessService.getJobByID(jobID);
      setState({
          ...state,
        job,
        showSpinner: false,
      })
    }
    fetchJob();
  }, [jobID]);

  async function submitApplication(): Promise<void> {
    console.log(state.application);
  }

  return (
    <UserLayout section="view_business">
      <Jumbotron style={{ backgroundImage: `url('${configContext.siteLink}/corps/${state.job?.business?.badge}.gif')`}} title={state.job?.name}>
        <p>{state.job?.business?.name}</p>
      </Jumbotron>
      <Container>
        <Loading isLoading={state.showSpinner}>
          <Row className="container mb-3">
            <Link style={{ textDecoration: 'none' }} to="/business/jobs"><Icon type="arrow-left"/> Vacant Jobs</Link>
          </Row>
          <Column side="left">
            <Card header="Job Description">
              <p>{state.job?.desc}</p>
            </Card>
            <Card header="Job Application">
              <div className="container" style={{ padding: 0 }}>
                <b>Note:</b>
                <p>Once you submit an application, you cannot make any changes to it.</p>
              </div>
              <Form className="container mt-3" onSubmit={submitApplication}>
                <Row>
                  <h4>Why should you be hired?</h4>
                  <textarea className="form-control" value={state.application} placeholder="Tell us why you're the perfect candidate in under 100 words." rows={4}/>
                </Row>
                <Row className="mt-3">
                  <div style={{ width: '50%' }}/>
                  <div style={{ float: 'right', width: '50%', textAlign: 'right' }}>
                    <Button color="success" type="submit">Submit</Button>
                  </div>
                </Row>
              </Form>
            </Card>
          </Column>
          <Column side="right">
            <Card header="Business Info">
              <h5>{state?.job?.business?.name}</h5>
              <p>{state?.job?.business?.desc}</p>
              <Link to={`/businesses/${state.job?.businessID}`}>
                <Button color="info" type="button">View Business</Button>
              </Link>
            </Card>
            <Card header="Uniforms">
              <Avatar look={state.job?.maleUniform}/>
              <Avatar look={state.job?.femaleUniform}/>
            </Card>
          </Column>
        </Loading>
      </Container>
    </UserLayout>
  );
}
