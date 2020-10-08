import React from 'react';
import './Disconnected.scss';
import { useLocation } from 'wouter';
import { Button } from 'instinct-frontend';
import { UserGuard, FrankBox, setURL } from 'instinct-frontend';

setURL('disconnected', <Disconnected/>);

export function Disconnected() {
  const [ location, setLocation ] = useLocation();

  return (
    <UserGuard>
      <div className="disconnected">
        <FrankBox title="Disconnected">
          <p>You been disconnected</p>
          <Button color="info" onClick={() => setLocation('play')}>
            Try Again
          </Button>
        </FrankBox>
      </div>
    </UserGuard>
  )
}