import { useContext } from 'react';
import { UserGuardProps } from './';
import { redirect as redirectUser } from 'components';
import { SessionContext, SessionTypes } from 'context';

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
