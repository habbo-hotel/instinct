import './Client.scss';
import React, {useContext} from 'react';
// @ts-ignore - Dependency doesn't have a good @types
import Flash from 'swfobject';
import {UserGuard} from '../../guard/user';
import {ClientActions} from './client-actions';
import {FlashDisabled} from './flash-disabled';
import {LoadingScreen} from './loading-screen';
import {ClientContainer} from './client-container';
import {themeContext} from '../../../context/theme';

export function Client() {
  const {showClient} = useContext(themeContext);
  const flashEnabled: boolean = Flash.getFlashPlayerVersion().major > 0;

  return (
    <UserGuard redirect={false}>
      <div
        className={`hotel-container ${showClient ? 'visible' : 'not-visible'}`}
      >
        <ClientActions />
        {flashEnabled && (
          <>
            <LoadingScreen />
            <ClientContainer />
          </>
        )}
        {!flashEnabled && <FlashDisabled />}
      </div>
    </UserGuard>
  );
}
