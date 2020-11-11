import React from 'react';
import {Link} from 'wouter';
import './MyEmploymentCard.scss';
import {Card, Icon} from '@instinct-prj/frontend';
import Skeleton from 'react-loading-skeleton';
import {useFetchRPStats} from '../../../hooks/session';

function EmploymentSkeleton() {
  return (
    <div className="row employment-block">
      <div className="d-inline">
        <Skeleton circle width={60} height={60} />
      </div>
      <div className="d-inline ml-3">
        <h3 style={{textTransform: 'uppercase', marginTop: 10}}>
          <Skeleton width={200} />
        </h3>
        <h6 style={{marginTop: -10}}>
          <Skeleton width={200} />
        </h6>
      </div>
    </div>
  );
}

export function MyEmploymentCard() {
  const rpUser = useFetchRPStats();

  return (
    <Card>
      <div className="row">
        <div className="col-6" style={{borderRight: '1px solid white'}}>
          <h3>My Job</h3>
          {!rpUser?.rpStats && <EmploymentSkeleton />}
          {rpUser?.rpStats?.job && (
            <Link to={`/businesses/${rpUser.rpStats.job.businessID}`}>
              <div className="row employment-block">
                <div className="d-inline">
                  <img
                    src={`/img/corps/${rpUser.rpStats.job.businessBadge}.gif`}
                    style={{height: 60, marginTop: 5, width: 60}}
                  />
                </div>
                <div className="d-inline ml-3">
                  <h3 style={{textTransform: 'uppercase', marginTop: 10}}>
                    {rpUser?.rpStats.job.positionName}
                  </h3>
                  <h6 style={{marginTop: -10}}>
                    {rpUser?.rpStats.job.businessName}
                  </h6>
                </div>
              </div>
            </Link>
          )}
          {rpUser?.rpStats && !rpUser?.rpStats.job && (
            <div className="text-center">
              <h2>
                <Icon type="exclamation-triangle" />
              </h2>
              <p>You don't have a job</p>
            </div>
          )}
        </div>
        <div className="col-6">
          <h3>My Gang</h3>
          {!rpUser?.rpStats && <EmploymentSkeleton />}
          {rpUser?.rpStats?.gang && (
            <>
              <Link to={`/gangs/${rpUser.rpStats.gang.gangID}`}>
                <div className="row employment-block">
                  <div className="d-inline">
                    <img
                      src={`/img/corps/${rpUser.rpStats.gang.gangBadge}.gif`}
                      style={{height: 60, marginTop: 5, width: 60}}
                    />
                  </div>
                  <div className="d-inline ml-3">
                    <h3 style={{textTransform: 'uppercase', marginTop: 10}}>
                      {rpUser?.rpStats.gang.rankName}
                    </h3>
                    <h6 style={{marginTop: -10}}>
                      {rpUser?.rpStats.gang.gangName}
                    </h6>
                  </div>
                </div>
              </Link>
            </>
          )}
          {rpUser?.rpStats && !rpUser?.rpStats.gang && (
            <div className="text-center">
              <h2>
                <Icon type="exclamation-triangle" />
              </h2>
              <p>You don't belong to a gang</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
