import { useContext } from 'react';
import { useLocation } from 'wouter';
import { sessionContext } from 'context';
import { PermissionGuardProps } from './';

export function PermissionGuard({ children, permission }: PermissionGuardProps) {
  const [location, setLocation] = useLocation();
  const { user } = useContext(sessionContext);
  const hasPermission = !!user?.rank?.permissions[permission];

  if (user === undefined) {
    setLocation('/login');
    return null;
  }

  if (!hasPermission) {
    setLocation('/home');
    return null;
  }

  return children;
}
