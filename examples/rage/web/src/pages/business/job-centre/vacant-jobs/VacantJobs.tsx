import { Link } from 'react-router-dom';
import { BusinessBadge } from 'components';
import { businessService } from 'app/service';
import { Card, Loading } from 'instinct-frontend';
import React, { useEffect, useState } from 'react';
import { BusinessJob } from 'instinct-rp-interfaces';
import { defaultVacantJobsState, VacantJobsState } from './';

export function VacantJobs() {
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
              <BusinessBadge business={job.business!}/>
              <div className="user-count">{job.vacantSpots}</div>
              <div className="name">{job.name} <small>$({job.salary}/h)</small></div>
              <div className="desc">{job.business!.name}</div>
            </Link>
          ))
        }
      </Loading>
    </Card>
  )
}