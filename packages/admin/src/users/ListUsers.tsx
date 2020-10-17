import React from 'react';
import {setURL} from '@instinct/frontend';
import {UsersLayout} from './UsersLayout';

setURL('admin/users', <ListUsers />);

export function ListUsers() {
  return (
    <UsersLayout>
      <h3 className="aside-title">Users</h3>
      <p>Coming soon</p>
    </UsersLayout>
  );
}
