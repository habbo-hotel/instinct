import {useLocation} from 'wouter';
import {PermissionGuardProps} from './';
import {useContext, useEffect} from 'react';
import {sessionContext} from '../../../context/session';

export function PermissionGuard({
  children,
  permission,
  redirect = true,
}: PermissionGuardProps) {
  const [location, setLocation] = useLocation();
  const {user} = useContext(sessionContext);
  const hasPermission = !!user?.rank?.permissions[permission];

  useEffect(() => {
    if (redirect) {
      setLocation(user ? '/home' : '/login');
    }
  }, [redirect, hasPermission]);

  if (!hasPermission) {
    return null;
  }

  return children;
}
