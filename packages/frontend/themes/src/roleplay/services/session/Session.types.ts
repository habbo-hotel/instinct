import {RPUser} from '@instinct-prj/interface-rp';

export interface RPSessionService {
  getRPUser(): Promise<RPUser>;
}
