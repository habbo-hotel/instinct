import { useContext } from 'react';
import { UserGuardProps } from './';
import { sessionContext } from 'context';
import { useLocation } from 'wouter';

export function UserGuard({ children, redirect = true }: UserGuardProps) {
  const [location, setLocation] = useLocation();
  const { user } = useContext(sessionContext);

  if (!user) {
    if (redirect) {
      setLocation('/login');
    }

    return null;
  }

  return children;
}
