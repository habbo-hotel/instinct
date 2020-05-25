import Moment from 'moment';
import './ViewApplication.scss';
import { useParams } from 'react-router-dom';
import { sessionService } from 'app/service';
import { BackButton, UserLayout } from 'components';
import React, { useContext, useEffect, useState } from 'react';
import { BusinessJobApplication } from 'instinct-rp-interfaces';
import { defaultViewApplicationState, ViewApplicationState } from './';
import { Button, Card, Column, ConfigContext, Container, Form, Icon, Jumbotron, Loading, setURL } from 'instinct-frontend';

setURL('business/applications/:applicationID', <ViewApplication/>);

export function ViewApplication() {
  const configContext = useContext(ConfigContext);
  const { applicationID }: Record<'applicationID', string> = useParams();
  const [ state, setState ] = useState<ViewApplicationState>(defaultViewApplicationState);

  useEffect(() => {
    async function fetchJobApplication(): Promise<void> {
      const application: BusinessJobApplication = await sessionService.getApplicationByID(Number(applicationID));
      setState({
        application,
        showSpinner: false,
      });
    }

    fetchJobApplication();
  }, [applicationID]);

  const lastUpdated: string = Moment(state.application?.createdAt).format('MMMM DD, YYYY hh:mmA')

  return (
    <UserLayout section="applications">
      <Jumbotron title="Viewing Application">
        <p>Last updated <b>{lastUpdated}</b></p>
      </Jumbotron>
      <Loading isLoading={state.showSpinner}>
        <Container>
          <BackButton/>
          <Column side="left">
            <Card>
              <Form className="">
                <div className="form-group">
                  <h3>Why should you be hired?</h3>
                  <textarea className="form-control" rows={3} value={state?.application?.content}/>
                </div>
                <div className="mt-3 text-right">
                  <Button color="success" style={{ fontSize: 14 }}>Save Changes</Button>
                </div>
              </Form>
            </Card>
          </Column>
          <Column side="right">
            {
              state?.application?.job?.vacantSpots === 0 && (
                <>
                  <div className="alert alert-danger">
                    <b>Notice</b>
                    <p>This job has no more openings.</p>
                  </div>
                </>
              )
            }
            <Card>
              <h3>Job Information</h3>
              {
                state?.application?.job?.business !== undefined
                ? (
                    <div className="row-container" style={{ background: `url(${configContext.siteLink}/swfs/assets/c_images/corp-badges/${state?.application?.job?.business?.badge}.gif) 10px no-repeat` }}>
                      <div className="user-count mr-2">
                        {state?.application?.job?.vacantSpots}
                      </div>
                      <div className="name">{state?.application?.job?.name}</div>
                      <div className="desc">
                        <span className="mr-2">Pays <b>${state?.application?.job?.salary}/hour</b></span>
                        <span className="mr-2">At <b>{state?.application?.job?.business?.name}</b></span>
                      </div>
                    </div>
                  )
                : <Icon className="fa-spin" family="fas" type="spinner"/>
              }
            </Card>
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  )

}