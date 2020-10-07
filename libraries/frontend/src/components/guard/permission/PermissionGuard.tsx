import { redirect } from 'components';
import { sessionContext } from 'context';
import { PermissionGuardProps } from './';
import { useContext, useEffect } from 'react';

export function PermissionGuard({ children, permission }: PermissionGuardProps) {
  const { user } = useContext(sessionContext);
  const hasPermission = !!user?.rank?.permissions[permission];

  useEffect(() => {
    if (user === undefined) {
      redirect('login');
    }

    if (hasPermission) {
      redirect('home');
    }
  }, [user]);

  if (!hasPermission) {
    return null;
  }

  return children;
}
