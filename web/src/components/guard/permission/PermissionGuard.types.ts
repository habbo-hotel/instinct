import { Children } from 'instinct-frontend';
import { Permissions} from 'instinct-interfaces';

export interface PermissionGuardProps {
  children: Children;
  permission: keyof Permissions;
}
