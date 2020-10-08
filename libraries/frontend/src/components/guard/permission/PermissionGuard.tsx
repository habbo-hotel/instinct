import { useContext } from 'react';
import { redirect } from 'components';
import { sessionContext } from 'context';
import { PermissionGuardProps } from './';

export function PermissionGuard({ children, permission }: PermissionGuardProps) {
  const { user } = useContext(sessionContext);
  const hasPermission = !!user?.rank?.permissions[permission];

  if (user === undefined) {
    redirect('login');
    return null;
  }

  if (!hasPermission) {
    redirect('home');
    return null;
  }

  return children;
}
