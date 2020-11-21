import React from 'react';
import './Disconnected.scss';
import {Link, useLocation} from 'wouter';
import {Button} from '@instinct-prj/frontend';
import {UserGuard, setURL} from '@instinct-prj/frontend';

setURL('disconnected', <Disconnected />);

export function Disconnected() {
  const [location, setLocation] = useLocation();

  return (
    <UserGuard>
      <div className="disconnected">
        <div>
          <div className="text-center mb-3">
            <img alt="" src="/img/logo/regular.png" style={{height: '3em'}} />
          </div>
          <h2>You been disconnected</h2>
          <Button
            className="btn-block"
            color="info"
            onClick={() => setLocation('play')}
          >
            Try Again
          </Button>
          <Link to="/me">
            <span style={{cursor: 'pointer', fontSize: '.7em'}}>
              Go Back to Site
            </span>
          </Link>
        </div>
      </div>
    </UserGuard>
  );
}
