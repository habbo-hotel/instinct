import { UserGuardProps } from './';
import { sessionContext } from 'context';
import { useContext, useEffect } from 'react';
import { redirect as redirectUser } from 'components';

export function UserGuard({ children, redirect = true }: UserGuardProps) {
  const { user } = useContext(sessionContext);

  useEffect(() => {
    if (!user && redirect) {
      redirectUser('login');
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return children;
}
