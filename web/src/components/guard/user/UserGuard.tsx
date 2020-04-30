import { useContext } from 'react';
import { UserGuardProps } from './';
import { redirect as redirectUser } from 'components';
import { SessionContext, SessionInterface } from 'app/context/session';

export function UserGuard({ children, redirect = true  }: UserGuardProps) {
  const sessionContext: SessionInterface = useContext(SessionContext);

  if (sessionContext.user === undefined) {

    if (redirect) {
      redirectUser('login');
    }

    return null;
  }

  return children;
}
