import { Redirect } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { sessionContext, setURL } from 'instinct-frontend';

setURL('logout', <Logout />);

export function Logout() {
  const { logout } = useContext(sessionContext);

  useEffect(() => {
    logout!();
  }, []);

  return <Redirect to="/login" />;
}
