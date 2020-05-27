import { Children } from 'instinct-frontend';
import { Permissions } from 'instinct-rp-interfaces';

export interface PermissionGuardProps {
  children: Children;
  permission: keyof Permissions;
}
