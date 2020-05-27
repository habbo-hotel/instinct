import { useContext } from 'react';
import { PermissionGuardProps } from './';
import { redirect } from 'instinct-frontend';
import { SessionContext } from 'app/context';

export function PermissionGuard({ children, permission }: PermissionGuardProps) {
  const sessionContext = useContext(SessionContext);

  if (sessionContext.user === undefined) {
    redirect('login');
  }

  if (!sessionContext.user?.rank?.permissions[permission]) {
    redirect('home');
    return null;
  }

  return children;
}
