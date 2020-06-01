import { GangRow } from '../gang-row';
import { Card } from 'instinct-frontend';
import React, { useContext } from 'react';
import { SessionContext } from 'app/context';

export function MyGang() {
  const sessionContext = useContext(SessionContext);
  return (
    <Card header="My Gang">
      {sessionContext.session?.user?.gang && <GangRow gang={sessionContext.session?.user.gang} />}
      {sessionContext.session?.user?.job === undefined && (
        <>
          <p>You don't belong to a gang</p>
        </>
      )}
    </Card>
  );
}
