import { useContext } from 'react';
import { UserGuardProps } from './';
import { redirect as redirectUser } from 'components';
import { sessionContext, SessionContext } from 'context';

export function UserGuard({ children, redirect = true }: UserGuardProps) {
  const sessionContext: SessionContext = useContext(sessionContext);

  if (sessionContext.user === undefined) {
    if (redirect) {
      redirectUser('login');
    }

    return null;
  }

  return children;
}
