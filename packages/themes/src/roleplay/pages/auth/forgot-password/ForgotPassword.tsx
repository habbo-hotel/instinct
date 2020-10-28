import React from 'react';
import {useLocation} from 'wouter';
import {GuestLayout} from '../../../components/layout/guest';
import {ForgotPasswordModal, setURL} from '@instinct-prj/frontend';

setURL('forgot-password', <ForgotPassword />);

export function ForgotPassword() {
  const [location, setLocation] = useLocation();
  return (
    <GuestLayout>
      <ForgotPasswordModal isOpen onToggle={() => setLocation('/login')} />
    </GuestLayout>
  );
}
