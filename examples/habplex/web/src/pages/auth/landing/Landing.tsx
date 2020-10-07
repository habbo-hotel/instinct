import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { sessionContext, setLanding } from 'instinct-frontend';

setLanding(<Landing />);

export function Landing() {
  const { user } = useContext(sessionContext);

  return user === undefined ? <Redirect to="/login" /> : <Redirect to="/home" />;
}
