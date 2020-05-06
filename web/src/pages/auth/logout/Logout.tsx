import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { SessionContext, SessionTypes, setURL } from 'instinct-frontend';

setURL('logout', <Logout />);

export function Logout() {
  const sessionContext = useContext<SessionTypes>(SessionContext);

  sessionContext.logout();

  return <Redirect to="/login" />;
}
