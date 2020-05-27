import React, { useContext } from 'react';
import { setURL } from 'instinct-frontend';
import { Redirect } from 'react-router-dom';
import { SessionContext, SessionTypes } from 'app/context';

setURL('logout', <Logout />);

export function Logout() {
  const sessionContext = useContext<SessionTypes>(SessionContext);

  sessionContext.logout();

  return <Redirect to="/login" />;
}
