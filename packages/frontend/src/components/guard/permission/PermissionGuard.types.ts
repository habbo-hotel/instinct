import {Children} from '../../';
import {Permissions} from '@instinct/interface';

export interface PermissionGuardProps {
  children: Children;
  permission: keyof Permissions;
  redirect?: boolean;
}
