import './Client.scss';
// @ts-ignore - Dependency doesn't have a good @types
import * as Flash from 'swfobject';
import { UserGuard } from 'components';
import React, { useContext } from 'react';
import { ClientActions } from './client-actions';
import { FlashDisabled } from './flash-disabled';
import { ClientContainer } from './client-container';
import { SessionContext, ThemeContext } from 'app/context';

export function Client() {
  const themeContext = useContext(ThemeContext);
  const sessionContext = useContext(SessionContext);
  const flashEnabled: boolean = Flash.getFlashPlayerVersion().major > 0;

  if (sessionContext.user?.online) {
    return null;
  }

  return (
    <UserGuard>
      <div className={`hotel-container ${themeContext.showClient ? 'visible' : 'not-visible' }`}>
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