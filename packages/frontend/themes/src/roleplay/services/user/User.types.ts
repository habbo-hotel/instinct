import {UserRPStats} from '@instinct-prj/interface-rp';

export interface UserService {
  getRPStats(username: string): Promise<UserRPStats>;
}
