import {UserRPStats} from './RPStats';
import {User} from '@instinct-prj/interface';

export interface RPUser extends User {
  rpStats: UserRPStats;
}
