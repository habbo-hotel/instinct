import React from 'react';
import {ArticleList, setURL} from '@instinct-prj/frontend';
import {GuestLayout} from '../../../components/layout/guest';

setURL('login', <Login />);

export function Login() {
  return (
    <GuestLayout>
      <ArticleList />
    </GuestLayout>
  );
}
