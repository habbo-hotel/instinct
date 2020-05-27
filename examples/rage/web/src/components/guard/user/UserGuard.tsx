import { useContext } from 'react';
import { UserGuardProps } from './';
import { SessionContext, SessionTypes } from 'app/context';
import { redirect as redirectUser } from 'instinct-frontend';

export function UserGuard({ children, redirect = true }: UserGuardProps) {
  const sessionContext: SessionTypes = useContext(SessionContext);

  if (sessionContext.user === undefined) {
    if (redirect) {
      redirectUser('login');
    }

    return null;
  }

  return children;
}
