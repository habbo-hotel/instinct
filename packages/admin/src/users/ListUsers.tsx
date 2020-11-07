import React from 'react';
import {UsersLayout} from './UsersLayout';
import {setURL} from '@instinct-prj/frontend';

setURL('admin/users', <ListUsers />);

export function ListUsers() {
  return (
    <UsersLayout permission="websiteManageUsers">
      <h2>Users</h2>
      <p>Coming soon</p>
    </UsersLayout>
  );
}
