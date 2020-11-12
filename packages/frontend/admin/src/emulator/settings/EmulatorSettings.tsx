import React from 'react';
import {setURL} from '@instinct-prj/frontend';
import {EmulatorLayout} from '../EmulatorLayout';

setURL('admin/emulator/settings', <EmulatorSettings />);

export function EmulatorSettings() {
  return (
    <EmulatorLayout>
      <p>Settings</p>
    </EmulatorLayout>
  );
}
