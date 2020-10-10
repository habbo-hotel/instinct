import { Redirect } from 'wouter';
import React, { useContext, useEffect } from 'react';
import { sessionContext, sessionService, setURL } from 'instinct-frontend';

setURL('logout', <Logout />);

export function Logout() {
  const { setUser } = useContext(sessionContext);

  useEffect(() => {
    sessionService.logout();
    setUser(undefined);
  }, []);

  return <Redirect to="/login" />;
}
