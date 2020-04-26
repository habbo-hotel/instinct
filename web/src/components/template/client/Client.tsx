import './Client.scss';
// @ts-ignore - Dependency doesn't have a good @types
import * as Flash from 'swfobject';
import { UserGuard } from 'components';
import React, { useContext } from 'react';
import { ThemeContext } from 'app/context';
import { ClientActions } from './client-actions';
import { FlashDisabled } from './flash-disabled';
import { ClientContainer } from './client-container';

export function Client() {
  const themeContext = useContext(ThemeContext);
  const flashEnabled: boolean = Flash.getFlashPlayerVersion().major > 0;
  return (
    <UserGuard>
      <div className="hotel-container" style={{ visibility: themeContext.showClient ? 'visible' : 'hidden' }}>
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