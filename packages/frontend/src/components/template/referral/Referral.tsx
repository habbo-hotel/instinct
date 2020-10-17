import React, {useContext} from 'react';
import {Card, sessionContext} from '@instinct/frontend';

export function Referral() {
  const {user} = useContext(sessionContext);
  return (
    <Card header="Referral">
      <p>
        Invite your friends to earn diamonds! For each invite, you'll earn{' '}
        <b>10</b> diamonds
      </p>
      <div className="row">
        <div className="col-2">
          <button className="btn btn-block btn-dark">Copy</button>
        </div>
        <div className="col-10">
          <input
            className="form-control"
            disabled
            value={`http://localhost:3001/referrals/${user!.username}`}
          />
        </div>
      </div>
    </Card>
  );
}
