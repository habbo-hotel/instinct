import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { SessionContext, SessionTypes, setLanding } from 'instinct-frontend';

setLanding(<Landing />);

export function Landing() {
  const sessionContext = useContext<SessionTypes>(SessionContext);

  return sessionContext.user === undefined ? <Redirect to="/login" /> : <Redirect to="/home" />;
}
