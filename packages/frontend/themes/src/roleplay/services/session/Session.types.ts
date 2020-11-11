import {RPUser, UserRPStats} from '@instinct-prj/interface-rp';

export interface RPSessionService {
  getRPStats(): Promise<UserRPStats>;
}
