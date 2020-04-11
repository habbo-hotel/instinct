import { setLanding } from 'components';
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { SessionContext, SessionInterface } from '../../../app/context';

setLanding(<Landing />);

export function Landing() {
  const sessionContext = useContext<SessionInterface>(SessionContext);

  return sessionContext.user === undefined ? <Redirect to="/login" /> : <Redirect to="/home" />;
}
