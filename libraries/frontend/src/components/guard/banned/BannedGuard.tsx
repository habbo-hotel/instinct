import { sessionContext } from 'context';
import React, { useContext } from 'react';
import { BannedGuardProps } from './BannedGuard.types';

export function BannedGuard({ children }: BannedGuardProps) {
  const { banned } = useContext(sessionContext);

  if (!banned) {
    return <>{children}</>;
  }

  return (
    <div style={{ textAlign: 'center', color: 'white', marginTop: '10%' }}>
      <i className="fa fa-skull fa-5x" />
      <h1 style={{ fontSize: '2em', textTransform: 'uppercase' }}>Banned</h1>
      <img src="https://i.imgur.com/njnHNvO.gif" />
    </div>
  );
}
