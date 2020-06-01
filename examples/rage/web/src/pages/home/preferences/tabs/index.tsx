import React from 'react';
import { EmailPreferences } from './email';
import { TabItem } from 'instinct-frontend';
import { ProfilePreferences } from './profile';
import { SecurityPreferences } from './security';
import { RoleplayPreferences } from './roleplay';
import {TwoFactor} from './two-factor/TwoFactor';

export const preferenceTabs: TabItem[] = [
  {
    name: 'Security Preferences',
    icon: 'lock',
    children: <SecurityPreferences />,
  },
  {
    name: 'Multi Factor Auth',
    icon: 'fingerprint',
    children: <TwoFactor/>,
  },
  {
    name: 'Email Preferences',
    icon: 'envelope',
    children: <EmailPreferences />,
  },
  {
    name: 'Profile Preferences',
    icon: 'user',
    children: <ProfilePreferences />,
  },
  {
    name: 'Roleplay Settings',
    icon: 'gamepad',
    children: <RoleplayPreferences />,
  },
];
