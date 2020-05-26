import './Guest.scss';
import React from 'react';
import { GuestGuard } from 'components';
import { UserLayoutProps } from 'instinct-frontend';

export function GuestLayout({ children }: UserLayoutProps) {
  return (
    <GuestGuard>
      <div className="guest-layout">
        <div className="content">
          <div className="row" style={{ margin: '0 auto' }}>
            {children}
          </div>
        </div>
      </div>
    </GuestGuard>
  );
}