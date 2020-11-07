import React from 'react';
import {setURL} from '@instinct-prj/frontend';
import {UsersLayout} from './UsersLayout';

setURL('admin/users', <ListUsers />);

export function ListUsers() {
  return (
    <UsersLayout>
      <h2>Users</h2>
      <p>Coming soon</p>
    </UsersLayout>
  );
}
