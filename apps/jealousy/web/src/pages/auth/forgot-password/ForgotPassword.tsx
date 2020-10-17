import React from 'react';
import { useLocation } from 'wouter';
import { ForgotPasswordModal, GuestLayout, setURL } from '@instinct/frontend';

setURL('forgot-password', <ForgotPassword/>);

export function ForgotPassword() {
  const [ location, setLocation ] = useLocation();
  return (
    <GuestLayout>
      <ForgotPasswordModal isOpen onToggle={() => setLocation('/login')}/>
    </GuestLayout>
  )
}