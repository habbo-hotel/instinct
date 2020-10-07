import { useContext } from 'react';
import { redirect } from 'components';
import { sessionContext } from 'context';
import { PermissionGuardProps } from './';

export function PermissionGuard({ children, permission }: PermissionGuardProps) {
  const { user } = useContext(sessionContext);

  if (user === undefined) {
    redirect('login');
  }

  if (user?.rank?.permissions[permission]) {
    redirect('home');
    return null;
  }

  return children;
}
