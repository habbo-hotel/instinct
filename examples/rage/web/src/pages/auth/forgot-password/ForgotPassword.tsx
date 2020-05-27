import React from 'react';
import { GuestLayout } from 'components';
import { setURL } from 'instinct-frontend';

setURL('forgot-password', <ForgotPassword />);

export function ForgotPassword() {
  return (
    <GuestLayout>
      <p>Forgot Password?</p>
    </GuestLayout>
  );
}
