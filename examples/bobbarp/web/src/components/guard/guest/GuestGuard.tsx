import { useContext } from 'react';
import { GuestGuardProps } from './';
import { redirect } from 'instinct-frontend';
import { SessionContext, SessionTypes } from 'app/context';

export function GuestGuard({ children }: GuestGuardProps) {
  const sessionContext: SessionTypes = useContext(SessionContext);

  if (sessionContext.user) {
    redirect('home');
  }

  return children;
}
