import React from 'react';
import {ArticleList, GuestLayout, setURL} from '@instinct-prj/frontend';

setURL('login', <Login />);

export function Login() {
  return (
    <GuestLayout>
      <ArticleList />
    </GuestLayout>
  );
}
