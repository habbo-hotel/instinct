import { useContext } from 'react';
import { GuestGuardProps } from './';
import { redirect } from '../../utility/router';
import { sessionContext, SessionContext } from 'context';

export function GuestGuard({ children }: GuestGuardProps) {
  const { user } = useContext(sessionContext);

  if (user) {
    redirect('home');
  }

  return children;
}
