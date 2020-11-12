import React from 'react';
import {HomePage} from './widgets/HomePage';
import {setURL} from '@instinct-prj/frontend';
import {UserLayout} from '../../../components/layout/user';

setURL('home', <Home />);
setURL('me', <Home />);

export function Home() {
  return (
    <UserLayout>
      <HomePage />
    </UserLayout>
  );
}
