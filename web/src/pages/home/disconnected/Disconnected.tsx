import React from 'react';
import './Disconnected.scss';
import { UserGuard, FrankBox, setURL, Button, redirect } from 'components';

setURL('disconnected', <Disconnected/>);

export function Disconnected() {
  return (
    <UserGuard>
      <div className="disconnected">
        <FrankBox title="Disconnected">
          <p>You been disconnected</p>
          <Button color="info" onClick={() => redirect('play')}>
            Try Again
          </Button>
        </FrankBox>
      </div>
    </UserGuard>
  )
}