import { User } from 'instinct-interfaces';
import React, { useContext, useEffect, useState } from 'react';
import { sessionService, Router, sessionContext, Client } from 'instinct-frontend';

export function Bootstrap() {
  const [ready, setReady] = useState(false);
  const { setUser } = useContext(sessionContext);

  useEffect(() => {
    async function init() {
      const user: User | undefined = await sessionService.init();
      setUser(user);
      setReady(true);
    }

    init();
  }, [setUser]);

  if (!ready) {
    return <i className="fa fa-spin fa-spinner"/>
  }

  return (
    <>
      <Router/>
      <Client/>
    </>
  )
}