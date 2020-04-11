import { useContext } from 'react';
import { GuestGuardProps } from './';
import { redirect } from '../../utility/router';
import { SessionContext, SessionInterface } from 'app/context/session';

export function GuestGuard({ children }: GuestGuardProps) {
  const sessionContext: SessionInterface = useContext(SessionContext);

  if (sessionContext.user) {
    redirect('home');
  }

  return children;
}
