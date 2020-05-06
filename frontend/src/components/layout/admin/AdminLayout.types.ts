import { ReactNode } from 'react';
import { Permissions } from 'instinct-interfaces';

export interface AdminLayoutProps {
  children: ReactNode;
  permission: keyof Permissions;
}
