import './Client.scss';
// @ts-ignore - Dependency doesn't have a good @types
import Flash from 'swfobject';
import React, {useContext} from 'react';
import {UserGuard} from '../../guard/user';
import {ClientActions} from './client-actions';
import {FlashDisabled} from './flash-disabled';
import {LoadingScreen} from './loading-screen';
import {themeContext} from '../../../context/theme';
import {ClientContainer} from './client-container';

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
