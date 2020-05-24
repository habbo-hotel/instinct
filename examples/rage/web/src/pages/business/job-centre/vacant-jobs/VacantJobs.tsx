import { Link } from 'react-router-dom';
import { businessService } from 'app/service';
import { BusinessJob } from 'instinct-rp-interfaces';
import { defaultVacantJobsState, VacantJobsState } from './';
import { Card, ConfigContext, Loading } from 'instinct-frontend';
import React, { useContext, useEffect, useState } from 'react';

export function VacantJobs() {
  const configContext = useContext(ConfigContext);
  const [ state, setState ] = useState<VacantJobsState>(defaultVacantJobsState);

  useEffect(() => {
    async function fetchVacantJobs(): Promise<void> {
      const jobs: BusinessJob[] = await businessService.getVacantJobs();
      setState({
        jobs,
        showSpinner: false,
      })
    }
    fetchVacantJobs();
  }, []);

  return (
    <Card header="Vacant Jobs">
      <Loading isLoading={state.showSpinner}>
        {
          state.jobs.length === 0 && (
            <p>There are no positions currently open.</p>
          )
        }
        {
          state.jobs.map(job => (
            <Link to={`/business/jobs/${job.id}`} key={job.id}>
              <div className="business-row" style={{ background: `url(${configContext.siteLink}/swfs/assets/c_images/corp-badges/${job.business!.badge}.gif) 10px no-repeat` }}>
                <div className="user-count">{job.vacantSpots}</div>
                <div className="name">{job.name} <small>$({job.salary}/h)</small></div>
                <div className="desc">{job.business!.name}</div>
              </div>
            </Link>
          ))
        }
      </Loading>
    </Card>
  )
}