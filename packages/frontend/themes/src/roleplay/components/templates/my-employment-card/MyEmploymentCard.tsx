import React from 'react';
import './MyEmploymentCard.scss';
import {Card, Icon} from '@instinct-prj/frontend';
import {MyEmploymentCardProps} from './MyEmploymentCard.types';
import {EmploymentBlock} from './employment-block/EmploymentBlock';

export function MyEmploymentCard({rpStats}: MyEmploymentCardProps) {
  return (
    <Card>
      <div className="row">
        <div className="col-6" style={{borderRight: '1px solid white'}}>
          <h3>My Job</h3>
          {rpStats?.job && (
            <EmploymentBlock
              badge={`/img/corps/${rpStats.job!.businessBadge}.gif`}
              position={rpStats!.job!.positionName}
              name={rpStats!.job!.businessName}
              link={`/businesses/${rpStats.job!.businessID}`}
            />
          )}
          {rpStats && !rpStats.job && (
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
          {rpStats?.gang && (
            <EmploymentBlock
              badge={`/img/corps/${rpStats.gang!.gangBadge}.gif`}
              position={rpStats!.gang!.rankName}
              name={rpStats!.gang!.gangName}
              link={`/gangs/${rpStats.gang!.gangID}`}
            />
          )}
          {rpStats && !rpStats.gang && (
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
