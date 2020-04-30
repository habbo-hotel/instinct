import React from 'react';
import { TabItem } from 'components';
import { EmailPreferences } from './email';
import { ProfilePreferences } from './profile';
import { SecurityPreferences } from './security';

export const preferenceTabs: TabItem[] = [
  {
    name: 'Security Preferences',
    icon: 'lock',
    children: <SecurityPreferences/>
  },
  {
    name: 'Email Preferences',
    icon: 'envelope',
    children: <EmailPreferences/>
  },
  {
    name: 'Profile Preferences',
    icon: 'user',
    children: <ProfilePreferences/>,
  }
];
