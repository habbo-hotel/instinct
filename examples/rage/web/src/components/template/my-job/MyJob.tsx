import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { SessionContext } from 'app/context';
import { Card, ConfigContext } from 'instinct-frontend';

export function MyJob() {
  const sessionContext = useContext(SessionContext);
  const configContext = useContext(ConfigContext);
  return (
    <Card header="My Job">
      {sessionContext.user?.job && (
        <Link to={`/business/jobs/${sessionContext.user?.job?.id}`}>
          <div
            className="business-row"
            style={{ background: `url(${configContext.siteLink}/corps/${sessionContext.user?.job?.business?.badge}.gif) 10px no-repeat` }}
          >
            <div className="name">{sessionContext.user?.job?.name}</div>
            <div className="desc">{sessionContext.user?.job?.business?.name}</div>
          </div>
        </Link>
      )}
      {sessionContext.user?.job === undefined && (
        <>
          <p>You don't have a job!</p>
        </>
      )}
    </Card>
  );
}
