import { sessionService } from 'app/service';
import React, { useContext, useEffect, useState } from 'react';
import { BusinessJobApplication } from 'instinct-rp-interfaces';
import { Button, Card, ConfigContext, Loading } from 'instinct-frontend';
import { defaultPreviousApplicationsState, PreviousApplicationsState } from './';

export function PreviousApplications() {
  const configContext = useContext(ConfigContext);
  const [ state, setState ] = useState<PreviousApplicationsState>(defaultPreviousApplicationsState);

  useEffect(() => {
    async function fetchPreviousApplications(): Promise<void> {
      const applications: BusinessJobApplication[] = await sessionService.getMyApplications();
      setState({
        applications,
        showSpinner: false,
      });
    }

    fetchPreviousApplications();
  }, []);

  return (
    <Card>
      <Loading isLoading={state.showSpinner}>
        {
          state.applications.map(application => (
            <div className="row-container" key={application.id} style={{ background: `url(${configContext.siteLink}/swfs/assets/c_images/corp-badges/${application.job.business?.badge}.gif) 10px no-repeat` }}>
              <div className="user-count mr-2" style={{ background: 'none', width: 'auto' }}>
                <Button color="info" style={{ fontSize: 10 }}>
                  View
                </Button>
              </div>
              <div className="name">{application.job!.name}</div>
              <div className="desc">
                <span className="mr-2">Pays <b>${application.job!.salary}/hour</b></span>
                <span className="mr-2">At <b>{application.job!.business!.name}</b></span>
              </div>
            </div>
          )) }
      </Loading>
    </Card>
  )

}