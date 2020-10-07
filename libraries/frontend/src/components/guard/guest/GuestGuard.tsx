import { GuestGuardProps } from './';
import { sessionContext } from 'context';
import { useContext, useEffect } from 'react';
import { redirect } from '../../utility/router';

export function GuestGuard({ children }: GuestGuardProps) {
  const { user } = useContext(sessionContext);

  useEffect(() => {
    if (user) {
      redirect('home');
    }
  }, [user]);

  return children;
}
