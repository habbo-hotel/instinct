import { setURL } from 'components';
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { SessionContext, SessionInterface } from '../../../app/context';

setURL('', <Landing />);

export function Landing() {
  const sessionContext = useContext<SessionInterface>(SessionContext);

  return sessionContext.user === undefined ? <Redirect to="/login" /> : <Redirect to="/home" />;
}
