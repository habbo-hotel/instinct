import { useContext } from 'react';
import { GuestGuardProps } from './';
import { sessionContext } from 'context';
import { redirect } from '../../utility/router';

export function GuestGuard({ children }: GuestGuardProps) {
  const { user } = useContext(sessionContext);

  if (user) {
    redirect('home');
    return null;
  }

  return children;
}
