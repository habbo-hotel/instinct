import { Redirect } from 'wouter';
import React, { useContext, useEffect } from 'react';
import { sessionContext, setURL } from '@instinct/frontend';

setURL('logout', <Logout />);

export function Logout() {
  const { setUser } = useContext(sessionContext);

  useEffect(() => {
    function logout() {
      setUser(undefined);
    }

    logout();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <Redirect to="/login" />;
}
