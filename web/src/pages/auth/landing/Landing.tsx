import { setLanding } from 'components';
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { SessionContext, SessionTypes } from '../../../app/context';

setLanding(<Landing />);

export function Landing() {
  const sessionContext = useContext<SessionTypes>(SessionContext);

  return sessionContext.user === undefined ? <Redirect to="/login" /> : <Redirect to="/home" />;
}
