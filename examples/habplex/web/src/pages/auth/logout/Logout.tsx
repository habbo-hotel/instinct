import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { sessionContext, setURL } from 'instinct-frontend';

setURL('logout', <Logout />);

export function Logout() {
  const { logout } = useContext(sessionContext);

  logout!();

  return <Redirect to="/login" />;
}
