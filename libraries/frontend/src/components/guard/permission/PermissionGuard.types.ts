import { Children } from 'components';
import { Permissions } from 'instinct-interfaces';

export interface PermissionGuardProps {
  children: Children;
  permission: keyof Permissions;
}
