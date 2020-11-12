import React from 'react';
import {setURL} from '@instinct-prj/frontend';
import {EmulatorLayout} from '../EmulatorLayout';

setURL('admin/emulator/texts', <EmulatorTexts />);

export function EmulatorTexts() {
  return (
    <EmulatorLayout>
      <p>Texts</p>
    </EmulatorLayout>
  );
}
