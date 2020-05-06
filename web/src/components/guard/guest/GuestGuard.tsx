import { useContext } from 'react';
import { GuestGuardProps } from './';
import { redirect } from '../../utility/router';
import { SessionContext, SessionTypes } from 'instinct-frontend';

export function GuestGuard({ children }: GuestGuardProps) {
  const sessionContext: SessionTypes = useContext(SessionContext);

  if (sessionContext.user) {
    redirect('home');
  }

  return children;
}
