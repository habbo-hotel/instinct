import {useContext} from 'react';
import {useLocation} from 'wouter';
import {PermissionGuardProps} from './';
import {sessionContext} from '../../../context/session';

export function PermissionGuard({children, permission}: PermissionGuardProps) {
  const [location, setLocation] = useLocation();
  const {user} = useContext(sessionContext);
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
