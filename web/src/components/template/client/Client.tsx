import './Client.scss';
import React from 'react';
import { UserGuard } from 'components';
import { ClientActions } from './client-actions';
import { ClientContainer } from './client-container';

export function Client() {
  return (
    <UserGuard>
      <div className="hotel-container">
        <ClientActions/>
        <ClientContainer/>
      </div>
    </UserGuard>
  )
}