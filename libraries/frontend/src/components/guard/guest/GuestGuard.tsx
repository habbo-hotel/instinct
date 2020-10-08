import { useContext } from 'react';
import { useLocation } from 'wouter';
import { GuestGuardProps } from './';
import { sessionContext } from 'context';

export function GuestGuard({ children }: GuestGuardProps) {
  const [location, setLocation] = useLocation();
  const { user } = useContext(sessionContext);

  if (user) {
    setLocation('/home');
    return null;
  }

  return children;
}
