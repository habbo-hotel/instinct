import React from 'react';
import {Link} from 'wouter';
import './MyEmploymentCard.scss';
import {Card} from '@instinct-prj/frontend';
import Skeleton from 'react-loading-skeleton';
import {useFetchRPStats} from '../../../hooks/session';

export function MyEmploymentCard() {
  const rpUser = useFetchRPStats();

  return (
    <Card>
      <div className="row">
        <div className="col-6" style={{borderRight: '1px solid white'}}>
          <h3>My Job</h3>
          <Link to={`/businesses/${rpUser?.rpStats?.job?.businessID}`}>
            <div className="row employment-block">
              <div className="d-inline">
                {rpUser?.rpStats?.job?.businessBadge ? (
                  <img
                    src={`/img/corps/${rpUser?.rpStats?.job?.businessBadge}.gif`}
                    style={{height: 60, marginTop: 5, width: 60}}
                  />
                ) : (
                  <Skeleton circle width={60} height={60} />
                )}
              </div>
              <div className="d-inline">
                <h3 style={{textTransform: 'uppercase', marginTop: 10}}>
                  {rpUser?.rpStats?.job?.positionName ?? (
                    <Skeleton width={200} />
                  )}
                </h3>
                <h6 style={{marginTop: -10}}>
                  {rpUser?.rpStats?.job?.businessName ?? (
                    <Skeleton width={200} />
                  )}
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-6">
          <div className="ml-3">
            <h3>My Gang</h3>
            <Link to="/gangs">
              <div className="row employment-block">
                <img
                  src="https://www.habborator.org/badges/badges/FR033.gif"
                  style={{height: 60, marginTop: 5}}
                />
                <div style={{marginTop: 10}}>
                  <h3 style={{textTransform: 'uppercase'}}>Turners</h3>
                  <h6 style={{marginTop: -10}}>Soldier</h6>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
