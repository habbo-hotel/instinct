import './ClientUI.scss';
import React from 'react';
import { ActionBar } from './action-bar';
import { UserStatus } from './user-status';
import { Widgets } from './widgets/Widgets';

export function ClientUI() {
  return (
    <div id="client-ui">
      <UserStatus />
      <Widgets />
      <ActionBar />
    </div>
  );
}
