import './Client.scss';
import React from 'react';
// @ts-ignore - Dependency doesn't have a good @types
import * as Flash from 'swfobject';
import { UserGuard } from 'components';
import { ClientActions } from './client-actions';
import { FlashDisabled } from './flash-disabled';
import { ClientContainer } from './client-container';

export function Client() {
  const flashEnabled: boolean = Flash.getFlashPlayerVersion().major > 0;
  return (
    <UserGuard>
      <div className="hotel-container">
        <ClientActions/>
        {
          flashEnabled
            ? <ClientContainer/>
            : <FlashDisabled/>
        }
      </div>
    </UserGuard>
  )
}