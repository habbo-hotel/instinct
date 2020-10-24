import {ReactNode} from 'react';
import {Permissions} from '@instinct/interface';

export interface AdminLayoutProps {
  children: ReactNode;
  permission: keyof Permissions;
}
