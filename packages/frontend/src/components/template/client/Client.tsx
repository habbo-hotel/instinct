import './Client.scss';
// @ts-ignore - Dependency doesn't have a good @types
import Flash from 'swfobject';
import Draggable from 'react-draggable';
import {UserGuard} from '../../guard/user';
import {ClientActions} from './client-actions';
import {FlashDisabled} from './flash-disabled';
import {LoadingScreen} from './loading-screen';
import {ClientContainer} from './client-container';
import {themeContext} from '../../../context/theme';
import React, {ReactElement, useContext} from 'react';

const widgets: ReactElement[] = [];

export function registerClientWidget(widget: ReactElement): void {
  widgets.push(widget);
}

export function Client() {
  const {showClient} = useContext(themeContext);
  const flashEnabled: boolean = Flash.getFlashPlayerVersion().major > 0;

  console.log(widgets.length);

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
            {widgets.map((Widget, i) => (
              <Draggable key={i}>
                <div>
                  <Widget />
                </div>
              </Draggable>
            ))}
          </>
        )}
        {!flashEnabled && <FlashDisabled />}
      </div>
    </UserGuard>
  );
}
