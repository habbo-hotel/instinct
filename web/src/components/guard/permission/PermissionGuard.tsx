import { useContext } from 'react';
import { redirect } from 'components';
import { PermissionGuardProps } from './';
import { SessionContext } from 'instinct-frontend';

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