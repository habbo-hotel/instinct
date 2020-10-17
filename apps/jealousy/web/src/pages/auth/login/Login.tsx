import React from 'react';
import { ArticleList, GuestLayout, setURL } from '@instinct/frontend';

setURL('login', <Login />);

export function Login() {
  return (
    <GuestLayout>
      <ArticleList />
    </GuestLayout>
  );
}
