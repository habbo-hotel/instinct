import React from 'react';
import { GuestLayout, setURL } from 'instinct-frontend';

setURL('forgot-password', <ForgotPassword />);

export function ForgotPassword() {
  return (
    <GuestLayout>
      <p>Forgot Password?</p>
    </GuestLayout>
  );
}
