import { useContext } from 'react';
import { UserGuardProps } from './';
import { sessionContext } from 'context';
import { redirect as redirectUser } from 'components';

export function UserGuard({ children, redirect = true }: UserGuardProps) {
  const { user } = useContext(sessionContext);

  if (!user) {
    if (redirect) {
      redirectUser('login');
    }

    return null;
  }

  return children;
}
