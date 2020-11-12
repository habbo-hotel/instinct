import React from 'react';
import {AdminPanel} from '@instinct-prj/admin';
import {RoleplayTheme} from '@instinct-prj/themes';
import {AdminPanelRP} from '@instinct-prj/admin-rp';

export function InstinctWebRP() {
  return (
    <>
      <RoleplayTheme />
      <AdminPanel />
      <AdminPanelRP />
    </>
  );
}
